'use client';

import { Header } from '@/components';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import '../global.css';
import { usePathname } from 'next/navigation';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <CacheProvider value={muiCache}>
        <body
          style={{
            background:
              pathname === '/auth'
                ? "url('/authBackground.jpg') no-repeat center center fixed"
                : '',
            backgroundSize: pathname === '/auth' ? 'cover' : '',
          }}>
          {pathname !== '/auth' && <Header />}
          {children}
        </body>
      </CacheProvider>
    </html>
  );
}
