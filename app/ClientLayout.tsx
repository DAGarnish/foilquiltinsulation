'use client';

import { usePathname } from 'next/navigation';

export function ClientLayout({ 
  children, 
  header, 
  footer 
}: { 
  children: React.ReactNode; 
  header: React.ReactNode; 
  footer: React.ReactNode; 
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  return (
    <div className="site-wrapper">
      {!isAdmin && header}
      {children}
      {!isAdmin && footer}
    </div>
  );
}
