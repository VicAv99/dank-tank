import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material';

import { Product } from '../api-interfaces';

interface CartSummaryProps {
  selectedProducts: Product[];
}

export const CartSummary = ({ selectedProducts }: CartSummaryProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar variant="rounded">
            DT
          </Avatar>
        }
        title="Cart Summary"
        subheader={new Date().toLocaleDateString()}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            Subtotal
          </Typography>
          <Typography variant="h6" component="div">
            $5.00
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            Sales Tax
          </Typography>
          <Typography variant="h6" component="div">
            $5.00
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Total
          </Typography>
          <Typography variant="h6" component="div">
            $10.00
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <CardActions>
        <Button fullWidth variant="contained" color="primary" size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}
