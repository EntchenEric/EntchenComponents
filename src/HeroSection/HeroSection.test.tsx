import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import 'jest-styled-components';

import { HeroSection, HeroSectionProps } from './HeroSection';

const fullMockProps: HeroSectionProps = {
  title: 'MySite',
  backgroundImage: {
    url: 'background.jpg',
    alt: 'Scenic background',
  },
  menuItems: [
    { link: '/home', title: 'Home' },
    { link: '/about', title: 'About' },
  ],
  image: {
    url: 'hero-image.png',
    alt: 'Main hero image',
  },
  mainContent: {
    title: 'Welcome to the Hero Section',
    description: 'This is a description of the main content.',
    links: [{ link: '/cta', title: 'Call to Action' }],
  },
};

const minimalProps: HeroSectionProps = {
  title: 'MySite',
  mainContent: {
    title: 'Minimal Welcome',
    description: 'Minimal description.',
  },
};

describe('HeroSection Component', () => {
  
  describe('Rendering Logic', () => {
    it('should render all core elements when provided with full props', () => {
      render(<HeroSection {...fullMockProps} />);

      expect(screen.getByRole('link', { name: 'MySite' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /Welcome to the Hero Section/i })).toBeInTheDocument();
      expect(screen.getByText(/This is a description of the main content./i)).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Call to Action' })).toBeInTheDocument();
    });

    it('should render correctly with only minimal required props', () => {
      render(<HeroSection {...minimalProps} />);
      
      expect(screen.getByRole('link', { name: 'MySite' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: 'Minimal Welcome' })).toBeInTheDocument();
      expect(screen.getByText('Minimal description.')).toBeInTheDocument();
      
      expect(screen.queryByAltText(/scenic background/i)).not.toBeInTheDocument();
      expect(screen.queryByAltText(/main hero image/i)).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: /call to action/i })).not.toBeInTheDocument();
    });
  });

  describe('Conditional Element Rendering', () => {
    it('should render the background image when provided', () => {
      render(<HeroSection {...fullMockProps} />);
      const bgImage = screen.getByAltText(fullMockProps.backgroundImage!.alt ?? "");
      expect(bgImage).toBeInTheDocument();
      expect(bgImage).toHaveAttribute('src', fullMockProps.backgroundImage!.url);
    });

    it('should not render the background image if not provided', () => {
      render(<HeroSection {...minimalProps} />);
      expect(screen.queryByAltText(/scenic background/i)).not.toBeInTheDocument();
    });

    it('should render the main hero image when provided', () => {
      render(<HeroSection {...fullMockProps} />);
      const heroImage = screen.getByAltText(fullMockProps.image!.alt ?? "");
      expect(heroImage).toBeInTheDocument();
      expect(heroImage).toHaveAttribute('src', fullMockProps.image!.url);
    });

    it('should not render the main hero image if not provided', () => {
      render(<HeroSection {...minimalProps} />);
      expect(screen.queryByAltText(/main hero image/i)).not.toBeInTheDocument();
    });

    it('should not render call to action links if they are not provided', () => {
      render(<HeroSection {...minimalProps} />);
      expect(screen.queryByRole('link', { name: /call to action/i })).not.toBeInTheDocument();
    });
  });

  describe('Mobile Menu Interactions', () => {
    it('should open the mobile menu on hamburger button click', async () => {
      const user = userEvent.setup({ pointerEventsCheck: 0 });
      render(<HeroSection {...fullMockProps} />);
      const overlay = screen.getByTestId('mobile-menu-overlay');

      expect(overlay).toHaveAttribute('aria-hidden', 'true');

      const hamburgerButton = screen.getByRole('button', { name: /Open Menu/i });
      await user.click(hamburgerButton);

      expect(overlay).toHaveAttribute('aria-hidden', 'false');
    });

    it('should close the mobile menu on close button click', async () => {
      const user = userEvent.setup({ pointerEventsCheck: 0 });
      render(<HeroSection {...fullMockProps} />);
      const overlay = screen.getByTestId('mobile-menu-overlay');

      await user.click(screen.getByRole('button', { name: /Open Menu/i }));
      expect(overlay).toHaveAttribute('aria-hidden', 'false');

      const closeButton = screen.getByRole('button', { name: /Close Menu/i });
      await user.click(closeButton);
      expect(overlay).toHaveAttribute('aria-hidden', 'true');
    });

    it('should close the mobile menu when clicking the overlay', async () => {
      const user = userEvent.setup({ pointerEventsCheck: 0 });
      render(<HeroSection {...fullMockProps} />);
      const overlay = screen.getByTestId('mobile-menu-overlay');

      await user.click(screen.getByRole('button', { name: /Open Menu/i }));
      expect(overlay).toHaveAttribute('aria-hidden', 'false');

      await user.click(overlay);
      expect(overlay).toHaveAttribute('aria-hidden', 'true');
    });

    it('should close the mobile menu when a navigation item is clicked', async () => {
      const user = userEvent.setup({ pointerEventsCheck: 0 });
      render(<HeroSection {...fullMockProps} />);
      const overlay = screen.getByTestId('mobile-menu-overlay');

      await user.click(screen.getByRole('button', { name: /Open Menu/i }));
      expect(overlay).toHaveAttribute('aria-hidden', 'false');

      const mobileLinks = screen.getAllByRole('link', { name: 'Home' });
      await user.click(mobileLinks[mobileLinks.length - 1]);

      expect(overlay).toHaveAttribute('aria-hidden', 'true');
    });
  });
});