import React, { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';

export type ButtonVariant = "primary" | "secondary" | "danger" | "warning";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loading?: boolean;
    variant?: ButtonVariant;
}

// #region Styled Components

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  animation: ${spin} 1s linear infinite;
`;

const getVariantStyles = (variant: ButtonVariant = 'primary') => {
    switch (variant) {
        case 'primary':
            return css`
                background-color: var(--entchen-primary);
                color: var(--entchen-text);
                &:hover:not(:disabled) {
                    background-color: var(--entchen-primary-100);
                }
                &:focus {
                    box-shadow: 0 0 0 3px var(--entchen-secondary);
                }
                &:disabled {
                    background-color: #d1d5db; /* gray-300 */
                    color: #6b7280; /* gray-500 */
                }
            `;
        case 'secondary':
            return css`
                background-color: var(--entchen-secondary);
                color: var(--entchen-text-secondary);
                &:hover:not(:disabled) {
                    background-color: var(--entchen-secondary-100);
                }
                &:focus {
                    box-shadow: 0 0 0 3px var(--entchen-primary-200);
                }
                &:disabled {
                    background-color: #e5e7eb; /* gray-200 */
                    color: #9ca3af; /* gray-400 */
                }
            `;
        case 'danger':
            return css`
                background-color: #dc2626; /* red-600 */
                color: white;
                &:hover:not(:disabled) {
                    background-color: #b91c1c; /* red-700 */
                }
                &:focus {
                    box-shadow: 0 0 0 3px #f87171; /* red-400 */
                }
                &:disabled {
                    background-color: #fca5a5; /* red-300 */
                    color: rgba(255, 255, 255, 0.7);
                }
            `;
        case 'warning':
            return css`
                background-color: #eab308; /* yellow-500 */
                color: black;
                &:hover:not(:disabled) {
                    background-color: #ca8a04; /* yellow-600 */
                }
                &:focus {
                    box-shadow: 0 0 0 3px #facc15; /* yellow-400 */
                }
                &:disabled {
                    background-color: #fde047; /* yellow-300 */
                    color: rgba(0, 0, 0, 0.5);
                }
            `;
    }
};

const StyledButton = styled.button< { variant?: ButtonVariant } >`
    /* Base styles */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem; /* Adjusted for better aesthetics */
    border-radius: 0.375rem;
    border: none;
    font-weight: 600;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    outline: none;

    &:disabled {
        cursor: not-allowed;
    }

    &:not(:disabled) {
        cursor: pointer;
    }
    
    /* Variant styles */
    ${({ variant }) => getVariantStyles(variant)}
`;
// #endregion

export const Button: React.FC<ButtonProps> = ({
    title,
    leftIcon,
    rightIcon,
    disabled,
    loading,
    variant = 'primary',
    ...rest
}) => {
    return (
        <StyledButton
            type="button"
            variant={variant}
            disabled={disabled || loading}
            aria-disabled={disabled || loading}
            {...rest}
        >
            {loading && (
                <Spinner
                    role="status"
                    aria-label="loading"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        opacity="0.25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        opacity="0.75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                </Spinner>
            )}

            {!loading && leftIcon}

            <span>{title}</span>

            {!loading && rightIcon}
        </StyledButton>
    );
};