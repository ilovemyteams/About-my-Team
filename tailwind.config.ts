import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            xs: "12px",
            sm: "014px",
            base: "16px",
            baseb: [
                "16px",
                {
                    fontWeight: "700",
                },
            ],
            lg: [
                "18px",
                {
                    fontWeight: "700",
                },
            ],
            xl: "20px",
            xlb: [
                "20px",
                {
                    fontWeight: "700",
                },
            ],
            "2xl": [
                "24px",
                {
                    fontWeight: "700",
                },
            ],
            "4xl": [
                "40px",
                {
                    lineHeight: "52px",
                    fontWeight: "700",
                },
            ],
            "5xl": [
                "48px",
                {
                    lineHeight: "48px",

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
