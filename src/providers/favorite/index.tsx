'use client';

import React from 'react';

import { ProductDTO } from '@/dtos/ProductDTO';
import { api } from '@/fakeapi';

import FavoriteContext from './FavoriteContext';

const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = React.useState<ProductDTO[]>([]);

  React.useEffect(() => {
    api.getFavoriteProducts().then((values) => {
      setFavorites(values);
    });
  }, []);

  const isFavorite = (productId: string) => {
    return !!favorites.find((product) => product.id === productId);
  };

  const toggleFavorite = (product: ProductDTO) => {
    api.toggleProductFavorite(product.id);

    setFavorites((state) => {
      const productCartIndex = state.findIndex(
        (findProduct) => findProduct.id === product.id,
      );

      if (productCartIndex < 0) {
        return [...state, product];
      } else {
        return state.filter((filterProduct) => filterProduct.id !== product.id);
      }
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
