import { ReactNode } from "react";
export interface PopoverProps {
    /** The element that triggers the popover to open. */
    trigger: ReactNode;
    /** The content to display inside the popover. */
    popoverContent: ReactNode;
    /**
     * The controlled open state of the popover.
     * When provided, the component is "controlled" and you must also provide onOpenChange.
     */
    open?: boolean;
    /**
     * The initial open state for an uncontrolled popover.
     * This is ignored if the `open` prop is provided.
     */
    defaultOpen?: boolean;
    /**
     * Callback function invoked when the open state changes.
     * Required when using the `open` prop.
     */
    onOpenChange?: (open: boolean) => void;
}
export declare const Popover: ({ trigger, popoverContent, open, onOpenChange, defaultOpen }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
