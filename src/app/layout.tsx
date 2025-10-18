'use client';

import { Header } from '@/components';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import '../global.css';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
          className={clsx({
            ['authPage']: pathname === '/auth',
          })}>
          {pathname !== '/auth' && <Header />}
          {children}
        </body>
      </CacheProvider>
    </html>
  );
}
