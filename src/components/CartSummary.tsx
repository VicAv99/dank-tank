import DeleteForeverIcon from '@mui/icons-material/DeleteForeverOutlined';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';

import { Product } from '../api-interfaces';

interface CartSummaryProps {
  selectedProducts: Product[];
  onClearCart?: () => void;
  onSubmitPurchase?: () => void;
}

export const CartSummary = ({ selectedProducts, onClearCart, onSubmitPurchase }: CartSummaryProps) => {
  const handleDecimal = (num: number) => parseFloat(num.toFixed(2));
  const selectedProductsTotal = handleDecimal(selectedProducts.reduce((prev, curr) => prev + curr.sort_price, 0));
  const salesTax = handleDecimal((selectedProductsTotal * 0.1));
  const cartTotal = handleDecimal((selectedProductsTotal + salesTax));
  const hasProductsSelected = !!selectedProducts.length;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        avatar={
          <Avatar variant="rounded">
            DT
          </Avatar>
        }
        action={
          <>
            {hasProductsSelected && <Tooltip title="Clear entire cart">
              <IconButton onClick={onClearCart} color="error">
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>}
          </>
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
            ${selectedProductsTotal}
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            Sales Tax
          </Typography>
          <Typography variant="h6" component="div">
            <Typography sx={{ color: 'gray' }} variant="subtitle2" component="span">{salesTax > 0 && `($${salesTax})`}</Typography> 10%
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Total
          </Typography>
          <Typography variant="h6" component="div">
            ${cartTotal}
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <CardActions>
        <Button disabled={!hasProductsSelected} onClick={onSubmitPurchase} fullWidth variant="contained" color="primary" size="small">Buy Now</Button>
      </CardActions>
    </Card>
  );
}
