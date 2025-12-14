'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background/70 backdrop-blur-sm border-b border-border fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* Abstract geometric SVG icon: three stacked, offset parallelograms (ascending steps), no frame */}
            <svg className="h-10 w-10 text-primary" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="10,28 18,24 30,24 22,28" fill="currentColor" />
              <polygon points="12,20 20,16 32,16 24,20" fill="currentColor" />
              <polygon points="14,12 22,8 34,8 26,12" fill="currentColor" />
            </svg>
            <span className="ml-3 text-xl font-semibold text-primary">Ascend Governance</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/homepage" className="text-text-primary hover:text-primary transition-colors duration-200 nav-active">
              Home
            </Link>
            <Link href="/services" className="text-text-primary hover:text-primary transition-colors duration-200">
              Services
            </Link>
            <Link href="/homepage#about" className="text-text-primary hover:text-primary transition-colors duration-200">
              About
            </Link>
            <Link href="/research" className="text-text-primary hover:text-primary transition-colors duration-200">
              Research
            </Link>
            <Link href="/contact" className="text-text-primary hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-text-primary hover:text-primary p-2"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}
        >
          <div className="flex flex-col space-y-4">
            <Link href="/homepage" className="text-text-primary hover:text-primary transition-colors duration-200 nav-active">
              Home
            </Link>
            <Link href="/services" className="text-text-primary hover:text-primary transition-colors duration-200">
              Services
            </Link>
            <Link href="/homepage#about" className="text-text-primary hover:text-primary transition-colors duration-200">
              About
            </Link>
            <Link href="/research" className="text-text-primary hover:text-primary transition-colors duration-200">
              Research
            </Link>
            <Link href="/contact" className="text-text-primary hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
