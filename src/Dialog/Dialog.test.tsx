import React from 'react';
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Dialog, DialogProps } from './Dialog';
import 'jest-styled-components';

const ANIMATION_DURATION = 200;

const TestDialog = (props: Partial<DialogProps>) => (
    <Dialog
        trigger={(openDialog) => <button onClick={openDialog}>Open Dialog</button>}
        title="Test Dialog Title"
        description="This is a test description."
        {...props}
    />
);

describe('Dialog Component', () => {
    beforeEach(() => {
        window.requestAnimationFrame = (callback) => setTimeout(callback, 0);
        document.body.style.overflow = '';
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('should close the dialog when the Escape key is pressed', async () => {
        jest.useFakeTimers();
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        render(<TestDialog />);
        await user.click(screen.getByRole('button', { name: /Open Dialog/i }));
        act(() => jest.advanceTimersByTime(0));
        const dialog = screen.getByRole('dialog');
        await waitFor(() => {
            expect(screen.getByRole('dialog')).toBeVisible();
        });
        fireEvent.keyDown(dialog, { key: 'Escape' });
        act(() => jest.advanceTimersByTime(ANIMATION_DURATION));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    it('should close the dialog when clicking outside the content', async () => {
        const onCloseMock = jest.fn();
        render(<TestDialog onDialogClose={onCloseMock} />);
        fireEvent.click(screen.getByRole('button', { name: /Open Dialog/i }));
        act(() => jest.advanceTimersByTime(0));
        await waitFor(() =>
            expect(screen.getByRole('dialog')).toBeVisible()
        );
        const overlay = screen.getByRole('dialog');
        const clickOutsideHandler = overlay.querySelector('div[aria-hidden="true"]');
        if (!clickOutsideHandler) throw new Error("ClickOutsideHandler not found");
        fireEvent.click(clickOutsideHandler);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
        await act(async () => {
            jest.advanceTimersByTime(ANIMATION_DURATION);
        });
        await waitFor(() =>
            expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
        );
    });

    it('should call onDialogClose when closing', async () => {
        const user = userEvent.setup();
        const onCloseMock = jest.fn();
        render(<TestDialog onDialogClose={onCloseMock} />);
        await user.click(screen.getByRole('button', { name: /Open Dialog/i }));
        const dialog = await screen.findByRole('dialog');
        fireEvent.keyDown(dialog, { key: 'Escape' });
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('should manage body overflow style correctly', async () => {
        jest.useFakeTimers();
        render(<TestDialog />);
        expect(document.body.style.overflow).toBe('');
        fireEvent.click(screen.getByRole('button', { name: /Open Dialog/i }));
        act(() => jest.advanceTimersByTime(0));
        expect(document.body.style.overflow).toBe("hidden");
        fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
        act(() => jest.advanceTimersByTime(ANIMATION_DURATION));
        expect(document.body.style.overflow).toBe("");
    });
});