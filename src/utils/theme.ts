import { createTheme } from '@mui/material';

export const fontFamily = {
  fontFamily: ['IBM Plex Mono', 'Roboto', '"Helvetica Neue"'].join(','),
};

export const appTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#69C0FF',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    ...fontFamily,
  },
});
