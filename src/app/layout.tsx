import './globals.css';

import type { Metadata } from 'next';

import StyledComponentsRegistry from '@/lib/registry';

import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Acme Inc',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
