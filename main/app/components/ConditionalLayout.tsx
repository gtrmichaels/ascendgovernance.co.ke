'use client';

import { usePathname } from 'next/navigation';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isConsultantRoute = pathname?.startsWith('/consultant');
  const isAdminRoute = pathname?.startsWith('/admin');
  const isUserRoute = pathname?.startsWith('/user');
  const shouldHideNavbar = isConsultantRoute || isAdminRoute || isUserRoute;

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

