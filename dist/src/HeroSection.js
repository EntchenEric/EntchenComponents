import React, { useState } from "react";
export const HeroSection = ({ title, backgroundImage, menuItems, image, mainContent, }) => {
    var _a;
    const [menuOpen, setMenuOpen] = useState(false);
    return (React.createElement("header", { className: "relative w-full h-screen overflow-hidden" },
        backgroundImage && (React.createElement("img", { src: backgroundImage.url, alt: (_a = backgroundImage.alt) !== null && _a !== void 0 ? _a : "Hero Section Background Image", className: "object-cover -z-10 absolute inset-0 w-full h-full", loading: "eager" })),
        React.createElement("div", { className: "absolute inset-0 bg-[var(--entchen-primary)]/50 backdrop-blur-sm -z-10" }),
        React.createElement("div", { className: "relative z-10 flex flex-col items-center justify-center h-full px-4 text-center" },
            React.createElement("nav", { className: "absolute top-0 left-0 right-0 p-6 max-w-7xl mx-auto flex justify-between items-center" },
                React.createElement("a", { href: "/", className: "text-2xl font-bold tracking-widest uppercase cursor-pointer select-none text-[var(--entchen-text)]" }, typeof title === "string" ? title : React.createElement(title)),
                React.createElement("div", { className: "hidden md:flex space-x-6" }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map((item) => (React.createElement("a", { href: item.link, key: JSON.stringify(item), className: "flex items-center space-x-2 transition-transform hover:scale-110 text-[var(--entchen-text)]" }, typeof item.title === "string"
                    ? item.title
                    : React.createElement(item.title))))),
                React.createElement("button", { onClick: () => setMenuOpen(true), "aria-label": "Open Menu", type: "button", className: "md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-[6px] cursor-pointer focus:outline-none z-[60]" },
                    React.createElement("span", { className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm" }),
                    React.createElement("span", { className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm" }),
                    React.createElement("span", { className: "block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm" }))),
            React.createElement("div", { onClick: () => setMenuOpen(false), "aria-hidden": !menuOpen, tabIndex: menuOpen ? undefined : -1, className: `fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}` }),
            React.createElement("aside", { role: "dialog", "aria-modal": "true", "aria-label": "Mobile navigation menu", className: `fixed top-0 left-0 bottom-0 w-[250px] max-w-full bg-[var(--entchen-secondary)] text-[var(--entchen-text-secondary-color)] shadow-xl z-[60]
           transform transition-transform duration-[350ms] ease-in-out 
           ${menuOpen ? "translate-x-0" : "-translate-x-full"}` },
                React.createElement("div", { className: "flex justify-end p-4 border-b border-gray700" },
                    React.createElement("button", { onClick: () => setMenuOpen(false), "aria-label": "Close Menu", type: "button", className: "hover:text-gray400 focus:outline-none focus:ring focus:ring-white rounded text-current" }, "\u2715")),
                React.createElement("nav", { className: "flex flex-col mt-4 space-y-4 px-6 text-lg font-semibold select-none" }, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map((item) => (React.createElement("a", { href: item.link, key: JSON.stringify(item), onClick: () => setMenuOpen(false), className: "\n                  block py2 px1 \n                  border-b border-gray700 last:border-b-transparent \n                  hover:text-gray400 transition-colors duration150 ease-in-out cursor-pointer\n                " }, typeof item.title === "string"
                    ? item.title
                    : React.createElement(item.title)))))),
            React.createElement("div", { className: "max-w-6xl w-full flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x12 mt20 md:mt0" },
                image && (React.createElement("div", { className: "flex-shrink--0 mb8 md:mb0 md:w1/2 flex justify-center items-center" },
                    React.createElement("img", { src: image.url, alt: image.alt || "Hero Section Main Image", width: 500, height: 500, loading: "lazy", decoding: 'async', 
                        // replicate classes from original for styling:
                        className: "\n                 rounded-lg shadow2xl transition-transform transform hover-scale105" }))),
                React.createElement("div", { className: "\n             flex flex-col items-center md-items-start text-center md-text-left md:w1/2 px-auto \n             text-[var(--entchen-text)] drop-shadow-lg max-w-xl \n           " },
                    React.createElement("h1", { className: "\n               text5xl sm-text6xl md-text7xl font-extrabold tracking-tight leading-tight mb4 drop-shadow-lg \n             " }, mainContent.title),
                    React.createElement("p", { className: "\n               text-lg sm-text-xl font-light mb8 drop-shadow-md max-w-xl  \n             " }, mainContent.description),
                    mainContent.links && (React.createElement("div", { className: "\n                 flex gap-x4 gap-y2 flex-wrap justify-center md:justify-start  \n               " }, mainContent.links.map((item) => (React.createElement("a", { href: item.link, key: JSON.stringify(item), onClick: () => setMenuOpen(false), 
                        // added cursor:pointer so it behaves like button:
                        style: { cursor: 'pointer' }, 
                        // copied your tailwind classes:
                        className: "\n                     bg-white text-black font-semibold py3 px8 rounded-full shadow-lg hover:bg-gray200 transition-colors transform hover-scale105 select-none  \n                   " }, typeof item.title === 'string' ? item.title : React.createElement(item.title)))))))))));
};
