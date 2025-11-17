"use client"; 

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#home'); 

    const accentColor = "text-[#965bf5]"; 
    const defaultColor = "text-gray-700 hover:text-[#965bf5]";

    const handleLinkClick = (href) => {
        setActiveLink(href);
    };

    const getLinkClasses = (href) => {
        const isActive = activeLink === href;
        const baseClasses = "font-semibold transition-colors";
        return `${baseClasses} ${isActive ? accentColor : defaultColor}`;
    };

    return (
        <nav className="flex justify-between items-center p-6 text-lg">
           <Link 
                href="#home" 
                className={`${accentColor} font-bold text-xl`}
                onClick={() => handleLinkClick('#home')}
            >
                Prayas Bhatt
            </Link>

         <div className="flex gap-6">
           <Link href="#home"  className={getLinkClasses('#home')} onClick={() => handleLinkClick('#home')}>
                Home
            </Link>
           <Link  href="#about"  className={getLinkClasses('#about')} onClick={() => handleLinkClick('#about')} >
                About
            </Link>
           <Link   href="#portfolio" className={getLinkClasses('#portfolio')}  onClick={() => handleLinkClick('#portfolio')}  >
                Portfolio
            </Link>
           <Link   href="#contact"  className={getLinkClasses('#contact')}  onClick={() => handleLinkClick('#contact')}  >
                Contact
            </Link>
          </div>
       </nav>
    );
};

export default Navbar;