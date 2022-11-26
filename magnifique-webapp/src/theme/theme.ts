import { extendTheme, InputElementProps, TextProps } from '@chakra-ui/react';


const breakpoints = {
    xs: '280px',
    sm: '320px',
    md: '480px',
    lg: '960px',
    xl: '1280px',
    '2xl': '1536px'
}

export const maxWidth = '1280px;'

export const fontsStyles = {
    h1: {
        fontWeight: 'normal',
        textAlign: 'center',
        lineHeight: '120%',
        maxW: '600px',
        w: '100%',
        fontSize: {
            base: '2.5rem',
            sm: '2rem',
            md: '2.5rem',
            lg: '2.5rem',
            xl: '2.5rem',
            '2xl': '2.5rem'
        },
    } as TextProps,
    h2: {
        fontWeight: 'normal',
        textAlign: 'center',
        lineHeight: '110%',
        w: '100%',
        maxW: '600px',
        fontSize: {
            base: '2rem',
            sm: '1.5rem',
            md: '2rem',
            lg: '2rem',
            xl: '2rem',
            '2xl': '2rem'
        },
    } as TextProps,
    h3: {
        fontWeight: 'normal',
        textAlign: 'center',
        lineHeight: '110%',
        w: '100%',
        maxW: '600px',
        fontSize: {
            base: '1.75rem',
            sm: '1.5rem',
            md: '1.75rem',
            lg: '1.75rem',
            xl: '1.75rem',
            '2xl': '1.75rem'
        },
    } as TextProps,
    h4: {
        fontWeight: 'normal',
        textAlign: 'center',
        lineHeight: '110%',
        w: '100%',
        maxW: '600px',
        fontSize: {
            base: '1.5rem',
            sm: '1.25rem',
            md: '1.5rem',
            lg: '1.5rem',
            xl: '1.5rem',
            '2xl': '1.5rem'
        },
    } as TextProps,
    h5: {
        fontWeight: 'light',
        textAlign: 'center',
        lineHeight: '110%',
        w: '100%',
        maxW: '600px',
        fontSize: {
            base: '1.25rem',
            sm: '1rem',
            md: '1.25rem',
            lg: '1.25rem',
            xl: '1.25rem',
            '2xl': '1.25rem'
        },
    } as TextProps,
    p: {
        fontWeight: 'thin',
        textAlign: 'left',
        lineHeight: '110%',
        w: '100%',
        fontSize: {
            base: '1rem',
            sm: '1rem',
            md: '1rem',
            lg: '1rem',
            xl: '1rem',
            '2xl': '1rem'
        },
    } as TextProps,
    span: {
        fontWeight: 'thin'
    } as TextProps,
}

const grayScale = {
    "900": "#181b23",
    "800": "#1f2029",
    "700": "#353646",
    "600": "#4b4d63",
    "500": "#616480",
    "400": "#797D9A",
    "300": "#9699B0",
    "200": "#B3B5C6",
    "100": "#D1D2DC",
    "75": "#D9D9D9",
    "50": "#EEEEF2"
}

const components = {
    a: {
        'text-decoration': 'none'
    },
    img: {
        'pointer-events': 'none',
        'user-select': 'none'
    }
}


export const theme = extendTheme({
    colors: {
        gray: grayScale,
        mag: {
            primary: '#a71f13',
            secondary: '#d88b79',
            primaryDark: '#a7382d',
            light: '#f3ece4',
            brown: '#d9b6a3'
        }
    },
    fonts: {
        heading: 'Lora, sans-serif',
        body: 'Lora, sans-serif'
    },
    styles: {
        global: {
            body: {
                margin: 0,
                boxSizing: 'border-box',
                color: 'mag.primary',
                bg: 'mag.light',
                CSS: {
                    'WebkitFontSmoothing': 'antialiased',
                },
                ...fontsStyles
            },
        }
    },
    breakpoints: breakpoints,
    components: components
});