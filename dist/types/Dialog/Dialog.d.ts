import { ReactNode } from "react";
import { ButtonProps } from "../Button/Button";
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
export declare const Dialog: ({ trigger, title, description, onConfirm, onCancel, onDialogClose, confirmButton, cancelButton, }: DialogProps) => import("react/jsx-runtime").JSX.Element;
