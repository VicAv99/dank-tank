import { Container, Grid } from '@mui/material';
import { useContext } from 'react';

import { CartProductCard, CartSummary } from '../components';
import { CartContext } from '../context';


export const Cart = () => {
  const { selectedProducts, clearCart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <Grid my={5} container spacing={2}>
        <Grid item xs={8}>
          {selectedProducts?.map((product) => <CartProductCard key={product.product_id} onRemoveProductClicked={removeFromCart} product={product} />)}
        </Grid>
        <Grid item xs={4}>
          <CartSummary onClearCart={clearCart} selectedProducts={selectedProducts ?? []} />
        </Grid>
      </Grid>
    </Container>
  );
}
