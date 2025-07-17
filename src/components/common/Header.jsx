import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: "Services", href: "#services" },
    { text: "About", href: "#about" },
    { text: "Process", href: "#process" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Contact", href: "#contact" }
  ];

  return (
    <header className="relative w-full">
      {/* Header Background */}
      <div className="flex justify-start items-start w-full">
        <div className="flex justify-end items-end w-full shadow-[0px_4px_12px_#888888ff]">
          {/* Mobile Menu Button */}
          <button 
            className="block lg:hidden p-4 text-tertiary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:flex lg:flex-row lg:gap-16 lg:justify-end lg:items-center lg:w-auto absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-header lg:bg-transparent z-50 lg:z-auto`}>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 p-4 lg:p-0">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  className="text-sm md:text-base font-inter font-normal leading-5 text-center text-tertiary hover:text-primary transition-colors duration-200 py-2 lg:py-0"
                >
                  {item.text}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute top-2 left-2 transform -translate-y-16 translate-x-1.5">
        <img 
          src="/images/img_image_1.png" 
          alt="Logo" 
          className="w-[94px] h-[112px] sm:w-[80px] sm:h-[95px] md:w-[94px] md:h-[112px]"
        />
      </div>

      {/* Header Styling */}
      <style jsx>{`
        header {
          padding: 16px 104px 16px 56px;
          background-color: var(--header-bg);
        }
        
        @media (max-width: 768px) {
          header {
            padding: 16px 24px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;