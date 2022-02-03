import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { Product } from '../api-interfaces';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const addToCartClicked = () => onAddToCart(product);

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.image_urls[0]}
        alt={product.name}
      />
      <CardContent sx={{ height: 140, overflow: "hidden", textOverflow: 'ellipsis' }}>
        <Typography noWrap variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">{product.brand}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button data-testid={`${product.product_id}-button`} onClick={addToCartClicked} size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  )
}
