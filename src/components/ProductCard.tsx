import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { Product } from '../api-interfaces';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card sx={{ width: 250, height: "auto" }}>
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
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  )
}
