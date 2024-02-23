import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            xs: " 0.75rem",
            sm: "0.875rem",
            base: "1rem",
            baseb: [
                "1.0rem",
                {
                    fontWeight: "700",
                },
            ],
            lg: [
                "1.125rem",
                {
                    fontWeight: "700",
                },
            ],
            xl: "1.25rem",
            xlb: [
                "1.25rem",
                {
                    fontWeight: "700",
                },
            ],
            "2xl": [
                "1.5rem",
                {
                    fontWeight: "700",
                },
            ],
            "4xl": [
                "2.5rem",
                {
                    lineHeight: "3.25rem",
                    fontWeight: "700",
                },
            ],
            "5xl": [
                "3.0rem",
                {
                    lineHeight: "3.0rem",

                    fontWeight: "700",
                },
            ],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                geist: ["var(--font-geist)"],
                caviar: ["var(--font-caviar)"],
            },
            colors: {
                purple: {
                    50: "#BFB4FF",
                    200: "#1F0033",
                },
                white: "#FBF8FF",
                grey: "#D4D4D4",
            },
        },
    },

    plugins: [],
};
export default config;
