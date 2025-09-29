import { ReactNode } from 'react';
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
export declare const EntchenProvider: ({ children, theme }: EntchenProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
