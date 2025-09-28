import React from "react";
export interface MenuItem {
    link: string;
    title: string | React.FC;
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
    title: string | React.FC;
    backgroundImage?: ImageData;
    menuItems?: MenuItem[];
    image?: ImageData;
    mainContent: MainContent;
}
export declare const HeroSection: ({ title, backgroundImage, menuItems, image, mainContent, }: HeroSectionProps) => React.JSX.Element;
