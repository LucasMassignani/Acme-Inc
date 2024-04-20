'use client';

import { useQuery } from '@tanstack/react-query';
import React from 'react';

import { List } from '@/components/List';
import { Loader } from '@/components/Loader';
import { StyledSection } from '@/components/Section/styles';
import { api } from '@/fakeapi';

export default function Home() {
  const { data: recommendations, isLoading } = useQuery({
    queryKey: ['recommendations'],
    queryFn: async () => {
      const values = await api.getProducts({
        page: 0,
        limit: 3,
      });

      return values;
    },
    staleTime: Infinity,
  });

  return (
    <main>
      <StyledSection>
        {!isLoading && recommendations ?
          <List
            title="Recomendados"
            products={recommendations}
          />
        : <Loader />}
      </StyledSection>
    </main>
  );
}
