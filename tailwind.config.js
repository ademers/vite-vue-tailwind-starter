module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
}
