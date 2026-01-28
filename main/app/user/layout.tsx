'use client';

import UserNavbar from './components/UserNavbar';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <UserNavbar />
      
      {/* Main Content Area */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}


