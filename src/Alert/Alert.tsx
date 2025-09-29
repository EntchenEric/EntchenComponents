import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

// #region Component Interfaces
export type AlertVariant = "default" | "danger" | "warning" | "success";

export interface AlertProps {
  variant?: AlertVariant;
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
}
// #endregion

// #region Styled Components

const getVariantStyles = (variant: AlertVariant = "default") => {
  switch (variant) {
    case "danger":
      return css`
        background-color: #fee2e2; /* bg-red-100 */
        border: 1px solid #f87171; /* border-red-400 */
        color: #b91c1c; /* text-red-700 */
      `;
    case "warning":
      return css`
        background-color: #fef9c3; /* bg-yellow-100 */
        border: 1px solid #fbbf24; /* border-yellow-400 */
        color: #b45309; /* text-yellow-700 */
      `;
    case "success":
      return css`
        background-color: #dcfce7; /* bg-green-100 */
        border: 1px solid #4ade80; /* border-green-400 */
        color: #15803d; /* text-green-700 */
      `;
    case "default":
    default:
      return css`
        background-color: var(--entchen-primary);
        border: 1px solid var(--entchen-primary-600);
        color: var(--entchen-text);
      `;
  }
};

const AlertContainer = styled.div<{ variant?: AlertVariant }>`
  /* Base styles */
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  /* Variant styles */
  ${({ variant }) => getVariantStyles(variant)}
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  margin-top: 2px;
  /* Icons inherit the parent's color by default */
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AlertTitle = styled.p`
  font-weight: 600;
  line-height: 1.25;
`;

const AlertDescription = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.625;
  opacity: 0.9;
  /* Use a different color for better contrast on non-default backgrounds */
  color: var(--entchen-text-secondary); 
`;
// #endregion

export const Alert = ({
  variant = "default",
  title,
  description,
  icon,
}: AlertProps) => {
  return (
    <AlertContainer
      variant={variant}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      {icon && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
      <TextWrapper>
        <AlertTitle>{title}</AlertTitle>
        {description && <AlertDescription>{description}</AlertDescription>}
      </TextWrapper>
    </AlertContainer>
  );
};