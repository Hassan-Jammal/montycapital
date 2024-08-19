const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                primary: '#FFFFFF',
                secondary: '#00DFDF',
                tertiary: '#47FDA5',
                quaternary: '#0F0C22',
            },
            fontFamily: {
                'Karla-Regular': ['Karla-Regular'],
                'Karla-Medium': ['Karla-Medium'],
                'Karla-Bold': ['Karla-Bold'],
                'Karla-ExtraBold': ['Karla-ExtraBold'],
            },
            screens: {
                '2xl': '1536px',
                '3xl': '1792px',
                '4xl': '2048px',
                '5xl': '2304px',
                '6xl': '2688px',
                '7xl': '3072px',
                '8xl': '3584px',
                '9xl': '4096px',
            },
        }
    },
    important: true,
}