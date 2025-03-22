import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Pizzas</Typography>
        <Typography>Soft drinks</Typography>
        <Typography>Custom pizza</Typography>
      </Toolbar>
    </AppBar>
  );
}
