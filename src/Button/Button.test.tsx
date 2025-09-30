import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-styled-components";
import "@testing-library/jest-dom";

import { Button, ButtonProps } from "./Button";

describe("Button component", () => {
    const defaultTitle = "Click me";

    const renderButton = (props?: Partial<ButtonProps>) =>
        render(<Button title={defaultTitle} {...props} />);

    it("renders the button with given title", () => {
        renderButton();
        expect(screen.getByRole("button")).toHaveTextContent(defaultTitle);
    });

    it("renders leftIcon and rightIcon when provided and not loading", () => {
        const LeftIcon = () => <svg data-testid="left-icon" />;
        const RightIcon = () => <svg data-testid="right-icon" />;

        renderButton({ leftIcon: <LeftIcon />, rightIcon: <RightIcon /> });

        expect(screen.getByTestId("left-icon")).toBeInTheDocument();
        expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });

    it("does not render icons when loading is true", () => {
        const LeftIcon = () => <svg data-testid="left-icon" />;
        const RightIcon = () => <svg data-testid="right-icon" />;

        renderButton({ leftIcon: <LeftIcon />, rightIcon: <RightIcon />, loading: true });

        expect(screen.queryByTestId("left-icon")).not.toBeInTheDocument();
        expect(screen.queryByTestId("right-icon")).not.toBeInTheDocument();
    });

    it("renders a spinner SVG when loading is true with appropriate aria attributes", () => {
        renderButton({ loading: true });

        const spinner = screen.getByRole("status");

        expect(spinner).toBeInTheDocument();
        expect(spinner).toHaveAttribute("aria-label", "loading");

        expect(screen.getByRole('button')).toBeDisabled();
        expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    });

    it.each([
        ["primary", "var(--entchen-primary)", "var(--entchen-text)"],
        ["secondary", "var(--entchen-secondary)", "var(--entchen-text-secondary)"],
        ["danger", "#dc2626", "white"],
        ["warning", "#eab308", "black"],
    ] as [string, string, string][])(
        'applies correct styles for variant "%s"',
        (variant, expectedBgColor, expectedColor) => {
            const { container } = render(<Button title={defaultTitle} variant={variant as any} />);
            const button = container.firstChild;
            expect(button).toHaveStyleRule('background-color', expectedBgColor);
            expect(button).toHaveStyleRule('color', expectedColor);
        }
    );

    it('disables the button when disabled prop is true', () => {
        renderButton({ disabled: true });
        const btn = screen.getByRole('button');
        expect(btn).toBeDisabled();
        expect(btn).toHaveAttribute('aria-disabled', 'true');
    });

    it('disables the button when loading prop is true even if disabled is false', () => {
        renderButton({ disabled: false, loading: true });
        const btn = screen.getByRole('button');
        expect(btn).toBeDisabled();
        expect(btn).toHaveAttribute('aria-disabled', 'true');
    });

    it('calls onClick handler when clicked and not disabled/loading', async () => {
        const user = userEvent.setup({ pointerEventsCheck: 0 });
        const onClickMock = jest.fn();

        renderButton({ onClick: onClickMock });

        await user.click(screen.getByRole('button'));

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick handler when disabled', async () => {
        const user = userEvent.setup({ pointerEventsCheck: 0 });
        const onClickMock = jest.fn();

        renderButton({ onClick: onClickMock, disabled: true });

        await user.click(screen.getByRole('button'));

        expect(onClickMock).not.toHaveBeenCalled();
    })

    it('does not call onClick handler when loading', async () => {
        const user = userEvent.setup({ pointerEventsCheck: 0 });
        const onClickMock = jest.fn();

        renderButton({ onClick: onClickMock, loading: true });

        await user.click(screen.getByRole('button'));

        expect(onClickMock).not.toHaveBeenCalled();
    })
});