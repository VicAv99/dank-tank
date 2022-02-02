import { Box, Container, Grid, Snackbar, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartProductCard, CartSummary } from '../components';
import { CartContext } from '../context';


export const Cart = () => {
  const { selectedProducts, clearCart, removeFromCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const handleClearCart = () => {
    clearCart();
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <Grid my={5} container spacing={2}>
        <Grid item order={{ xs: 2, sm: 1 }} xs={12} sm={6} md={8}>
          {!selectedProducts?.length && (
            <Box>
              <Typography variant="body1">
                Looks like you haven't selected any products or just made a purchase.
              </Typography>
              <Typography variant="body1">Please go <Link to="/">home</Link> and choose some dank stuff.</Typography>
            </Box>
          )}

          {!!selectedProducts?.length && (selectedProducts?.map((product) => (
            <CartProductCard key={product.product_id} onRemoveProductClicked={removeFromCart} product={product} />
          )))}
        </Grid>
        <Grid item order={{ xs: 1, sm: 2 }} xs={12} sm={6} md={4}>
          <CartSummary onClearCart={clearCart} onSubmitPurchase={handleClearCart} selectedProducts={selectedProducts ?? []} />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Order Placed!"
      />
    </Container>
  );
}
