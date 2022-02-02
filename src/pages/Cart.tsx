import { useContext } from 'react';

import { CartContext } from '../context';

export const Cart = () => {
  const { selectedProducts } = useContext(CartContext);
  return <pre>{JSON.stringify(selectedProducts, null, 2)}</pre>;
}
