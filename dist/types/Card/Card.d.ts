import React, { ReactNode } from "react";
import { ImageData } from "../HeroSection/HeroSection";
export interface CardProps {
    title: ReactNode;
    description: ReactNode;
    icon?: ReactNode;
    elevateOnHover?: boolean;
    leftImage?: ImageData;
    rightImage?: ImageData;
}
export declare const Card: React.FC<CardProps>;
