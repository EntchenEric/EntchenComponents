import React from "react";
export type AlertVariant = "default" | "danger" | "warning" | "success";
export interface AlertProps {
    variant?: AlertVariant;
    title: string | React.FC;
    description?: string | React.FC;
    icon?: React.FC;
}
export declare const Alert: ({ variant, title, description, icon: Icon, }: AlertProps) => React.JSX.Element;
