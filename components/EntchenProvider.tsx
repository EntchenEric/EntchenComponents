"use client"

import { colourNameToHex, darkenRgb, hexToRgb } from '@/utils/colorUtils';
import React, { createContext, useContext, ReactNode } from 'react';

export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    textSecondaryColor: string;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

interface EntchenProviderProps {
    children: ReactNode;
    theme: Theme;
}

export const EntchenProvider = ({ children, theme }: EntchenProviderProps) => {
    const parsedPrimary = hexToRgb(colourNameToHex(theme.primaryColor) || theme.primaryColor)
    const parsedSecondary = hexToRgb(colourNameToHex(theme.secondaryColor) || theme.secondaryColor)
    const parsedText = hexToRgb(colourNameToHex(theme.textColor) || theme.textColor)
    const parsedTextSecondary = hexToRgb(colourNameToHex(theme.textSecondaryColor) || theme.textSecondaryColor)

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{
                ...({
                    '--entchen-primary': parsedPrimary,
                    '--entchen-primary-100': darkenRgb(parsedPrimary, 0.1),
                    '--entchen-primary-200': darkenRgb(parsedPrimary, 0.2),
                    '--entchen-primary-300': darkenRgb(parsedPrimary, 0.3),
                    '--entchen-primary-400': darkenRgb(parsedPrimary, 0.4),
                    '--entchen-primary-500': darkenRgb(parsedPrimary, 0.5),
                    '--entchen-primary-600': darkenRgb(parsedPrimary, 0.6),
                    '--entchen-primary-700': darkenRgb(parsedPrimary, 0.7),
                    '--entchen-primary-800': darkenRgb(parsedPrimary, 0.8),
                    '--entchen-primary-900': darkenRgb(parsedPrimary, 0.9),
                    '--entchen-secondary': parsedSecondary,
                    '--entchen-secondary-100': darkenRgb(parsedSecondary, 0.1),
                    '--entchen-secondary-200': darkenRgb(parsedSecondary, 0.2),
                    '--entchen-secondary-300': darkenRgb(parsedSecondary, 0.3),
                    '--entchen-secondary-400': darkenRgb(parsedSecondary, 0.4),
                    '--entchen-secondary-500': darkenRgb(parsedSecondary, 0.5),
                    '--entchen-secondary-600': darkenRgb(parsedSecondary, 0.6),
                    '--entchen-secondary-700': darkenRgb(parsedSecondary, 0.7),
                    '--entchen-secondary-800': darkenRgb(parsedSecondary, 0.8),
                    '--entchen-secondary-900': darkenRgb(parsedSecondary, 0.9),
                    '--entchen-text': parsedText,
                    '--entchen-text-100': darkenRgb(parsedText, 0.1),
                    '--entchen-text-200': darkenRgb(parsedText, 0.2),
                    '--entchen-text-300': darkenRgb(parsedText, 0.3),
                    '--entchen-text-400': darkenRgb(parsedText, 0.4),
                    '--entchen-text-500': darkenRgb(parsedText, 0.5),
                    '--entchen-text-600': darkenRgb(parsedText, 0.6),
                    '--entchen-text-700': darkenRgb(parsedText, 0.7),
                    '--entchen-text-800': darkenRgb(parsedText, 0.8),
                    '--entchen-text-900': darkenRgb(parsedText, 0.9),
                    '--entchen-text-secondary': parsedTextSecondary,
                    '--entchen-text-secondary-100': darkenRgb(parsedTextSecondary, 0.1),
                    '--entchen-text-secondary-200': darkenRgb(parsedTextSecondary, 0.2),
                    '--entchen-text-secondary-300': darkenRgb(parsedTextSecondary, 0.3),
                    '--entchen-text-secondary-400': darkenRgb(parsedTextSecondary, 0.4),
                    '--entchen-text-secondary-500': darkenRgb(parsedTextSecondary, 0.5),
                    '--entchen-text-secondary-600': darkenRgb(parsedTextSecondary, 0.6),
                    '--entchen-text-secondary-700': darkenRgb(parsedTextSecondary, 0.7),
                    '--entchen-text-secondary-800': darkenRgb(parsedTextSecondary, 0.8),
                    '--entchen-text-secondary-900': darkenRgb(parsedTextSecondary, 0.9),
                } as React.CSSProperties & Record<string, string>)
            }}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): Theme => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('Please wrap EntchenComponents in a EntchenProvider.');
    }
    return context;
};