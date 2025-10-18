"use client"

import React, { useState, useRef, useEffect, ReactNode, useCallback, useLayoutEffect } from "react";
import styled, { keyframes, css } from 'styled-components'

// #region Component Interfaces
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
// #endregion

// #region Styled Components
const Container = styled.div`
    position: relative;
    display: inline-block;
`;

const Trigger = styled.div`
    cursor: pointer;
    display: inline-flex;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const arrowBaseStyles = css`
    content: '';
    position: absolute;
    left: 24px;
    transform: translateX(-50%);
    border-style: solid;
`;

const positionBottomStyles = css`
    top: calc(100% + 12px);
    transform-origin: top left;
    
    &::before {
        ${arrowBaseStyles};
        bottom: 100%;
        border-width: 8px;
        border-color: transparent transparent var(--entchen-primary-100) transparent;
    }
    
    &::after {
        ${arrowBaseStyles};
        bottom: 100%;
        transform: translateX(-50%) translateY(1.5px);
        border-width: 7px;
        border-color: transparent transparent var(--entchen-primary) transparent;
    }
`;

const positionTopStyles = css`
    bottom: calc(100% + 12px);
    transform-origin: bottom left;

    animation-name: ${keyframes`
      from {
        opacity: 0;
        transform: scale(0.95) translateY(10px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    `};

    &::before {
        ${arrowBaseStyles};
        top: 100%;
        border-width: 8px;
        border-color: var(--entchen-primary-100) transparent transparent transparent;
    }
    
    &::after {
        ${arrowBaseStyles};
        top: 100%;
        transform: translateX(-50%) translateY(-1.5px);
        border-width: 7px;
        border-color: var(--entchen-primary) transparent transparent transparent;
    }
`;

const Content = styled.div<{ position: 'top' | 'bottom' }>`
    position: absolute;
    left: 0;
    z-index: 10;
    min-width: 250px;

    background-color: var(--entchen-primary);
    color: var(--entchen-text);
    border: 1px solid var(--entchen-primary-100);
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 12px 24px -4px rgba(0, 0, 0, 0.08), 
                0 8px 16px -8px rgba(0, 0, 0, 0.05);

    animation: ${fadeIn} 0.2s ease-out;

    ${({ position }) => (position === 'top' ? positionTopStyles : positionBottomStyles)}
`;
// #endregion

export const Popover = ({
    trigger,
    popoverContent,
    open,
    onOpenChange,
    defaultOpen = false
}: PopoverProps) => {
    const isControlled = open !== undefined;
    const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);
    const isOpen = isControlled ? open : internalIsOpen;

    const [position, setPosition] = useState<'top' | 'bottom'>('bottom');

    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const handleSetOpen = useCallback((newOpenState: boolean) => {
        if (isControlled) {
            onOpenChange?.(newOpenState);
        } else {
            setInternalIsOpen(newOpenState);
        }
    }, [isControlled, onOpenChange]);

    const handleToggle = () => {
        handleSetOpen(!isOpen);
    };

    useLayoutEffect(() => {
        if (isOpen) {
            const calculatePosition = () => {
                if (!triggerRef.current || !contentRef.current) return;

                const triggerRect = triggerRef.current.getBoundingClientRect();
                const contentHeight = contentRef.current.offsetHeight;
                const viewHeight = window.innerHeight;
                const spaceAbove = triggerRect.top;
                const spaceBelow = viewHeight - triggerRect.bottom;
                const popoverHeightWithGap = contentHeight + 12;

                if (spaceBelow < popoverHeightWithGap && spaceAbove > spaceBelow) {
                    setPosition('top');
                } else {
                    setPosition('bottom');
                }
            };

            calculatePosition();
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                handleSetOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, handleSetOpen]);

    return (
        <Container ref={containerRef}>
            <Trigger onClick={handleToggle} ref={triggerRef}>
                {trigger}
            </Trigger>

            {isOpen && (
                <Content
                    ref={contentRef}
                    position={position}
                    data-testid="popover-content"
                    data-position={position}
                >
                    {popoverContent}
                </Content>
            )}
        </Container>
    );
};