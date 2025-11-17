"use client"; 

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('#home'); 
    
    const accentColor = "text-fuchsia-400"; 
    const defaultColor = "text-gray-400 hover:text-fuchsia-400"; 
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#contact", label: "Contact" },
    ];


    const handleLinkClick = (href) => {
        setActiveLink(href);
        setIsMenuOpen(false); 
    };


    const getLinkClasses = (href) => {
        const isActive = activeLink === href;
        const baseClasses = "font-semibold transition-colors py-2 md:py-0";
        return `${baseClasses} ${isActive ? accentColor : defaultColor}`;
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = `#${entry.target.id}`;
                    setActiveLink(sectionId);
                }
            });
        }, observerOptions);

        const sectionElements = navLinks
            .map(link => document.querySelector(link.href))
            .filter(element => element instanceof Element);

        sectionElements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []); 

    // **MODIFICATION HERE**
    // 1. We create a dynamic class for the navbar background.
    // 2. We use 'bg-gray-950' (or any dark color) when isMenuOpen is true.
    const navbarClasses = `fixed top-0 inset-x-0 z-50 p-4 md:p-6 transition-colors border-b border-white/10 ${
        isMenuOpen 
            ? 'bg-gray-950' // Solid color when menu is open
            : 'bg-transparent backdrop-blur-sm' // Transparent/Blurry when menu is closed
    }`;
    // **END MODIFICATION**

    return (
        // Apply the dynamic class
        <nav className={navbarClasses}> 
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Link 
                    href="#home" 
                    className={`${accentColor} font-extrabold text-2xl tracking-widest transition-colors`}
                    onClick={() => handleLinkClick('#home')}
                >
                    PRAYAS BHATT
                </Link>

                <div className="hidden md:flex gap-8">
                    {navLinks.map(link => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            className={getLinkClasses(link.href)} 
                            onClick={() => handleLinkClick(link.href)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <button 
                    className="md:hidden text-white z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>

            <div 
                className={`md:hidden fixed inset-0 bg-gray-950/95 pt-20 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col items-center gap-4 text-xl">
                    {navLinks.map(link => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            className={getLinkClasses(link.href)} 
                            onClick={() => handleLinkClick(link.href)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;