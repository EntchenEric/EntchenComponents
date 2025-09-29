import React, { ReactNode } from "react";
import styled from "styled-components";
import { ImageData } from "../HeroSection/HeroSection";

// #region Component Interfaces
export interface CardProps {
  title: ReactNode;
  description: ReactNode;
  icon?: ReactNode;
  elevateOnHover?: boolean;
  leftImage?: ImageData;
  rightImage?: ImageData;
}
// #endregion

// #region Styled Components
const CardContainer = styled.div<{ $elevateOnHover?: boolean }>`
  background-color: var(--entchen-primary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border: 1px solid color-mix(in srgb, var(--entchen-primary-200) 50%, transparent);
  backdrop-filter: blur(4px);
  transition: all 300ms ease-in-out;
  opacity: 1;
  transform: none;

  ${(props) =>
    props.$elevateOnHover &&
    `
    &:hover {
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
      transform: translateY(-0.25rem);
    }
  `}
`;

const ContentWrapper = styled.div<{ $hasImage?: boolean }>`
  display: flex;
  align-items: center;

  ${(props) =>
    props.$hasImage &&
    `
    gap: 1.5rem;
    @media (min-width: 768px) {
      gap: 2.5rem;
    }
  `}
`;

const ImageWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextContent = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const IconWrapper = styled.span`
  color: var(--entchen-secondary);
  flex-shrink: 0;
`;

const TitleHeading = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--entchen-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DescriptionParagraph = styled.p`
  color: var(--entchen-text);
  /* The 'break-normal' class default behavior */
  overflow-wrap: normal;
  word-break: normal;
`;
// #endregion

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  elevateOnHover = true,
  leftImage,
  rightImage,
}) => {
  return (
    <CardContainer $elevateOnHover={elevateOnHover}>
      <ContentWrapper $hasImage={!!(leftImage || rightImage)}>
        {leftImage && (
          <ImageWrapper>
            <StyledImage
              src={leftImage.url}
              alt={leftImage.alt ?? "Left image"}
            />
          </ImageWrapper>
        )}

        <TextContent>
          <TitleWrapper>
            {icon && (
              <IconWrapper aria-hidden="true">
                {icon}
              </IconWrapper>
            )}
            {typeof title === "string" ? (
              <TitleHeading title={title}>{title}</TitleHeading>
            ) : (
              title
            )}
          </TitleWrapper>
          {typeof description === "string" ? (
            <DescriptionParagraph>{description}</DescriptionParagraph>
          ) : (
            description
          )}
        </TextContent>

        {rightImage && (
          <ImageWrapper>
            <StyledImage
              src={rightImage.url}
              alt={rightImage.alt ?? "Right image"}
            />
          </ImageWrapper>
        )}
      </ContentWrapper>
    </CardContainer>
  );
};