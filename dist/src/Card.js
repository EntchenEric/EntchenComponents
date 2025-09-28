import React from "react";
export const Card = ({ title, description, icon: Icon, elevateOnHover = true, leftImage, rightImage, }) => {
    var _a, _b;
    const renderContent = (content) => typeof content === "string" ? React.createElement(React.Fragment, null, content) : React.createElement(content);
    return (React.createElement("div", { className: `bg-[var(--entchen-primary)] p-8 rounded-2xl shadow-lg border border-[var(--entchen-primary-200)]/50 backdrop-blur-sm transition-all duration-300 ${elevateOnHover ? "hover:shadow-xl hover:-translate-y-1" : ""}`, style: {
            opacity: 1,
            transform: "none",
        } },
        React.createElement("div", { className: `flex items-center ${leftImage || rightImage ? "gap-6 md:gap-10" : ""}` },
            leftImage && (React.createElement("div", { className: "hidden md:block flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden shadow-md" },
                React.createElement("img", { src: leftImage.url, alt: (_a = leftImage.alt) !== null && _a !== void 0 ? _a : "Left image", style: { width: "100%", height: "100%", objectFit: "cover" } }))),
            React.createElement("div", { className: "flex-grow min-w-0" },
                React.createElement("div", { className: "flex items-center gap-4 mb-3" },
                    Icon && (React.createElement("span", { className: "text-[var(--entchen-secondary)] flex-shrink-0", "aria-hidden": "true" },
                        React.createElement(Icon, null))),
                    typeof title === "string" ? (React.createElement("h3", { className: "font-semibold text-xl truncate text-[var(--entchen-text)]", title: title }, title)) : (renderContent(title))),
                typeof description === "string" ? (React.createElement("p", { className: "text-[var(--entchen-text)] break-normal" }, description)) : (renderContent(description))),
            rightImage && (React.createElement("div", { className: "hidden md:block flex-shrink-0 w-[100px] h-[100px] relative rounded-lg overflow-hidden shadow-md" },
                React.createElement("img", { src: rightImage.url, alt: (_b = rightImage.alt) !== null && _b !== void 0 ? _b : "Right image", style: { width: "100%", height: "100%", objectFit: "cover" } }))))));
};
