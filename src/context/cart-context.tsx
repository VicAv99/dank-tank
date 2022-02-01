import { createContext, PropsWithChildren } from 'react';

import { Product } from '../api-interfaces';
import { useCartContext } from '../hooks';

interface CartState {
  products?: Product[];
}

export const CartContext = createContext<CartState>({
  products: undefined,
});

export const CartProvider = ({ children }: PropsWithChildren<unknown>) => {
  const cart = useCartContext();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
