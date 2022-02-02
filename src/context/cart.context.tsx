import { createContext, PropsWithChildren } from 'react';

import { Product } from '../api-interfaces';
import { useCartContext } from '../hooks';

export interface CartState {
  products?: Product[];
  selectedProducts?: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
  cartCount: number;
}

export const CartContext = createContext<CartState>({
  products: [],
  selectedProducts: [],
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
  cartCount: 0
});

export const CartProvider = ({ children }: PropsWithChildren<unknown>) => {
  const cart = useCartContext();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
