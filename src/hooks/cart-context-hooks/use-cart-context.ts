import { useEffect, useReducer } from 'react';

import { useAsync } from '..';
import { fetchProducts, Product } from '../../api-interfaces';

enum CartActions {
  INIT_PRODUCTS = "INIT_PRODUCTS",
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export const useCartContext = () => {
  const { value: products } = useAsync<Product[]>(fetchProducts);
  const initialState = {
    products: [],
    selectedProducts: [],
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    if (!products) return;
    dispatch({
      type: CartActions.INIT_PRODUCTS,
      payload: products,
    });
  }, [products]);

  const addToCart = (product: Product) => {
    dispatch({
      type: CartActions.ADD_TO_CART,
      payload: product,
    });
  };

  const removeFromCart = (product: Product) => {
    dispatch({
      type: CartActions.REMOVE_FROM_CART,
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: CartActions.CLEAR_CART,
    });
  };

  return {
    ...state,
    cartCount: state.selectedProducts?.length,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

const CartReducer = (state, action) => {
  const filterProduct = (product) => {
    return product.product_id !== action.payload.product_id;
  };

  switch (action.type) {
    case CartActions.INIT_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case CartActions.ADD_TO_CART: {
      return {
        ...state,
        products: state.products.filter(filterProduct),
        selectedProducts: [...(state.selectedProducts ?? []), action.payload],
      };
    }
    case CartActions.REMOVE_FROM_CART: {
      return {
        ...state,
        products: [...state.products, state.selectedProduct],
        selectedProducts: state.selectedProducts?.filter(filterProduct),
      };
    }
    case CartActions.CLEAR_CART: {
      return {
        ...state,
        selectedProducts: [],
      };
    }
    default:
      return state;
  }
};
