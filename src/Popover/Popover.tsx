"use client"

import React, { useState, useRef, useEffect, ReactNode } from "react";
import styled, { keyframes } from 'styled-components'

// #region Component Interfaces
export interface PopoverProps {
    trigger: ReactNode;
    popoverContent: ReactNode;
    open?: boolean;
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

const Content = styled.div`
    position: absolute;
    left: 0;
    top: calc(100% + 12px);
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
    transform-origin: top left;

    &::before {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 24px;
        transform: translateX(-50%);
        border-width: 8px;
        border-style: solid;
        border-color: transparent transparent var(--entchen-primary-100) transparent;
    }
    
    &::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 24px;
        transform: translateX(-50%) translateY(1.5px);

        border-width: 7px;
        border-style: solid;
        border-color: transparent transparent var(--entchen-primary) transparent;
    }
`;
// #endregion

export const Popover = ({
    trigger,
    popoverContent,
    open: defaultOpen = false
}: PopoverProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <Container ref={popoverRef}>
            <Trigger onClick={handleToggle}>
                {trigger}
            </Trigger>

            {isOpen && (
                <Content>
                    {popoverContent}
                </Content>
            )}
        </Container>
    );
};