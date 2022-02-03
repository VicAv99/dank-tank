import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { Product } from './api-interfaces';
import { CartContext, CartState } from './context';
import { Cart, Home } from './pages';

/**
 * We should test that following requirements are met.
 *
 * 1. Customer should be presented with a list of products on app load.
 *
 * 2. When a customer types in a search box some text, the product
 *    results should filter to display only items with a name
 *    or description matching that text.
 *
 * 3. Customer should be able to add a product to their cart.
 *
 * 4. Customer should be able to remove a product from their cart.
 *
 */

const createProduct = (index: number): Product => ({
  product_id: index,
  name: `Test Product${index}`,
  description: `Description${index}`,
  brand: '',
  image_urls: ['']
} as Product);

const contextState: CartState = {
  products: [
    createProduct(1),
    createProduct(2),
  ],
  selectedProducts: [createProduct(3)],
  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  clearCart: jest.fn(),
  cartCount: 0
}

const renderWithProviders = (Component) => {
  const Wrapper = ({ children }) => <BrowserRouter><CartContext.Provider value={contextState}>{children}</CartContext.Provider></BrowserRouter>;

  return render(
    <Component />,
    { wrapper: Wrapper }
  );
}

test('Customer should be presented with a list of products on app load.', () => {
  renderWithProviders(Home);
  const productsContainer = screen.getByTestId('products-list-grid');
  const products = contextState.products?.map((product) => screen.getByTestId(product.product_id));

  expect(productsContainer).toBeInTheDocument();
  expect(products?.length).toBe(contextState.products?.length);
});

test('When a customer types in a search box some text, the product results should filter to display only items with a name or description matching that text.', () => {
  renderWithProviders(Home);
  const products = screen.getByTestId("products-list-grid");
  const inputEl = screen.getByLabelText("Search by Name or Description");

  userEvent.type(inputEl, 'Product1');

  expect(inputEl).toHaveValue('Product1');
  expect(products?.children.length).toBe(1);
});

test('Customer should be able to add a product to their cart.', () => {
  renderWithProviders(Home);

  // product-add-to-cart-{id}
  const firstProduct = screen.getByTestId("1-button");

  userEvent.click(firstProduct);

  expect(contextState.addToCart).toHaveBeenCalledTimes(1);
  expect(contextState.addToCart).toHaveBeenCalledWith(contextState.products?.[0] ?? []);
});

test('Customer should be able to remove a product from their cart.', () => {
  renderWithProviders(Cart);

  const firstProduct = screen.getByTestId("delete-item-3");

  userEvent.click(firstProduct);

  expect(contextState.removeFromCart).toHaveBeenCalledTimes(1);
  expect(contextState.removeFromCart).toHaveBeenCalledWith(contextState.selectedProducts?.[0] ?? []);
});
