import { createContext } from 'react';

import CartContextDTO from './dtos/CartContextDTO';

const CartContext = createContext<CartContextDTO>({} as CartContextDTO);

export default CartContext;
