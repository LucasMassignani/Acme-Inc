'use client';

import React from 'react';

import { CheckoutDTO } from '@/dtos/CheckoutDTO';
import { ProductDTO } from '@/dtos/ProductDTO';
import { api } from '@/fakeapi';

import { navigate } from './actions';
import CartContext from './CartContext';

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = React.useState<CheckoutDTO[]>([]);

  React.useEffect(() => {
    api.getCartProducts().then((values) => {
      setCart(values);
    });
  }, []);

  const addProduct = (product: ProductDTO) => {
    api.addProduct(product.id);

    setCart((state) => {
      const productCartIndex = state.findIndex(
        ({ product: { id } }) => id === product.id,
      );

      if (productCartIndex < 0) {
        return [
          ...state,
          {
            product,
            quantity: 1,
          },
        ];
      } else {
        const newCart: CheckoutDTO[] = [
          ...state.slice(0, productCartIndex),
          {
            product: product,
            quantity: state[productCartIndex].quantity + 1,
          },
          ...state.slice(productCartIndex + 1),
        ];

        return newCart;
      }
    });
  };

  const removeProduct = ({ id }: ProductDTO) => {
    api.removeProduct(id);

    setCart((state) => {
      return state.filter((product) => product.product.id !== id);
    });
  };

  const removeQuantity = (product: ProductDTO) => {
    api.removeQuantity(product.id);

    setCart((state) => {
      const productCartIndex = state.findIndex(
        ({ product: { id } }) => id === product.id,
      );

      if (productCartIndex < 0) {
        return state;
      } else {
        const newCart: CheckoutDTO[] = [
          ...state.slice(0, productCartIndex),
          {
            product: product,
            quantity:
              cart[productCartIndex].quantity > 1 ?
                state[productCartIndex].quantity - 1
              : 1,
          },
          ...state.slice(productCartIndex + 1),
        ];

        return newCart;
      }
    });
  };

  const finishPurchase = () => {
    api.finishPurchase();
    setCart([]);
    navigate();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        removeQuantity,
        finishPurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
