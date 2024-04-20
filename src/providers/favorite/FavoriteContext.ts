import { createContext } from 'react';

import FavoriteContextDTO from './dtos/FavoriteContextDTO';

const FavoriteContext = createContext<FavoriteContextDTO>(
  {} as FavoriteContextDTO,
);

export default FavoriteContext;
