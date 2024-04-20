'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';

import { navigate } from './actions';
import { Container, Content } from './styles';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Header
          onSearch={navigate}
          showBanner={pathname === '/'}
        />
        <Content>{children}</Content>
        <Footer />
        <Toaster />
      </Container>
    </Suspense>
  );
}
