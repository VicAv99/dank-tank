import { Box, Container, Grid } from '@mui/material';
import { useContext } from 'react';

import { Product } from '../api-interfaces';
import { ProductCard } from '../components';
import { CartContext } from '../context';

export const Home = () => {
  const { addToCart, products } = useContext(CartContext);
  const addToCartClicked = (product: Product) => addToCart(product);

  return (
    <Container>
      <Box my={10}>
        <Grid container spacing={2}>
          {
            !!products && products?.map((product) => (
              <Grid key={product.product_id} item>
                <ProductCard product={product} onAddToCart={addToCartClicked} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Container>
  );
}
