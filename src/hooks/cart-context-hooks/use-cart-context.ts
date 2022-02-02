import { useReducer } from 'react';

import { Product } from '../../api-interfaces';

enum CartActions {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CLEAR_CART = "CLEAR_CART",
}

export const useCartContext = () => {
  const initialState = {
    products: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

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
    cartCount: state.products.length,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case CartActions.ADD_TO_CART: {
      return {
        ...state,
        products: [...(state.products ?? []), action.payload],
      };
    }
    case CartActions.REMOVE_FROM_CART: {
      return {
        ...state,
        products: state.products?.filter((product) => {
          return product.product_id === action.product.id;
        }),
      };
    }
    case CartActions.CLEAR_CART: {
      return {
        ...state,
        products: [],
      };
    }
    default:
      return state;
  }
};
