import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";

import { Alert, AlertProps, AlertVariant } from "./Alert";

describe("Alert component", () => {
    const defaultTitle = "Alert Title";
    const defaultDescription = "This is an alert description.";
    const TestIcon = () => <svg data-testid="icon" />;

    const renderAlert = (props?: Partial<AlertProps>) =>
        render(<Alert title={defaultTitle} {...props} />);

    it("renders with the given title", () => {
        renderAlert();
        expect(screen.getByText(defaultTitle)).toBeInTheDocument();
    });

    it("renders the description if provided", () => {
        renderAlert({ description: defaultDescription });
        expect(screen.getByText(defaultDescription)).toBeInTheDocument();
    });

    it("does not render description if not provided", () => {
        renderAlert();
        expect(screen.queryByText(defaultDescription)).not.toBeInTheDocument();
    });

    it("renders the icon if provided", () => {
        renderAlert({ icon: <TestIcon /> });
        expect(screen.getByTestId("icon")).toBeInTheDocument();
    });

    it("does not render icon if not provided", () => {
        renderAlert();
        expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    });

    it("has role alert and proper aria attributes for accessibility", () => {
        renderAlert();

        const container = screen.getByRole("alert");

        expect(container).toHaveAttribute("aria-live", "polite");
        expect(container).toHaveAttribute("aria-atomic", "true");
    });

    const variants: [AlertVariant, string, string][] = [
        ["default", "var(--entchen-primary)", "var(--entchen-text)"],
        ["danger", "#fee2e2", "#b91c1c"],
        ["warning", "#fef9c3", "#b45309"],
        ["success", "#dcfce7", "#15803d"],
    ];

    variants.forEach(([variant, expectedBgColor, expectedColor]) => {
        it(`applies correct styles for variant "${variant}"`, () => {
            const { container } = render(<Alert title={defaultTitle} variant={variant} />);
            const alertDiv = container.firstChild;
            expect(alertDiv).toHaveStyleRule('background-color', expectedBgColor);
            expect(alertDiv).toHaveStyleRule('color', expectedColor);
        });
    });
});