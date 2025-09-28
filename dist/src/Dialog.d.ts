import React, { JSX } from "react";
import { ButtonProps } from "./Button";
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
export declare const Dialog: ({ trigger, title, description, onConfirm, onCancel, onDialogClose, confirmButton, cancelButton, }: DialogProps) => JSX.Element;
