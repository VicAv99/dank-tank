import { Box, Container, Grid, TextField } from '@mui/material';
import { Fragment, useContext, useState } from 'react';

import { Product } from '../api-interfaces';
import { ProductCard } from '../components';
import { CartContext } from '../context';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart, products } = useContext(CartContext);
  const addToCartClicked = (product: Product) => addToCart(product);
  const searchTermIncluded = (product: Product) => product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);

  const onSearchChange = (e: any) => {
    const searchTerm = e.target.value;
    e.preventDefault();
    setSearchTerm(searchTerm.toLowerCase());
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap' }} my={5}>
        <TextField onChange={onSearchChange} name="search" size='small' fullWidth sx={{ marginRight: 1 }} label="Search by Name or Description" variant="outlined" />
      </Box>
      <Box my={5}>
        <Grid container spacing={2}>
          {
            !!products && products?.map((product) => (
              <Fragment key={product.product_id}>
                {searchTermIncluded(product) && (
                  <Grid item>
                    <ProductCard product={product} onAddToCart={addToCartClicked} />
                  </Grid>
                )}
              </Fragment>
            ))
          }
        </Grid>
      </Box>
    </Container >
  );
}
