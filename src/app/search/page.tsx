'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { List } from '@/components/List';
import { Loader } from '@/components/Loader';
import { Pagination } from '@/components/Pagination';
import { api } from '@/fakeapi';

const FIRST_PAGE = 0;
const PAGE_LIMIT = 9;

export default function Search() {
  const searchParams = useSearchParams();

  const search = searchParams.get('query') || '';

  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    setPage(0);
  }, [search]);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products', search, page],
    queryFn: async () => {
      const values = await api.getProducts({
        filter: search,
        page: page,
        limit: PAGE_LIMIT,
      });

      return values;
    },
    staleTime: Infinity,
  });

  return (
    <main>
      {!isLoading && products ?
        <List
          title={search ? `Sua busca por ${search}` : 'Produtos'}
          products={products}
        />
      : <Loader />}
      <Pagination
        page={page}
        haveNextPage={products ? products.length >= PAGE_LIMIT : false}
        addPage={() => {
          document.body.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          if (products) {
            setPage((state) =>
              products.length >= PAGE_LIMIT ? state + 1 : state,
            );
          }
        }}
        subPage={() => {
          document.body.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          setPage((state) => (state > FIRST_PAGE ? state - 1 : FIRST_PAGE));
        }}
      />
    </main>
  );
}
