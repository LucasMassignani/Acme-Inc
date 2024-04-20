'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { navigate } from './actions';
import { Container, Content } from './styles';

export default function Template({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get('query');

  return (
    <Container>
      <Header
        initialSearchbarValue={search || ''}
        onSearch={navigate}
        showBanner={pathname === '/'}
      />
      <Content>{children}</Content>
      <Footer />
      <Toaster />
    </Container>
  );
}
