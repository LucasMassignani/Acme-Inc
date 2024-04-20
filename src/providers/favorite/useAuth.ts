import { useContext } from 'react';

import FavoriteContext from './FavoriteContext';

function useFavorite() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useFavorite must be used within an FavoriteProvider');
  }

  return context;
}

export default useFavorite;
