import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { EntchenProvider, Theme } from './EntchenProvider';

jest.mock('../utils/colorUtils', () => ({
    colourNameToHex: (name: string) => {
        const colors: { [key: string]: string } = {
            red: '#FF0000',
            navy: '#000080',
        };
        return colors[name] || name;
    },
    hexToRgb: (hex: string) => {
        const hexToRgbMap: { [key: string]: string } = {
            '#FF0000': '255, 0, 0',
            '#000080': '0, 0, 128',
            '#33FF57': '51, 255, 87',
            '#333333': '51, 51, 51',
            '#888888': '136, 136, 136',
        };
        return hexToRgbMap[hex] || '0, 0, 0';
    },
    darkenRgb: (rgb: string, amount: number) => `darkened(${rgb}, ${amount})`,
}));

const mockTheme: Theme = {
    primaryColor: '#FF0000',
    secondaryColor: '#33FF57',
    textColor: '#333333',
    textSecondaryColor: 'navy',
};

describe('EntchenProvider Component', () => {

    it('should render its children correctly', () => {
        render(
            <EntchenProvider theme={mockTheme}>
                <span>Ich bin ein Kind-Element</span>
            </EntchenProvider>
        );
        expect(screen.getByText('Ich bin ein Kind-Element')).toBeInTheDocument();
    });

    it('should apply all CSS custom properties based on the theme', () => {
        render(
            <EntchenProvider theme={mockTheme}>
                <div data-testid="child-for-parent-lookup">Hello</div>
            </EntchenProvider>
        );

        const container = screen.getByTestId('child-for-parent-lookup').parentElement;
        expect(container).not.toBeNull();

        expect(container).toHaveStyle('--entchen-primary: 255, 0, 0');
        expect(container).toHaveStyle('--entchen-secondary: 51, 255, 87');
        expect(container).toHaveStyle('--entchen-text: 51, 51, 51');
        expect(container).toHaveStyle('--entchen-text-secondary: 0, 0, 128');
    });

    it('should apply all darkened variants of the CSS custom properties', () => {
        render(
            <EntchenProvider theme={mockTheme}>
                <div data-testid="child-for-parent-lookup">Hello</div>
            </EntchenProvider>
        );

        const container = screen.getByTestId('child-for-parent-lookup').parentElement;

        expect(container).toHaveStyle('--entchen-primary-100: darkened(255, 0, 0, 0.1)');
        expect(container).toHaveStyle('--entchen-primary-900: darkened(255, 0, 0, 0.9)');

        expect(container).toHaveStyle('--entchen-secondary-200: darkened(51, 255, 87, 0.2)');
        expect(container).toHaveStyle('--entchen-secondary-800: darkened(51, 255, 87, 0.8)');
        
        expect(container).toHaveStyle('--entchen-text-300: darkened(51, 51, 51, 0.3)');
        expect(container).toHaveStyle('--entchen-text-secondary-400: darkened(0, 0, 128, 0.4)');
    });

    it('should correctly prioritize color name conversion', () => {
        const themeWithNames: Theme = {
            primaryColor: 'red',
            secondaryColor: 'navy',
            textColor: 'black',
            textSecondaryColor: 'navy'
        };

        render(
            <EntchenProvider theme={themeWithNames}>
                <div data-testid="child-for-parent-lookup">Hello</div>
            </EntchenProvider>
        );
        
        const container = screen.getByTestId('child-for-parent-lookup').parentElement;
        
        expect(container).toHaveStyle('--entchen-primary: 255, 0, 0');
        expect(container).toHaveStyle('--entchen-secondary: 0, 0, 128');
    });
});