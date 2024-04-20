'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthProvider from '@/providers/auth';
import CartProvider from '@/providers/cart';
import FavoriteProvider from '@/providers/favorite';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
