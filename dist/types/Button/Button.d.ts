import React, { ReactNode } from 'react';
export type ButtonVariant = "primary" | "secondary" | "danger" | "warning";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loading?: boolean;
    variant?: ButtonVariant;
}
export declare const Button: React.FC<ButtonProps>;
