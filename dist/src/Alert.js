import React from "react";
const baseClasses = "rounded-lg p-4 flex space-x-3 items-start shadow-sm";
const textClasses = "font-semibold leading-tight";
const descClasses = "mt-1 text-sm opacity-90 leading-relaxed text-[var(--entchen-text-secondary)]";
export const Alert = ({ variant = "default", title, description, icon: Icon, }) => {
    // Variant styles: Tailwind classes except default uses css vars inline style
    let variantClassNames = "";
    let style;
    switch (variant) {
        case "danger":
            variantClassNames =
                "bg-red-100 border border-red-400 text-red-700";
            break;
        case "warning":
            variantClassNames =
                "bg-yellow-100 border border-yellow-400 text-yellow-700";
            break;
        case "success":
            variantClassNames =
                "bg-green-100 border border-green-400 text-green-700";
            break;
        case "default":
        default:
            style = {
                backgroundColor: 'var(--entchen-primary)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--entchen-primary-600)',
                color: 'var(--entchen-text)',
            };
            break;
    }
    return (React.createElement("div", { className: `${baseClasses} ${variantClassNames}`, style: style, role: "alert", "aria-live": "polite", "aria-atomic": "true" },
        Icon && (React.createElement("div", { className: "flex-shrink-0 mt-[2px]" },
            React.createElement(Icon, null))),
        React.createElement("div", { className: "flex flex-col" },
            React.createElement("p", { className: textClasses }, typeof title === "string" ? title : React.createElement(title)),
            description && (React.createElement("p", { className: descClasses }, typeof description === "string"
                ? description
                : React.createElement(description))))));
};
