import React, { useState, ReactNode } from "react";
import styled from "styled-components";
import { ButtonProps, Button } from "../Button/Button";

export interface DialogProps {
    trigger: (openDialog: () => void) => ReactNode;
    title: ReactNode;
    description?: ReactNode;
    onConfirm?: (closeDialog: () => void) => void;
    onCancel?: (closeDialog: () => void) => void;
    onDialogClose?: () => void;
    confirmButton?: ButtonProps;
    cancelButton?: ButtonProps;
}

const ANIMATION_DURATION = 200; // ms

// #region Styled Components
const DialogOverlay = styled.div<{ $isVisible: boolean }>`
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => (props.$isVisible ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)')};
    backdrop-filter: ${(props) => (props.$isVisible ? 'blur(4px)' : 'blur(0)')};
    -webkit-backdrop-filter: ${(props) => (props.$isVisible ? 'blur(4px)' : 'blur(0)')};
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    pointer-events: ${(props) => (props.$isVisible ? 'auto' : 'none')};
    transition: all ${ANIMATION_DURATION}ms ease-out;
`;

const ClickOutsideHandler = styled.div`
    position: absolute;
    inset: 0;
`;

const DialogContent = styled.div<{ $isVisible: boolean }>`
    position: relative;
    max-width: 32rem; /* 512px */
    width: 100%;
    margin: 0 1rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    background-color: var(--entchen-primary);
    color: var(--entchen-text);

    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    transform: ${(props) => (props.$isVisible ? 'scale(1)' : 'scale(0.95)')};
    transform-origin: center center;
    transition: opacity ${ANIMATION_DURATION}ms ease-out, transform ${ANIMATION_DURATION}ms ease-out;
`;

const DialogTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

const DialogDescription = styled.p`
    margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
`;
// #endregion

export const Dialog = ({
    trigger,
    title,
    description,
    onConfirm,
    onCancel,
    onDialogClose,
    confirmButton = { title: "Confirm" },
    cancelButton = { title: "Cancel", variant: "danger" },
}: DialogProps) => {

    const [rendered, setRendered] = useState(false);
    const [visible, setVisible] = useState(false);

    /**
     * Opens the dialog by mounting it and preventing background scrolling while it becomes visible.
     *
     * Mounts the dialog markup and disables page scrolling so the dialog can run its entrance animation.
     */
    function openDialog() {
        setRendered(true);

        requestAnimationFrame(() => {
            setVisible(true);
        });
        document.body.style.overflow = "hidden";
    }

    /**
     * Begin closing the dialog and run its exit lifecycle.
     *
     * Restores page scrolling, calls the optional `onDialogClose` callback immediately, and unmounts the dialog after the configured animation duration.
     */
    function closeDialog() {
        setVisible(false);
        document.body.style.overflow = "";

        if (onDialogClose) {
            onDialogClose();
        }

        setTimeout(() => {
            setRendered(false);
        }, ANIMATION_DURATION);
    }

    return (
        <>
            {trigger(openDialog)}

            {rendered && (
                <DialogOverlay
                    $isVisible={visible}
                    aria-modal="true"
                    role="dialog"
                    aria-labelledby="dialog-title"
                    aria-describedby={description ? "dialog-description" : undefined}
                    tabIndex={-1}
                    onKeyDown={(e) => { if (e.key === 'Escape') closeDialog(); }}
                >
                    <ClickOutsideHandler aria-hidden="true" onClick={closeDialog} />

                    <DialogContent $isVisible={visible} role="document">
                        <DialogTitle id="dialog-title">
                            {title}
                        </DialogTitle>

                        {description && (
                            <DialogDescription id="dialog-description">
                                {description}
                            </DialogDescription>
                        )}

                        <ButtonContainer>
                            <Button
                                {...cancelButton}
                                title={cancelButton.title}
                                variant={cancelButton.variant ?? "secondary"}
                                onClick={() => onCancel ? onCancel(closeDialog) : closeDialog()}
                            />
                            <Button
                                {...confirmButton}
                                title={confirmButton.title}
                                variant={confirmButton.variant ?? "primary"}
                                onClick={() => onConfirm ? onConfirm(closeDialog) : closeDialog()}
                            />
                        </ButtonContainer>
                    </DialogContent>
                </DialogOverlay>
            )}
        </>
    );
};