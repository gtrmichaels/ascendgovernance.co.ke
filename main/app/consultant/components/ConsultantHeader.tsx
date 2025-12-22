'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ConsultantHeaderProps {
  onMenuClick: () => void;
}

export default function ConsultantHeader({ onMenuClick }: ConsultantHeaderProps) {
  const [isAvailable, setIsAvailable] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-text-primary hover:text-primary p-2"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Right Side - Status & Profile */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Availability Toggle */}
          <div className="hidden md:flex items-center space-x-2">
            <span className="text-sm text-text-secondary">Status:</span>
            <button
              onClick={() => setIsAvailable(!isAvailable)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all ${
                isAvailable
                  ? 'bg-success-50 text-success-700 border border-success-200'
                  : 'bg-secondary-200 text-text-secondary border border-border'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-success-500' : 'bg-secondary-500'}`} />
              <span className="text-sm font-medium">
                {isAvailable ? 'Available' : 'Unavailable'}
              </span>
            </button>
          </div>

          {/* Profile Avatar */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-primary-200 flex items-center justify-center">
                <span className="text-primary-700 font-semibold">JD</span>
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-text-primary">John Doe</p>
                <p className="text-xs text-text-secondary">Consultant</p>
              </div>
              <svg className="w-4 h-4 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border py-2 z-50">
                <Link
                  href="/consultant/profile"
                  className="block px-4 py-2 text-sm text-text-primary hover:bg-secondary-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  View Profile
                </Link>
                <Link
                  href="/consultant/settings"
                  className="block px-4 py-2 text-sm text-text-primary hover:bg-secondary-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Settings
                </Link>
                <hr className="my-2 border-border" />
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-error-500 hover:bg-secondary-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

