import React, { useState } from "react";

export interface MenuItem {
  link: string;
  title: string | React.FC;
}

export interface ImageData {
  url: string;
  alt?: string;
}

export interface MainContent {
  title: string;
  description: string;
  links?: MenuItem[];
}

export interface HeroSectionProps {
  title: string | React.FC;
  backgroundImage?: ImageData;
  menuItems?: MenuItem[];
  image?: ImageData;
  mainContent: MainContent;
}

export const HeroSection = ({
  title,
  backgroundImage,
  menuItems,
  image,
  mainContent,
}: HeroSectionProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {backgroundImage && (
        <img
          src={backgroundImage.url}
          alt={backgroundImage.alt ?? "Hero Section Background Image"}
          className="object-cover -z-10 absolute inset-0 w-full h-full"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-[var(--entchen-primary)]/50 backdrop-blur-sm -z-10" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <nav className="absolute top-0 left-0 right-0 p-6 max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold tracking-widest uppercase cursor-pointer select-none text-[var(--entchen-text)]">
            {typeof title === "string" ? title : React.createElement(title)}
          </a>

          <div className="hidden md:flex space-x-6">
            {menuItems?.map((item) => (
              <a
                href={item.link}
                key={JSON.stringify(item)}
                className="flex items-center space-x-2 transition-transform hover:scale-110 text-[var(--entchen-text)]"
              >
                {typeof item.title === "string"
                  ? item.title
                  : React.createElement(item.title)}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
            type="button"
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-[6px] cursor-pointer focus:outline-none z-[60]"
          >
            <span className="block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm"></span>
            <span className="block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm"></span>
            <span className="block h-[3px] w-full bg-[var(--entchen-text)] rounded-sm"></span>
          </button>
        </nav>

        {/* Overlay for menu */}
        <div
          onClick={() => setMenuOpen(false)}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? undefined : -1}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Mobile navigation */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className={`fixed top-0 left-0 bottom-0 w-[250px] max-w-full bg-[var(--entchen-secondary)] text-[var(--entchen-text-secondary-color)] shadow-xl z-[60]
           transform transition-transform duration-[350ms] ease-in-out 
           ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          
          <div className="flex justify-end p-4 border-b border-gray700">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
              type="button"
              className="hover:text-gray400 focus:outline-none focus:ring focus:ring-white rounded text-current"
            >
              &#x2715;
            </button>
          </div>

          <nav className="flex flex-col mt-4 space-y-4 px-6 text-lg font-semibold select-none">
            {menuItems?.map((item) => (
              <a
                href={item.link}
                key={JSON.stringify(item)}
                onClick={() => setMenuOpen(false)}
                className="
                  block py2 px1 
                  border-b border-gray700 last:border-b-transparent 
                  hover:text-gray400 transition-colors duration150 ease-in-out cursor-pointer
                "
              >
                {typeof item.title === "string"
                  ? item.title
                  : React.createElement(item.title)}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main content area */}
        <div className="max-w-6xl w-full flex flex-col items-center md:flex-row md:items-center md:justify-center md:space-x12 mt20 md:mt0">

         {image && (
           <div className="flex-shrink--0 mb8 md:mb0 md:w1/2 flex justify-center items-center">
             {/* Standard img instead of next/image */}
             <img
               src={image.url}
               alt={image.alt || "Hero Section Main Image"}
               width={500}
               height={500}
               loading="lazy"
               decoding='async'
               // replicate classes from original for styling:
               className="
                 rounded-lg shadow2xl transition-transform transform hover-scale105"
             />
           </div>
         )}

         {/* Text content */}
         <div 
           className="
             flex flex-col items-center md-items-start text-center md-text-left md:w1/2 px-auto 
             text-[var(--entchen-text)] drop-shadow-lg max-w-xl 
           "
         >
           <h1 
             className="
               text5xl sm-text6xl md-text7xl font-extrabold tracking-tight leading-tight mb4 drop-shadow-lg 
             "
           >
             {mainContent.title}
           </h1>

           <p 
             className="
               text-lg sm-text-xl font-light mb8 drop-shadow-md max-w-xl  
             "
           >
             {mainContent.description}
           </p>

           {/* Links/buttons */}
           {mainContent.links && (
             <div 
               className="
                 flex gap-x4 gap-y2 flex-wrap justify-center md:justify-start  
               "
             >
               {mainContent.links.map((item) => (
                 <a 
                   href={item.link} 
                   key={JSON.stringify(item)} 
                   onClick={() => setMenuOpen(false)}
                   // added cursor:pointer so it behaves like button:
                   style={{ cursor: 'pointer' }}
                   // copied your tailwind classes:
                   className="
                     bg-white text-black font-semibold py3 px8 rounded-full shadow-lg hover:bg-gray200 transition-colors transform hover-scale105 select-none  
                   "
                 >
                   {typeof item.title === 'string' ? item.title : React.createElement(item.title)}
                 </a>
               ))}
             </div>  
           )}
         </div>   
       </div>
     </div>
   </header>
 );
};