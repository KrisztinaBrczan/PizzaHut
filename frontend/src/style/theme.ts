'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      //main: '#4caf50',
      main: '#c62828',
    },
    secondary: {
      // main: '#f44336', //red
      //main: '#fff', //white
      main: '#E8807D', //pinkish
    },
    background: {
      paper: '#fafafa',
      default: '#e8f5e9',
    },
    error: {
      main: '#d50000',
    },

    success: {
      main: '#388e3c',
    },

    warning: {
      main: '#ff9800',
    },
  },
});

export default theme;
