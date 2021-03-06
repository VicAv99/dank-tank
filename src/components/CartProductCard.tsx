import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Box, Card, CardHeader, IconButton, Typography } from '@mui/material';

import { Product } from '../api-interfaces';

interface CartProductCardProps {
  product: Product;
  onRemoveProductClicked?: (product: Product) => void;
}

export const CartProductCard = ({ product, onRemoveProductClicked }: CartProductCardProps) => {
  const removeProductClicked = () => onRemoveProductClicked?.(product);

  return (
    <Card key={product.product_id} sx={{ marginBottom: 1 }}>
      <CardHeader
        sx={{ "& .MuiCardHeader-content": { overflow: "hidden" } }}
        avatar={
          <img width={50} height={50} src={product.image_urls[0]} alt={product.name} />
        }
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="overline" component="h4">
              ${product.sort_price}
            </Typography>
            <IconButton data-testid={`cart-item-delete-button-${product.product_id}`} onClick={removeProductClicked} color="error">
              <ClearOutlinedIcon />
            </IconButton>
          </Box>
        }
        title={<Typography noWrap variant="h6" component="h4">{product.name}</Typography>}
        subheader={<Typography gutterBottom noWrap variant="caption" component="h4">{product.description}</Typography>}
      />
    </Card>
  );
}
