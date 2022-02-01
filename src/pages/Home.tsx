import { Box, Container, Grid } from '@mui/material';

import { fetchProducts, Product } from '../api-interfaces/client';
import { ProductCard } from '../components';
import { useAsync } from '../hooks';

export const Home = () => {
  const { value: products } = useAsync<Product[]>(fetchProducts);

  return (
    <Container>
      <Box my={10}>
        <Grid container spacing={2}>
          {
            !!products && products?.map((product) => (
              <Grid key={product.product_id} item>
                <ProductCard product={product} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Container>
  );
}
