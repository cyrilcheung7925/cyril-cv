import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", "sans-serif"',
    h1: {
      fontSize: '4rem',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      color: '#2F2E2E',
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 300,
      letterSpacing: '-0.01em',
      color: '#2F2E2E',
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 300,
      color: '#2F2E2E',
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: '#2F2E2E',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.7,
      color: '#5E5E5E',
      fontFamily: '"Montserrat", "sans-serif"',
      fontOpticalSizing: 'auto',
      fontStyle: 'normal'
    },
    body2: {
      fontSize: '0.95rem',
      fontWeight: 300,
      lineHeight: 1.6,
      color: '#757575',
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 300,
      color: '#2F2E2E',
    },
    subtitle2: {
      fontSize: '0.9rem',
      fontWeight: 300,
      color: '#757575',
    },
  },
  palette: {
    primary: {
      main: '#116DFF',
      light: '#4A90E2',
      dark: '#0D47A1',
    },
    secondary: {
      main: '#2F2E2E',
      light: '#5E5E5E',
      dark: '#1A1A1A',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2F2E2E',
      secondary: '#5E5E5E',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#E0E0E0',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '8px 0',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: 300,
          color: '#5E5E5E',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#116DFF',
          textDecoration: 'none',
          fontWeight: 300,
          '&:hover': {
            color: '#4A90E2',
          },
        },
      },
    },
  },
}); 