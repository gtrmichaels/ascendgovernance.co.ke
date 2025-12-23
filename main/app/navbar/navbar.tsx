'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getUser, clearAuth, getDashboardPath, type User } from '../lib/auth';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setUser(getUser());
  }, []);

  // Track hash changes for client-side navigation
  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };
    
    updateHash(); // Set initial hash
    window.addEventListener('hashchange', updateHash);
    
    return () => window.removeEventListener('hashchange', updateHash);
  }, [pathname]);

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    const hrefPath = href.split('#')[0];
    const hrefHash = href.includes('#') ? href.split('#')[1] : '';
    
    // For hash links (like /homepage#about)
    if (hrefHash) {
      // Only active if we're on the correct path AND the hash matches
      const isCorrectPath = pathname === hrefPath || (hrefPath === '/homepage' && pathname === '/');
      return isCorrectPath && currentHash === `#${hrefHash}`;
    }
    
    // For regular links without hash
    // Home should only be active when on homepage/root AND no hash is present
    if (hrefPath === '/homepage') {
      return (pathname === '/homepage' || pathname === '/') && !currentHash;
    }
    
    // Exact match for other routes
    return pathname === hrefPath && !currentHash;
  };

  // Navigation items
  const navItems = [
    { href: '/homepage', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/research', label: 'Research' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-background/70 backdrop-blur-sm border-b border-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/homepage" className="flex items-center">
              {/* Abstract geometric SVG icon: three stacked, offset parallelograms (ascending steps), no frame */}
              <svg className="h-10 w-10 text-primary" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,28 18,24 30,24 22,28" fill="currentColor" />
                <polygon points="12,20 20,16 32,16 24,20" fill="currentColor" />
                <polygon points="14,12 22,8 34,8 26,12" fill="currentColor" />
              </svg>
              <span className="ml-3 text-xl font-semibold text-primary">Ascend Governance</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-text-primary hover:text-primary transition-colors duration-200 ${
                  isActive(item.href) ? 'nav-active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  href={getDashboardPath(user.role)} 
                  className="text-text-primary hover:text-primary transition-colors duration-200 cursor-pointer z-10 relative"
                  onClick={(e) => {
                    // #region agent log
                    fetch('http://127.0.0.1:7242/ingest/422e6a82-045d-404f-8218-fcee1cf2417e',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'navbar/navbar.tsx:94',message:'Dashboard link clicked',data:{role:user.role,path:getDashboardPath(user.role),hasToken:!!localStorage.getItem('accessToken')},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'F'})}).catch(()=>{});
                    // #endregion
                  }}
                >
                  {user.role === 'ADMIN' && 'Admin Dashboard'}
                  {user.role === 'CONSULTANT' && 'Consultant Dashboard'}
                  {user.role === 'USER' && 'My Dashboard'}
                </Link>
                <button
                  onClick={() => {
                    clearAuth();
                    window.location.href = '/signin';
                  }}
                  className="bg-[#D4AF37] text-[#213B31] text-sm font-medium px-4 py-2 hover:bg-[#B8962F] transition-colors duration-200 rounded-none"
                  style={{ borderRadius: 0 }}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link href="/signin" className="btn-accent text-sm px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 rounded-none">
                Sign In
              </Link>
            )}
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-text-primary hover:text-primary transition-colors duration-200 ${
                  isActive(item.href) ? 'nav-active' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link 
                  href={getDashboardPath(user.role)} 
                  className="text-text-primary hover:text-primary transition-colors duration-200 cursor-pointer z-10 relative"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {user.role === 'ADMIN' && 'Admin Dashboard'}
                  {user.role === 'CONSULTANT' && 'Consultant Dashboard'}
                  {user.role === 'USER' && 'My Dashboard'}
                </Link>
                <button
                  onClick={() => {
                    clearAuth();
                    window.location.href = '/signin';
                  }}
                  className="bg-[#D4AF37] text-[#213B31] text-sm font-medium px-4 py-2 hover:bg-[#B8962F] transition-colors duration-200 rounded-none"
                  style={{ borderRadius: 0 }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link 
                href="/signin" 
                className="btn-accent text-sm px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 text-center rounded-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
