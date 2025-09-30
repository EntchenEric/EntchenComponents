import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Popover } from './Popover';
import 'jest-styled-components';

describe('Popover Component', () => {
    const triggerText = 'Open Popover';
    const contentText = 'This is the popover content.';
    const PopoverUncontrolled = (
        <Popover
            trigger={<button>{triggerText}</button>}
            popoverContent={<div>{contentText}</div>}
        />
    );

    it('should render the trigger element correctly', () => {
        render(PopoverUncontrolled);
        expect(screen.getByText(triggerText)).toBeInTheDocument();
    });

    it('should not render the popover content by default', () => {
        render(PopoverUncontrolled);
        expect(screen.queryByText(contentText)).not.toBeInTheDocument();
    });

    it('should render the popover content when defaultOpen is true', () => {
        render(
            <Popover
                defaultOpen
                trigger={<button>{triggerText}</button>}
                popoverContent={<div>{contentText}</div>}
            />
        );
        expect(screen.getByText(contentText)).toBeInTheDocument();
    });

    it('should open and close the popover on trigger clicks (uncontrolled)', async () => {
        const user = userEvent.setup();
        render(PopoverUncontrolled);

        await user.click(screen.getByText(triggerText));
        expect(screen.getByText(contentText)).toBeInTheDocument();

        await user.click(screen.getByText(triggerText));
        expect(screen.queryByText(contentText)).not.toBeInTheDocument();
    });

    it('should close the popover when clicking outside (uncontrolled)', async () => {
        const user = userEvent.setup();
        render(PopoverUncontrolled);

        await user.click(screen.getByText(triggerText));
        expect(screen.getByText(contentText)).toBeInTheDocument();

        await user.click(document.body);
        expect(screen.queryByText(contentText)).not.toBeInTheDocument();
    });

    it('should be visible when `open` prop is true and hidden when false (controlled)', () => {
        const { rerender } = render(
            <Popover
                open={true}
                onOpenChange={() => { }}
                trigger={<button>{triggerText}</button>}
                popoverContent={<div>{contentText}</div>}
            />
        );
        expect(screen.getByText(contentText)).toBeInTheDocument();

        rerender(
            <Popover
                open={false}
                onOpenChange={() => { }}
                trigger={<button>{triggerText}</button>}
                popoverContent={<div>{contentText}</div>}
            />
        );
        expect(screen.queryByText(contentText)).not.toBeInTheDocument();
    });

    it('should call onOpenChange with the correct state on trigger click (controlled)', async () => {
        const user = userEvent.setup();
        const onOpenChangeMock = jest.fn();
        const { rerender } = render(
            <Popover
                open={false}
                onOpenChange={onOpenChangeMock}
                trigger={<button>{triggerText}</button>}
                popoverContent={<div>{contentText}</div>}
            />
        );

        await user.click(screen.getByText(triggerText));
        expect(onOpenChangeMock).toHaveBeenCalledWith(true);

        rerender(
            <Popover
                open={true}
                onOpenChange={onOpenChangeMock}
                trigger={<button>{triggerText}</button>}
                popoverContent={<div>{contentText}</div>}
            />
        );

        await user.click(screen.getByText(triggerText));
        expect(onOpenChangeMock).toHaveBeenCalledWith(false);
    });

    it('should not change its open state internally when controlled', async () => {
        const user = userEvent.setup();
        const onOpenChangeMock = jest.fn();
        render(
            <Popover
                open={false}
                onOpenChange={onOpenChangeMock}
                trigger={<button>{triggerText}</button>}
                popoverContent={<div>{contentText}</div>}
            />
        );

        await user.click(screen.getByText(triggerText));
        expect(onOpenChangeMock).toHaveBeenCalledWith(true);
        expect(screen.queryByText(contentText)).not.toBeInTheDocument();
    });

    // We mock `getBoundingClientRect` because JSDOM doesn't have a layout engine.
    it('should position at the bottom when there is enough space', async () => {
        const user = userEvent.setup();
        Object.defineProperty(window, 'innerHeight', { writable: true, value: 800 });
        const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
        Element.prototype.getBoundingClientRect = () => ({
            top: 100, bottom: 150, left: 50, right: 150, height: 50, width: 100, x: 50, y: 100, toJSON: () => { },
        });

        render(PopoverUncontrolled);
        await user.click(screen.getByText(triggerText));

        const content = await screen.findByTestId('popover-content');
        expect(content).toHaveAttribute('data-position', 'bottom');

        Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
    });

    it('should position the popover at the top when there is not enough space below', async () => {
        const user = userEvent.setup();
        Object.defineProperty(window, 'innerHeight', { writable: true, value: 800 });
        const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
        Element.prototype.getBoundingClientRect = () => ({
            top: 700, bottom: 750, left: 50, right: 150, height: 50, width: 100, x: 50, y: 700, toJSON: () => { },
        });
        const heightSpy = jest
            .spyOn(HTMLElement.prototype, 'offsetHeight', 'get')
            .mockReturnValue(200);

        render(PopoverUncontrolled);
        await user.click(screen.getByText(triggerText));
        const content = await screen.findByTestId('popover-content');
        expect(content).toHaveAttribute('data-position', 'top');
        Element.prototype.getBoundingClientRect = originalGetBoundingClientRect;
        heightSpy.mockRestore();
    });
});