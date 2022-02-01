import { useState } from 'react';

export const useCartContext = () => {
  const [products, setProducts] = useState([]);

  return { products };
};
