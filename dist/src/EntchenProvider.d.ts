import React, { ReactNode } from 'react';
export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    textSecondaryColor: string;
}
interface EntchenProviderProps {
    children: ReactNode;
    theme: Theme;
}
export declare const EntchenProvider: ({ children, theme }: EntchenProviderProps) => React.JSX.Element;
export declare const useTheme: () => Theme;
export {};
