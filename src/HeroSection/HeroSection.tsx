"use client"

import React, { ReactNode, useState } from "react";
import styled from "styled-components";

// #region Component Interfaces
export interface MenuItem {
  link: string;
  title: ReactNode;
}

export interface ImageData {
  url: string;
  alt?: string;
}

export interface MainContent {
  title: string;
  description: string;
  links?: MenuItem[];
}

export interface HeroSectionProps {
  title: ReactNode;
  backgroundImage?: ImageData;
  menuItems?: MenuItem[];
  image?: ImageData;
  mainContent: MainContent;
}
// #endregion

// #region Styled Components
const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  object-fit: cover;
  z-index: -10;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: color-mix(in srgb, var(--entchen-primary) 50%, transparent);
  backdrop-filter: blur(4px);
  z-index: -10;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 1rem;
  text-align: center;
`;

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  color: var(--entchen-text);
  text-decoration: none;
`;

const DesktopMenu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 1.5rem;
  }
`;

const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s ease-in-out;
  color: var(--entchen-text);
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  gap: 6px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 60;

  @media (min-width: 768px) {
    display: none;
  }
`;

const HamburgerBar = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--entchen-text);
  border-radius: 2px;
`;

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 55;
  transition: opacity 300ms;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
`;

const MobileMenuAside = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  max-width: 100%;
  background-color: var(--entchen-secondary);
  color: var(--entchen-text-secondary);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05);
  z-index: 60;
  transform: ${(props) => (props.$isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 350ms ease-in-out;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 1px solid #4b5563; /* Corresponds to border-gray-700 */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  color: inherit;
  border-radius: 4px;

  &:hover {
    color: #9ca3af; /* Corresponds to hover:text-gray-400 */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px white;
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  padding: 0 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  user-select: none;
`;

const MobileMenuItem = styled.a`
  display: block;
  padding: 0.5rem 0.25rem;
  border-bottom: 1px solid #4b5563;
  transition: color 150ms ease-in-out;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: #9ca3af;
  }
`;

const MainContentContainer = styled.div`
  max-width: 72rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 0;
  }
`;

const ImageWrapper = styled.div`
  flex-shrink: 0;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 50%;
  }
`;

const HeroImage = styled.img`
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transition: transform 0.3s ease-in-out;
  max-width: 100%;
  height: auto;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--entchen-text);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  max-width: 42rem;
  
  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    width: 50%;
  }
`;

const TitleHeading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  margin-bottom: 1rem;
  
  @media (min-width: 640px) {
    font-size: 3.75rem;
  }
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const DescriptionParagraph = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  max-width: 42rem;
  
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const CallToActionLink = styled.a`
  background-color: white;
  color: black;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
  transition: background-color 0.2s, transform 0.2s;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    background-color: #e5e7eb;
    transform: scale(1.05);
  }
`;
// #endregion

export const HeroSection = ({
  title,
  backgroundImage,
  menuItems,
  image,
  mainContent,
}: HeroSectionProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      {backgroundImage && (
        <BackgroundImage
          src={backgroundImage.url}
          alt={backgroundImage.alt ?? "Hero Section Background Image"}
          loading="eager"
        />
      )}
      <Overlay />
      <ContentWrapper>
        <NavBar>
          <LogoLink href="/">{title}</LogoLink>

          <DesktopMenu>
            {menuItems?.map((item) => (
              <MenuItemLink href={item.link} key={JSON.stringify(item)}>
                {item.title}
              </MenuItemLink>
            ))}
          </DesktopMenu>

          <HamburgerButton onClick={() => setMenuOpen(true)} aria-label="Open Menu">
            <HamburgerBar />
            <HamburgerBar />
            <HamburgerBar />
          </HamburgerButton>
        </NavBar>

        <MobileMenuOverlay
          $isOpen={menuOpen}
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
          tabIndex={-1}
          data-testid="mobile-menu-overlay"
        />

        <MobileMenuAside
          $isOpen={menuOpen}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <MobileMenuHeader>
            <CloseButton onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              &#x2715;
            </CloseButton>
          </MobileMenuHeader>

          <MobileNav>
            {menuItems?.map((item) => (
              <MobileMenuItem
                href={item.link}
                key={JSON.stringify(item)}
                onClick={(event) => {
                  setMenuOpen(false)
                }}
              >
                {item.title}
              </MobileMenuItem>
            ))}
          </MobileNav>
        </MobileMenuAside>

        <MainContentContainer>
          {image && (
            <ImageWrapper>
              <HeroImage
                src={image.url}
                alt={image.alt || "Hero Section Main Image"}
                width={500}
                height={500}
                loading="lazy"
                decoding="async"
              />
            </ImageWrapper>
          )}

          <TextContentWrapper>
            <TitleHeading>{mainContent.title}</TitleHeading>

            <DescriptionParagraph>{mainContent.description}</DescriptionParagraph>

            {mainContent.links && (
              <LinksContainer>
                {mainContent.links.map((item) => (
                  <CallToActionLink
                    href={item.link}
                    key={JSON.stringify(item)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.title}
                  </CallToActionLink>
                ))}
              </LinksContainer>
            )}
          </TextContentWrapper>
        </MainContentContainer>
      </ContentWrapper>
    </HeaderContainer>
  );
};