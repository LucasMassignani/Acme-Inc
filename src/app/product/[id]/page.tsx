'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react';

import { List } from '@/components/List';
import { Loader } from '@/components/Loader';
import { ProductDetail } from '@/components/ProductDetail';
import { api } from '@/fakeapi';

export default function Search() {
  const { id } = useParams<{ id: string }>();

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const value = await api.getProductById(id);

      return value;
    },
    staleTime: Infinity,
  });

  const {
    data: recommendations,
    isLoading: recommendationsIsLoading,
    isError: recommendationsIsError,
  } = useQuery({
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
      {!isLoading && product ?
        <ProductDetail product={product} />
      : <Loader />}

      {!recommendationsIsLoading && !recommendationsIsError ?
        <List
          title="Recomendados"
          products={recommendations!}
        />
      : !isLoading && <Loader />}
    </main>
  );
}
