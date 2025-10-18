import React from 'react';
import styled, { css } from 'styled-components';

export interface TextProps {
    content: string;
    fontWeight: number;
    order: number;
    isTitle?: boolean;
}

const StyledText = styled.span<{ fontWeight: number; order: number; isTitle?: boolean }>`
  color: var(--entchen-text);
  font-weight: ${({ fontWeight }) => fontWeight};
  order: ${({ order }) => order};
  line-height: 1.4;
  
  ${({ isTitle }) =>
    isTitle &&
    css`
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--entchen-primary);
      margin-bottom: 0.5rem;
    `}
`;

export const Text = ({ content, fontWeight, order, isTitle }: TextProps) => {
    return (
        <StyledText fontWeight={fontWeight} order={order} isTitle={isTitle}>
            {content}
        </StyledText>
    );
};