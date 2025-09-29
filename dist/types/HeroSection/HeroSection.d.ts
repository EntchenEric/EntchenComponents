import { ReactNode } from "react";
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
export declare const HeroSection: ({ title, backgroundImage, menuItems, image, mainContent, }: HeroSectionProps) => import("react/jsx-runtime").JSX.Element;
