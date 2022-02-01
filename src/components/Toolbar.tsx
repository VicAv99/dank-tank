import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Box, Button, Toolbar as MuiToolbar, Typography } from '@mui/material';

export const Toolbar = () => {
  return (
    <AppBar position="static">
      <MuiToolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Dank Tank
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" color="secondary">
          <ShoppingCartIcon />
        </Button>
      </MuiToolbar>
    </AppBar>
  )
}
