'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#f44336',
    },
    background: {
      paper: '#fafafa',
      default: '#e8f5e9',
    },
    error: {
      main: '#d50000',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
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
