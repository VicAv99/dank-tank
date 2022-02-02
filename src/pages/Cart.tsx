import { Container, Grid } from '@mui/material';
import { useContext } from 'react';

import { CartProductCard } from '../components';
import { CartSummary } from '../components/CartSummary';
import { CartContext } from '../context';


export const Cart = () => {
  const { selectedProducts } = useContext(CartContext);

  return (
    <Container>
      <Grid my={5} container spacing={2}>
        <Grid item xs={8}>
          {selectedProducts?.map((product) => <CartProductCard key={product.product_id} product={product} />)}
        </Grid>
        <Grid item xs={4}>
          <CartSummary selectedProducts={selectedProducts ?? []} />
        </Grid>
      </Grid>
    </Container>
  );
}
