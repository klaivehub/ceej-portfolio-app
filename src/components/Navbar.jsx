// resources/js/components/Navbar.jsx
import React, { useState } from "react";
import Button from "./Button";
import { NAV_LINKS } from "../constants";

const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-10 5L2 7"></path>
    </svg>
);

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <header
                className="fixed top-0 w-full z-50 shadow-md transition-all duration-300"
                style={{
                    backgroundColor: "var(--primary-dark)",
                    color: "var(--primary-light)",
                }}
            >
                <div className="max-w-6xl mx-auto w-full px-4 md:px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        
                        {/* 1. Logo */}
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "home")}
                            className="text-2xl font-bold cursor-pointer hover:text-cyan-400 transition"
                        >
                           <span className="text-cyan-400">C</span>
                           eej
                        </a>

                        {/* 2. Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className="text-sm font-medium hover:text-cyan-400 transition"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* 3. Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            {/* Status Badge */}
                            <span className="flex items-center px-3 py-1 text-xs font-medium bg-green-900/30 text-green-400 border border-green-500/30 rounded-full">
                                <span className="w-2 h-2 rounded-full animate-pulse bg-green-400 mr-2"></span>
                                Available for Work
                            </span>
                        </div>

                        {/* 4. Mobile Hamburger Toggle */}
                        <Button
                            className="lg:hidden flex flex-col gap-1.5 cursor-pointer p-2 z-50"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle Menu"
                        >
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                        </Button>
                    </div>
                </div>
            </header>

            {/* 5. Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-gray-900/95 z-40 lg:hidden transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className="text-2xl font-medium text-white hover:text-cyan-400"
                        >
                            {link.label}
                        </a>
                    ))}
                    
                    {/* Mobile Button Usage */}
                    <Button 
                        onClick={(e) => handleNavClick(e, "contact")}
                        className="flex items-center gap-2 mt-4"
                    >
                        <EmailIcon />
                        <span>Hire Me</span>
                    </Button>
                </nav>
            </div>
        </>
    );
}