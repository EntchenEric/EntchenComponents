import React from 'react';
export type ButtonVariant = "primary" | "secondary" | "danger" | "warning";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    leftIcon?: React.FC;
    rightIcon?: React.FC;
    loading?: boolean;
    variant?: ButtonVariant;
}
export declare const ButtonVariantClasses: (variant: ButtonVariant) => "" | "\n                bg-[var(--entchen-primary)] \n                text-[var(--entchen-text)] \n                focus:ring-[var(--entchen-secondary)]\n                \n                hover:bg-[var(--entchen-primary-100)] \n                cursor-pointer\n            \n                disabled:bg-gray-300 \n                disabled:hover:bg-gray-300\n                disabled:text-gray-500 \n                disabled:cursor-not-allowed \n            " | "\n                bg-[var(--entchen-secondary)] \n                text-[var(--entchen-text-secondary)] \n                focus:ring-[var(--entchen-secondary)]\n                \n                hover:bg-[var(--entchen-secondary-100)] \n                cursor-pointer\n                \n                disabled:bg-gray-200\n                disabled:hover:bg-gray-200\n                disabled:text-gray-400\n                disabled:cursor-not-allowed\n            " | "\n              bg-red-600 text-white focus:ring-red-500\n              hover:bg-red-700 cursor-pointer\n              disabled:bg-red-300\n              disabled:text-white/70\n              disabled:cursor-not-allowed\n              disabled:hover:bg-red-300\n            " | "\n              bg-yellow-500 text-black focus:ring-yellow-400\n              hover:bg-yellow-600 cursor-pointer\n              disabled:bg-yellow-300\n              disabled:text-black/50\n              disabled:cursor-not-allowed\n              disabled:hover:bg-yellow-300\n            ";
export declare const Button: React.FC<ButtonProps>;
