module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#222222",
                "dark-accent": "#141414",
                leaf: "#36452C",
            },
            fontFamily: {
                "space-grotesk": "'Space Grotesk', sans-serif;",
                raleway: "'Raleway', sans-serif;",
            },
            animation: {
                "spin-slow": "spin 5s linear infinite",
            },
        },
    },
    plugins: [],
};
