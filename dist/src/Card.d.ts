import React from "react";
import { ImageData } from "./HeroSection";
export interface CardProps {
    title: string | React.FC;
    description: string | React.FC;
    icon?: React.FC;
    elevateOnHover?: boolean;
    leftImage?: ImageData;
    rightImage?: ImageData;
}
export declare const Card: React.FC<CardProps>;
