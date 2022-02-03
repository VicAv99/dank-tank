import { Box, Container, Grid, TextField } from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';

import { Product } from '../api-interfaces';
import { ProductCard } from '../components';
import { CartContext } from '../context';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart, products } = useContext(CartContext);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const addToCartClicked = (product: Product) => addToCart(product);

  const filterProducts = useCallback(() => {
    if (searchTerm) {
      const filteredProducts = products?.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    };
  }, [products, searchTerm]);

  useEffect(filterProducts, [filterProducts]);

  const onSearchChange = (e: any) => {
    const searchTerm = e.target.value;
    e.preventDefault();
    setSearchTerm(searchTerm.toLowerCase());
  }

  return (
    <Container>
      <Box sx={{ display: 'flex', flexWrap: 'nowrap' }} my={5}>
        <TextField data-testid="dank-search-input" onChange={onSearchChange} name="search" size='small' fullWidth label="Search by Name or Description" variant="outlined" />
      </Box>
      <Box my={5}>
        {!!filteredProducts?.length && <Grid data-testid="products-list-grid" container spacing={2}>
          {
            !!filteredProducts && filteredProducts?.map((product) => (
              <Grid key={product.product_id} data-testid={product.product_id} item xs={12} sm={6} md={3}>
                <ProductCard product={product} onAddToCart={addToCartClicked} />
              </Grid>
            ))
          }
        </Grid>}
      </Box>
    </Container >
  );
}
