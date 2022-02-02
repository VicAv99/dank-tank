import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Badge, BadgeProps, Box, IconButton, styled, Toolbar as MuiToolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { useCartCount } from '../hooks/cart-context-hooks/use-cart-count';

interface ToolbarProps {
  id: string;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const TextLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const Toolbar = ({ id }: ToolbarProps) => {
  const cartCount = useCartCount();

  return (
    <AppBar id={id} position="static">
      <MuiToolbar variant="dense">
        <TextLink to="/">
          <Typography variant="h6" color="inherit" component="div">
            Dank Tank
          </Typography>
        </TextLink>
        <Box sx={{ flexGrow: 1 }} />
        <Link to="/cart">
          <IconButton sx={{ margin: '5px 0' }} color="warning" aria-label="cart">
            <StyledBadge badgeContent={cartCount} color="secondary">
              <ShoppingCartIcon fontSize="medium" />
            </StyledBadge>
          </IconButton>
        </Link>
      </MuiToolbar>
    </AppBar>
  )
}
