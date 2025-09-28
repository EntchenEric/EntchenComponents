import React, { useState, ReactNode, JSX} from "react";
import { ButtonProps, Button } from "./Button";

export interface DialogProps {
    trigger: string | React.FC;
    title: string | React.FC;
    description?: string | React.FC;
    onConfirm?: (closeDialog: () => void) => void;
    onCancel?: (closeDialog: () => void) => void;
    onDialogClose?: () => void;
    confirmButton?: ButtonProps;
    cancelButton?: ButtonProps;
}

const ANIMATION_DURATION = 200; // ms

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

    function openDialog() {
        setRendered(true);
        setVisible(false);

        requestAnimationFrame(() => {
            setVisible(true);
        });

        document.body.style.overflow = "hidden";
    }

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


    function renderContent(content?: string | React.FC): ReactNode {
        if (!content) return null;

        if (typeof content === "string") return content;

        const Component = content as React.FC;
        return <Component />;
    }

    function renderTrigger() {
        if (typeof trigger === "string") {
            return (
                <Button
                    {...(confirmButton.variant ? { variant: confirmButton.variant } : {})}
                    title={trigger}
                    onClick={openDialog}
                />
            );
        }

        let TriggerElement: JSX.Element;

        if (typeof trigger === "string") {
            TriggerElement = (
                <Button {...cancelButton} title={trigger} onClick={openDialog} />
            );
        } else {
            const TriggerComponent = trigger;
            TriggerElement = (
                <div
                    onClick={openDialog}
                    style={{ display: "inline-block", cursor: "pointer" }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openDialog(); }}
                >
                    <TriggerComponent />
                </div>
            );
        }

        try {
            return TriggerElement;
        } catch {
            return (
                <div role="button" tabIndex={0} style={{ display: "inline-block" }}
                    onClick={openDialog}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openDialog(); }}>
                    {TriggerElement}
                </div>
            );
        }
    }

    return (
        <>
            {renderTrigger()}
            {rendered && (
                <div
                    aria-modal="true"
                    role="dialog"
                    aria-labelledby="dialog-title"
                    aria-describedby={description ? "dialog-description" : undefined}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    tabIndex={-1}
                    style={{
                        backgroundColor: visible ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)',
                        backdropFilter: visible ? 'blur(4px)' : 'blur(0)',
                        WebkitBackdropFilter: visible ? 'blur(4px)' : 'blur(0)',
                        opacity: visible ? 1 : 0,
                        pointerEvents: visible ? undefined : "none",
                        transitionProperty: 'opacity, background-color, backdrop-filter',
                        transitionDuration: `${ANIMATION_DURATION}ms`,
                        transitionTimingFunction: 'ease-out'
                    }}
                    onKeyDown={(e) => { if (e.key === 'Escape') closeDialog(); }}
                >
                    <div className="absolute inset-0" aria-hidden="true" onClick={closeDialog} />

                    <div
                        role="document"
                        className="relative max-w-lg w-full rounded-lg shadow-lg p-6 mx-4 transform transition-transform duration-200 ease-out"
                        style={{
                            backgroundColor: 'var(--entchen-primary)',
                            color: 'var(--entchen-text)',

                            opacity: visible ? 1 : 0,
                            transformOrigin: "center center",
                            transform: visible ? "scale(1)" : "scale(0.95)",

                            transitionProperty: "opacity, transform",
                            transitionDuration: `${ANIMATION_DURATION}ms`,
                            transitionTimingFunction: "ease-out",
                        }}
                    >

                        <h2 id="dialog-title" className="text-xl font-semibold mb-2">
                            {renderContent(title)}
                        </h2>

                        {description && (
                            <p id="dialog-description" className="mb-6">
                                {renderContent(description)}
                            </p>
                        )}

                        <div className="flex justify-end gap-3">

                            <Button
                                {...cancelButton}
                                title={cancelButton.title}
                                variant={cancelButton.variant ?? "secondary"}
                                loading={cancelButton.loading ?? false}
                                leftIcon={cancelButton.leftIcon}
                                rightIcon={cancelButton.rightIcon}
                                disabled={cancelButton.disabled ?? false}
                                type={cancelButton.type ?? "button"}
                                onClick={() => {
                                    if (onCancel) {
                                        onCancel(closeDialog)
                                    } else {
                                        closeDialog()
                                    }
                                }}
                            />

                            <Button
                                {...confirmButton}
                                title={confirmButton.title}
                                variant={confirmButton.variant ?? "primary"}
                                loading={confirmButton.loading ?? false}
                                leftIcon={confirmButton.leftIcon}
                                rightIcon={confirmButton.rightIcon}
                                disabled={confirmButton.disabled ?? false}
                                type={confirmButton.type ?? "button"}

                                onClick={() => {
                                    if (onConfirm) {
                                        onConfirm(closeDialog)
                                    } else {
                                        closeDialog()
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};