import React, { useState } from "react";
import { Button } from "./Button";
const ANIMATION_DURATION = 200; // ms
export const Dialog = ({ trigger, title, description, onConfirm, onCancel, onDialogClose, confirmButton = { title: "Confirm" }, cancelButton = { title: "Cancel", variant: "danger" }, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
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
    function renderContent(content) {
        if (!content)
            return null;
        if (typeof content === "string")
            return content;
        const Component = content;
        return React.createElement(Component, null);
    }
    function renderTrigger() {
        if (typeof trigger === "string") {
            return (React.createElement(Button, { ...(confirmButton.variant ? { variant: confirmButton.variant } : {}), title: trigger, onClick: openDialog }));
        }
        let TriggerElement;
        if (typeof trigger === "string") {
            TriggerElement = (React.createElement(Button, { ...cancelButton, title: trigger, onClick: openDialog }));
        }
        else {
            const TriggerComponent = trigger;
            TriggerElement = (React.createElement("div", { onClick: openDialog, style: { display: "inline-block", cursor: "pointer" }, role: "button", tabIndex: 0, onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ')
                    openDialog(); } },
                React.createElement(TriggerComponent, null)));
        }
        try {
            return TriggerElement;
        }
        catch {
            return (React.createElement("div", { role: "button", tabIndex: 0, style: { display: "inline-block" }, onClick: openDialog, onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ')
                    openDialog(); } }, TriggerElement));
        }
    }
    return (React.createElement(React.Fragment, null,
        renderTrigger(),
        rendered && (React.createElement("div", { "aria-modal": "true", role: "dialog", "aria-labelledby": "dialog-title", "aria-describedby": description ? "dialog-description" : undefined, className: "fixed inset-0 z-50 flex items-center justify-center", tabIndex: -1, style: {
                backgroundColor: visible ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)',
                backdropFilter: visible ? 'blur(4px)' : 'blur(0)',
                WebkitBackdropFilter: visible ? 'blur(4px)' : 'blur(0)',
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? undefined : "none",
                transitionProperty: 'opacity, background-color, backdrop-filter',
                transitionDuration: `${ANIMATION_DURATION}ms`,
                transitionTimingFunction: 'ease-out'
            }, onKeyDown: (e) => { if (e.key === 'Escape')
                closeDialog(); } },
            React.createElement("div", { className: "absolute inset-0", "aria-hidden": "true", onClick: closeDialog }),
            React.createElement("div", { role: "document", className: "relative max-w-lg w-full rounded-lg shadow-lg p-6 mx-4 transform transition-transform duration-200 ease-out", style: {
                    backgroundColor: 'var(--entchen-primary)',
                    color: 'var(--entchen-text)',
                    opacity: visible ? 1 : 0,
                    transformOrigin: "center center",
                    transform: visible ? "scale(1)" : "scale(0.95)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: `${ANIMATION_DURATION}ms`,
                    transitionTimingFunction: "ease-out",
                } },
                React.createElement("h2", { id: "dialog-title", className: "text-xl font-semibold mb-2" }, renderContent(title)),
                description && (React.createElement("p", { id: "dialog-description", className: "mb-6" }, renderContent(description))),
                React.createElement("div", { className: "flex justify-end gap-3" },
                    React.createElement(Button, { ...cancelButton, title: cancelButton.title, variant: (_a = cancelButton.variant) !== null && _a !== void 0 ? _a : "secondary", loading: (_b = cancelButton.loading) !== null && _b !== void 0 ? _b : false, leftIcon: cancelButton.leftIcon, rightIcon: cancelButton.rightIcon, disabled: (_c = cancelButton.disabled) !== null && _c !== void 0 ? _c : false, type: (_d = cancelButton.type) !== null && _d !== void 0 ? _d : "button", onClick: () => {
                            if (onCancel) {
                                onCancel(closeDialog);
                            }
                            else {
                                closeDialog();
                            }
                        } }),
                    React.createElement(Button, { ...confirmButton, title: confirmButton.title, variant: (_e = confirmButton.variant) !== null && _e !== void 0 ? _e : "primary", loading: (_f = confirmButton.loading) !== null && _f !== void 0 ? _f : false, leftIcon: confirmButton.leftIcon, rightIcon: confirmButton.rightIcon, disabled: (_g = confirmButton.disabled) !== null && _g !== void 0 ? _g : false, type: (_h = confirmButton.type) !== null && _h !== void 0 ? _h : "button", onClick: () => {
                            if (onConfirm) {
                                onConfirm(closeDialog);
                            }
                            else {
                                closeDialog();
                            }
                        } })))))));
};
