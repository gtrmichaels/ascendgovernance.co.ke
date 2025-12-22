'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/users', label: 'Users', icon: '👥' },
    { href: '/admin/consultants', label: 'Consultants', icon: '💼' },
    { href: '/admin/bookings', label: 'Bookings', icon: '📅' },
    { href: '/admin/messages', label: 'Messages', icon: '💬' },
    { href: '/admin/content', label: 'Content', icon: '📝' },
    { href: '/admin/settings', label: 'Settings', icon: '⚙️' },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-primary-900 border-r border-primary-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-6 border-b border-primary-800">
            <Link href="/admin" className="flex items-center">
              <svg className="h-8 w-8 text-accent" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="10,28 18,24 30,24 22,28" fill="currentColor" />
                <polygon points="12,20 20,16 32,16 24,20" fill="currentColor" />
                <polygon points="14,12 22,8 34,8 26,12" fill="currentColor" />
              </svg>
              <span className="ml-3 text-lg font-semibold text-white">Ascend Governance</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-primary-700 text-white shadow-md'
                      : 'text-primary-200 hover:bg-primary-800 hover:text-white'
                  }`}
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-primary-800">
            <p className="text-xs text-primary-400">Admin Portal</p>
          </div>
        </div>
      </aside>
    </>
  );
}

