import React from 'react';

export type ButtonVariant = "primary" | "secondary" | "danger" | "warning";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    leftIcon?: React.FC;
    rightIcon?: React.FC;
    loading?: boolean;
    variant?: ButtonVariant;
}

export const ButtonVariantClasses = (variant: ButtonVariant) => {
    switch (variant) {
        case 'primary':
            return `
                bg-[var(--entchen-primary)] 
                text-[var(--entchen-text)] 
                focus:ring-[var(--entchen-secondary)]
                
                hover:bg-[var(--entchen-primary-100)] 
                cursor-pointer
            
                disabled:bg-gray-300 
                disabled:hover:bg-gray-300
                disabled:text-gray-500 
                disabled:cursor-not-allowed 
            `;
        case 'secondary':
            return `
                bg-[var(--entchen-secondary)] 
                text-[var(--entchen-text-secondary)] 
                focus:ring-[var(--entchen-secondary)]
                
                hover:bg-[var(--entchen-secondary-100)] 
                cursor-pointer
                
                disabled:bg-gray-200
                disabled:hover:bg-gray-200
                disabled:text-gray-400
                disabled:cursor-not-allowed
            `;
        case 'danger':
            return `
              bg-red-600 text-white focus:ring-red-500
              hover:bg-red-700 cursor-pointer
              disabled:bg-red-300
              disabled:text-white/70
              disabled:cursor-not-allowed
              disabled:hover:bg-red-300
            `;
        case 'warning':
            return `
              bg-yellow-500 text-black focus:ring-yellow-400
              hover:bg-yellow-600 cursor-pointer
              disabled:bg-yellow-300
              disabled:text-black/50
              disabled:cursor-not-allowed
              disabled:hover:bg-yellow-300
            `;
        default:
            return "";
    }
};

const baseClasses = () => {
    return "rounded-md p-2 inline-flex gap-2 align-middle"
}

export const Button: React.FC<ButtonProps> = ({
    title,
    leftIcon,
    rightIcon,
    disabled,
    loading,
    variant = 'primary',
    onClick,
    className = '',
    ...rest
}) => {
    return (
        <button
            type="button"
            className={`${ButtonVariantClasses(variant)} ${baseClasses()} ${className}`}
            disabled={disabled || loading}
            aria-disabled={disabled || loading}
            onClick={onClick}
            {...rest}
        >
            {loading && (
                <svg
                    role="status"
                    aria-label="loading"
                    className="w-5 h-5 animate-spin text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentcolor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentcolor"
                        d="M4 12a8 8 0 018-8v4a4 4 000 -4vH4z"
                    ></path>
                </svg>
            )}

            {!loading && leftIcon && (
                React.createElement(leftIcon)
            )}

            <span>{title}</span>

            {!loading && rightIcon && (
                React.createElement(rightIcon)
            )}
        </button>
    );
};