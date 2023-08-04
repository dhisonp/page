/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontWeight: {
            regular: 400,
            medium: 600,
            bold: 700,
        },
        fontStyle: {
            italic: "italic",
        },
        extend: {
            extend: {
                overscrollBehavior: ["none"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["var(--font-barlow)"],
                serif: ["var(--font-source-serif)"],
                // mono: ["var(--font-jetbrains-mono)"],
            },
        },
    },
    plugins: [],
};
