import { useContext } from 'react';

import { CartContext } from '../../context';

export const useCartCount = () => {
  return useContext(CartContext).cartCount;
};
