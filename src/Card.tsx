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

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  elevateOnHover = true,
  leftImage,
  rightImage,
}) => {
  const renderContent = (content: string | React.FC) =>
    typeof content === "string" ? <>{content}</> : React.createElement(content);

  return (
    <div
      className={`bg-[var(--entchen-primary)] p-8 rounded-2xl shadow-lg border border-[var(--entchen-primary-200)]/50 backdrop-blur-sm transition-all duration-300 ${
        elevateOnHover ? "hover:shadow-xl hover:-translate-y-1" : ""
      }`}
      style={{
        opacity: 1,
        transform: "none",
      }}
    >
      <div
        className={`flex items-center ${
          leftImage || rightImage ? "gap-6 md:gap-10" : ""
        }`}
      >
        {leftImage && (
          <div className="hidden md:block flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden shadow-md">
            <img
              src={leftImage.url}
              alt={leftImage.alt ?? "Left image"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}

        <div className="flex-grow min-w-0">
          <div className="flex items-center gap-4 mb-3">
            {Icon && (
              <span
                className="text-[var(--entchen-secondary)] flex-shrink-0"
                aria-hidden="true"
              >
                <Icon />
              </span>
            )}
            {typeof title === "string" ? (
              <h3
                className="font-semibold text-xl truncate text-[var(--entchen-text)]"
                title={title}
              >
                {title}
              </h3>
            ) : (
              renderContent(title)
            )}
          </div>
          {typeof description === "string" ? (
            <p className="text-[var(--entchen-text)] break-normal">{description}</p>
          ) : (
            renderContent(description)
          )}
        </div>

        {rightImage && (
          <div className="hidden md:block flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden shadow-md">
            <img
              src={rightImage.url}
              alt={rightImage.alt ?? "Right image"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};