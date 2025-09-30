import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DatePicker, DatePickerProps } from './DatePicker';
import 'jest-styled-components';

const MOCK_TODAY = new Date('2025-09-30T12:00:00Z');

const TestDatePicker = (props: Partial<DatePickerProps>) => <DatePicker {...props} />;

describe('DatePicker Component', () => {

    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(MOCK_TODAY);
    });

    beforeEach(() => {
        window.requestAnimationFrame = (callback) => {
            return setTimeout(callback, 0);
        };
        window.cancelAnimationFrame = (id) => {
            clearTimeout(id);
        };
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    describe('Calendar Navigation', () => {
        it('should navigate to the next month', async () => {
            const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
            render(<TestDatePicker />);
            await user.click(screen.getByRole('button', { name: /Open date picker/i }));

            const popover = await screen.findByTestId('popover-content');
            await user.click(within(popover).getByRole('button', { name: /Next month/i }));
            
            expect(within(popover).getByRole('option', { name: 'October' })).toBeInTheDocument();
            
            const day1Buttons = within(popover).getAllByRole('button', { name: '1' });
            const enabledDay1 = day1Buttons.find(btn => !btn.hasAttribute('disabled'));
            expect(enabledDay1).toBeInTheDocument();
        });

        it('should navigate to the previous month', async () => {
            const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
            render(<TestDatePicker />);
            await user.click(screen.getByRole('button', { name: /Open date picker/i }));

            const popover = await screen.findByTestId('popover-content');
            await user.click(within(popover).getByRole('button', { name: /Previous month/i }));
            
            expect(within(popover).getByRole('option', { name: 'August' })).toBeInTheDocument();

            const day31Buttons = within(popover).getAllByRole('button', { name: '31' });
            const enabledDay31 = day31Buttons.find(btn => !btn.hasAttribute('disabled'));
            expect(enabledDay31).toBeInTheDocument();
        });
    });

    describe('Localization', () => {
        it('should format date and calendar for German (de-DE)', async () => {
            const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
            render(<TestDatePicker defaultValue={new Date('2025-09-15')} locale="de-DE" />);
            
            await user.click(screen.getByRole('button', { name: /Open date picker/i }));
            const popover = await screen.findByTestId('popover-content');

            const weekDayTexts = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
            for (const day of weekDayTexts) {
                expect(within(popover).getByText(day)).toBeInTheDocument();
            }
        });

        it('should format calendar for American English (en-US)', async () => {
            const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
            render(<TestDatePicker defaultValue={new Date('2025-09-15')} locale="en-US" />);

            await user.click(screen.getByRole('button', { name: /Open date picker/i }));
            const popover = await screen.findByTestId('popover-content');
            
            const weekDayTexts = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            for (const day of weekDayTexts) {
                expect(within(popover).getByText(day)).toBeInTheDocument();
            }
        });
    });
});