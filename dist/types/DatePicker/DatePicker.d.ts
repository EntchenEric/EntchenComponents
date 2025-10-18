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
    yearRange?: {
        from: number;
        to: number;
    };
}
export declare const DatePicker: ({ value, defaultValue, onChange, placeholder, locale, yearRange }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
