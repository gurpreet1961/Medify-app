import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: "Poppins, 'Open Sans','Helvetica Neue',Arial, sans- serif",
    },
    palette: {
        primary: {
            main: '#2BA8FE',
            green: '#00A500',
            secondary: '#1B3C74'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    textTransform: 'none',
                },
                contained: {
                    color: "#fff",
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    width: '90%',
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    color: '#000000',
                    fontSize: '53px',
                    fontWeight: '650'
                },
                h2: {
                    color: "#1B3C74",
                    fontWeight: '550',
                    fontSize: '44px',
                    lineHeight: 1.1
                },
                h3: {
                    color: '#102851',
                    fontSize: '32px',
                    fontWeight: '500'
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    background: '#FAFBFE',
                    borderRadius: '8px',
                    color: '#ABB6C7',
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    background: '#FAFBFE',
                    borderRadius: '8px',
                    color: '#ABB6C7',

                }
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    }
})

theme.typography.h2 = {
    [theme.breakpoints.down('sm')]: {
        fontSize: '32px'
    }
}

theme.typography.h1 = {
    [theme.breakpoints.down('sm')]: {
        fontSize: '36px'
    }
}

theme.typography.h3 = {
    [theme.breakpoints.down('sm')]: {
        fontSize: '22px'
    }
}