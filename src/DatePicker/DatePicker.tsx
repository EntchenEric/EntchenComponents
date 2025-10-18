"use client"

import React, { useState, useCallback, useMemo } from "react";
import styled from 'styled-components';
import { Popover } from '../Popover';

// #region Component Interfaces
export interface DatePickerProps {
    /** The selected date (for controlled component). */
    value?: Date | null;
    /** The initial date (for uncontrolled component). */
    defaultValue?: Date | null;
    /** Callback function invoked when a date is selected. */
    onChange?: (date: Date) => void;
    /** Placeholder text for the trigger input. */
    placeholder?: string;
    /** The locale to use for formatting dates (e.g., 'en-US', 'de-DE'). Defaults to browser's locale. */
    locale?: string;
    /** The range of years to display in the year dropdown. */
    yearRange?: { from: number; to: number };
}
// #endregion

// #region Icons
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);
// #endregion

// #region DatePicker Styled Components
const TriggerButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    background-color: var(--entchen-primary);
    color: var(--entchen-text);
    border: 1px solid var(--entchen-primary-200);
    border-radius: 6px;
    cursor: pointer;
    text-align: left;
    transition: border-color 0.2s ease-in-out;

    &:hover {
        border-color: var(--entchen-primary-400);
    }

    &:focus-visible {
        outline: 2px solid var(--entchen-secondary-500);
        outline-offset: 2px;
    }
`;

const Placeholder = styled.span`
    color: var(--entchen-text-secondary-500);
`;

const CalendarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
.
`;

const HeaderControls = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const HeaderSelect = styled.select`
    padding: 0.25rem 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid var(--entchen-primary-400);
    border-radius: 6px;
    color: var(--entchen-text);
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2rem;

    &:hover {
        background-color: var(--entchen-primary-100);
    }

    &:focus-visible {
        outline: 2px solid var(--entchen-secondary-500);
        outline-offset: 1px;
    }
`;

const NavButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 6px;
    color: var(--entchen-text);
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:hover {
        background-color: var(--entchen-primary-100);
        border-color: var(--entchen-primary-200);
    }
`;

const CalendarGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
`;

const GridCell = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
`;

const DayOfWeekCell = styled(GridCell)`
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--entchen-text);
`;

const DayButton = styled.button<{ $isSelected?: boolean; $isToday?: boolean; $isOutsideMonth?: boolean; }>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid transparent;
    background-color: transparent;
    color: var(--entchen-text);
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

    &:not(:disabled):hover {
        background-color: var(--entchen-primary-200);
    }
    
    ${({ $isOutsideMonth }) => $isOutsideMonth && `
        color: var(--entchen-primary-400);
    `}

    ${({ $isToday }) => $isToday && `
        border-color: var(--entchen-secondary-500);
        color: var(--entchen-secondary-700);
    `}

    ${({ $isSelected }) => $isSelected && `
        background-color: var(--entchen-secondary);
        color: var(--entchen-primary);
        font-weight: bold;
        border-color: var(--entchen-secondary);

        &:hover {
            background-color: var(--entchen-secondary-700);
        }
    `}

    &:disabled {
        cursor: not-allowed;
        &:hover {
            background-color: transparent;
        }
    }
`;
// #endregion

export const DatePicker = ({
    value,
    defaultValue = null,
    onChange,
    placeholder = "Select a date",
    locale,
    yearRange = { from: new Date().getFullYear() - 100, to: new Date().getFullYear() + 10 }
}: DatePickerProps) => {
    const isControlled = value !== undefined;
    const [internalDate, setInternalDate] = useState(defaultValue);
    const selectedDate = isControlled ? value : internalDate;

    const [isOpen, setIsOpen] = useState(false);
    const [displayDate, setDisplayDate] = useState(selectedDate || new Date());

    const handleDateChange = (date: Date) => {
        if (!isControlled) {
            setInternalDate(date);
        }
        onChange?.(date);
        setDisplayDate(date);
        setIsOpen(false);
    };
    
    const { weekdays, months, years, firstDayOfWeek } = useMemo(() => {
        const localeString = locale || (typeof navigator !== 'undefined' ? navigator.language : 'en-US');
        const intlLocale = new Intl.Locale(localeString);

        let firstDayOfWeek: 0 | 1;

        const weekInfo = (intlLocale as any).weekInfo;
        if (weekInfo && typeof weekInfo.firstDay === 'number') {
            firstDayOfWeek = weekInfo.firstDay % 7 === 0 ? 0 : 1;
        } else {
            const sundayFirstLocales = ['en-US', 'en-CA', 'es-MX', 'fr-CA', 'pt-BR', 'ja-JP'];
            if (sundayFirstLocales.includes(localeString)) {
                firstDayOfWeek = 0; // Sunday
            } else {
                firstDayOfWeek = 1; // Monday (ISO 8601 standard / most of the world)
            }
        }

        const shortWeekdayFormatter = new Intl.DateTimeFormat(localeString, { weekday: 'short' });
        const monthFormatter = new Intl.DateTimeFormat(localeString, { month: 'long' });
        
        const weekdays = Array.from({ length: 7 }, (_, i) => {
            const dayIndex = (firstDayOfWeek + i) % 7;
            const date = new Date(2023, 0, 1 + dayIndex); 
            return shortWeekdayFormatter.format(date);
        });

        const months = Array.from({ length: 12 }, (_, i) => ({
            value: i,
            label: monthFormatter.format(new Date(2000, i, 1))
        }));

        const years = Array.from({ length: yearRange.to - yearRange.from + 1 }, (_, i) => yearRange.from + i);

        return { weekdays, months, years, firstDayOfWeek };
    }, [locale, yearRange]);

    const calendarContent = useCallback(() => {
        const year = displayDate.getFullYear();
        const month = displayDate.getMonth();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const firstDayOfMonth = new Date(year, month, 1).getDay(); 
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const daysInPrevMonth = new Date(year, month, 0).getDate();
        
        const paddingDays = (firstDayOfMonth - firstDayOfWeek + 7) % 7;
        
        const days = [];
        for (let i = 0; i < paddingDays; i++) {
            const day = daysInPrevMonth - paddingDays + 1 + i;
            days.push(<GridCell key={`prev-${i}`}><DayButton $isOutsideMonth disabled>{day}</DayButton></GridCell>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const currentDate = new Date(year, month, day);
            const isSelected = selectedDate ? currentDate.getTime() === new Date(selectedDate).setHours(0,0,0,0) : false;
            const isToday = currentDate.getTime() === today.getTime();
            days.push(
                <GridCell key={day}>
                    <DayButton $isSelected={isSelected} $isToday={isToday} onClick={() => handleDateChange(currentDate)}>
                        {day}
                    </DayButton>
                </GridCell>
            );
        }

        const totalCells = 42;
        const remainingCells = totalCells - days.length;
        for (let i = 1; i <= remainingCells; i++) {
             days.push(<GridCell key={`next-${i}`}><DayButton $isOutsideMonth disabled>{i}</DayButton></GridCell>);
        }

        return (
            <CalendarContainer>
                <CalendarHeader>
                    <NavButton aria-label="Previous month" onClick={() => setDisplayDate(new Date(year, month - 1, 1))}>
                        <ChevronLeftIcon />
                    </NavButton>
                    <HeaderControls>
                        <HeaderSelect aria-label="Select month" value={month} onChange={(e) => setDisplayDate(new Date(year, parseInt(e.target.value), 1))}>
                            {months.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                        </HeaderSelect>
                        <HeaderSelect aria-label="Select year" value={year} onChange={(e) => setDisplayDate(new Date(parseInt(e.target.value), month, 1))}>
                             {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </HeaderSelect>
                    </HeaderControls>
                    <NavButton aria-label="Next month" onClick={() => setDisplayDate(new Date(year, month + 1, 1))}>
                        <ChevronRightIcon />
                    </NavButton>
                </CalendarHeader>
                <CalendarGrid>
                    {weekdays.map(day => <DayOfWeekCell key={day}>{day}</DayOfWeekCell>)}
                    {days}
                </CalendarGrid>
            </CalendarContainer>
        );
    }, [displayDate, selectedDate, handleDateChange, months, years, weekdays, firstDayOfWeek]);

    const trigger = (
        <TriggerButton type="button" aria-label="Open date picker">
            {selectedDate ? (
                <span>{new Intl.DateTimeFormat(locale).format(selectedDate)}</span>
            ) : (
                <Placeholder>{placeholder}</Placeholder>
            )}
            <CalendarIcon />
        </TriggerButton>
    );

    return (
        <Popover
            open={isOpen}
            onOpenChange={setIsOpen}
            trigger={trigger}
            popoverContent={calendarContent()}
        />
    );
};