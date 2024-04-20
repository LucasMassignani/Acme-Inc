'use client';

import React from 'react';

import { List } from '@/components/List';
import useFavorite from '@/providers/favorite/useAuth';

export default function Search() {
  const { favorites } = useFavorite();

  return (
    <main>
      <List
        title="Favoritos"
        products={favorites}
      />
    </main>
  );
}
