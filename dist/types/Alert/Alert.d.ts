import { ReactNode } from "react";
export type AlertVariant = "default" | "danger" | "warning" | "success";
export interface AlertProps {
    variant?: AlertVariant;
    title: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
}
export declare const Alert: ({ variant, title, description, icon, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
