import React from "react";

export type AlertVariant = "default" | "danger" | "warning" | "success";

export interface AlertProps {
  variant?: AlertVariant;
  title: string | React.FC;
  description?: string | React.FC;
  icon?: React.FC;
}

const baseClasses =
  "rounded-lg p-4 flex space-x-3 items-start shadow-sm";

const textClasses = "font-semibold leading-tight";
const descClasses = "mt-1 text-sm opacity-90 leading-relaxed text-[var(--entchen-text-secondary)]";

export const Alert = ({
  variant = "default",
  title,
  description,
  icon: Icon,
}: AlertProps) => {
  
  // Variant styles: Tailwind classes except default uses css vars inline style
  let variantClassNames = "";
  let style: React.CSSProperties | undefined;

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

  return (
    <div className={`${baseClasses} ${variantClassNames}`} style={style} role="alert" aria-live="polite" aria-atomic="true">
      {Icon && (
        <div className="flex-shrink-0 mt-[2px]">
          <Icon />
        </div>
      )}
      <div className="flex flex-col">
        <p className={textClasses}>
          {typeof title === "string" ? title : React.createElement(title)}
        </p>
        {description && (
          <p className={descClasses}>
            {typeof description === "string"
              ? description
              : React.createElement(description)}
          </p>
        )}
      </div>
    </div>
  );
};