import React, { ReactNode, JSX } from 'react';

type AlertVariant = "default" | "danger" | "warning" | "success";
interface AlertProps {
    variant?: AlertVariant;
    title: ReactNode;
    description?: ReactNode;
    icon?: React.FC;
}
declare const Alert: ({ variant, title, description, icon: Icon, }: AlertProps) => React.JSX.Element;

type ButtonVariant = "primary" | "secondary" | "danger" | "warning";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    loading?: boolean;
    variant?: ButtonVariant;
}
declare const Button: React.FC<ButtonProps>;

interface MenuItem {
    link: string;
    title: ReactNode;
}
interface ImageData {
    url: string;
    alt?: string;
}
interface MainContent {
    title: string;
    description: string;
    links?: MenuItem[];
}
interface HeroSectionProps {
    title: ReactNode;
    backgroundImage?: ImageData;
    menuItems?: MenuItem[];
    image?: ImageData;
    mainContent: MainContent;
}
declare const HeroSection: ({ title, backgroundImage, menuItems, image, mainContent, }: HeroSectionProps) => React.JSX.Element;

interface CardProps {
    title: ReactNode;
    description: ReactNode;
    icon?: React.FC;
    elevateOnHover?: boolean;
    leftImage?: ImageData;
    rightImage?: ImageData;
}
declare const Card: React.FC<CardProps>;

interface DialogProps {
    trigger: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    onConfirm?: (closeDialog: () => void) => void;
    onCancel?: (closeDialog: () => void) => void;
    onDialogClose?: () => void;
    confirmButton?: ButtonProps;
    cancelButton?: ButtonProps;
}
declare const Dialog: ({ trigger, title, description, onConfirm, onCancel, onDialogClose, confirmButton, cancelButton, }: DialogProps) => JSX.Element;

interface Theme {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
    textSecondaryColor: string;
}
interface EntchenProviderProps {
    children: ReactNode;
    theme: Theme;
}
declare const EntchenProvider: ({ children, theme }: EntchenProviderProps) => React.JSX.Element;

declare const DatePicker: () => React.JSX.Element;

interface PopoverProps {
    trigger: ReactNode;
    popoverContent: ReactNode;
    open?: boolean;
}
declare const Popover: ({ trigger, popoverContent, open: defaultOpen }: PopoverProps) => React.JSX.Element;

export { Alert, Button, Card, DatePicker, Dialog, EntchenProvider, HeroSection, Popover };
