import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1c1e21', // var(--grey-900)
            paper: '#31363F',   // var(--grey-medium)
        },
        primary: {
            main: '#61dafb',    // var(--blue)
        },
        text: {
            primary: '#EEEEEE', // var(--grey-light)
            secondary: '#EEEEEE', // var(--grey-light)
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#EEEEEE', // var(--grey-light)
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#61dafb', // var(--blue)
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#61dafb', // var(--blue)
                    },
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                tag: {
                    backgroundColor: '#31363F', // var(--grey-medium)
                    color: '#EEEEEE', // var(--grey-900)
                },
                clearIndicator: {
                    color: '#EEEEEE', // var(--grey-light)
                },
                popupIndicator: {
                    color: '#EEEEEE', // var(--grey-light)
                },
            },
        },
    },
});