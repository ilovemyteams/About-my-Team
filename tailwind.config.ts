import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "16px",
                tab: "24px",
                pc: "60px",
            },
        },
        screens: {
            tab: "768px",
            pc: "1280px",
            desk: "1536px",
        },
        fontSize: {
            xs: [
                "12px",
                {
                    lineHeight: "15px",
                },
            ],
            sm: [
                "14px",
                {
                    lineHeight: "17px",
                },
            ],
            base: [
                "16px",
                {
                    lineHeight: "20px",
                },
            ],
            baseb: [
                "16px",
                {
                    lineHeight: "20px",
                    fontWeight: "700",
                },
            ],
            lg: [
                "18px",
                {
                    lineHeight: "23px",
                    fontWeight: "700",
                },
            ],

            xl: [
                "20px",
                {
                    lineHeight: "25px",
                },
            ],

            xlb: [
                "20px",
                {
                    lineHeight: "25px",
                    fontWeight: "700",
                },
            ],
            "2xl": [
                "24px",
                {
                    lineHeight: "30px",
                    fontWeight: "700",
                },
            ],
            "3xl": [
                "28px",
                {
                    lineHeight: "35px",
                    fontWeight: "700",
                },
            ],
            "4xl": [
                "32px",
                {
                    lineHeight: "32px",
                    fontWeight: "700",
                },
            ],

            "5xl": [
                "40px",
                {
                    lineHeight: "52px",
                    fontWeight: "700",
                },
            ],
            "6xl": [
                "48px",
                {
                    lineHeight: "48px",

                    fontWeight: "700",
                },
            ],
        },
        extend: {
            variants: {
                height: ["responsive", "hover", "focus"],
            },
            width: {
                "80": "calc(100vw - 80px)",
                portfolioHeroCard: "calc(100vw - 32px)",
            },
            height: {
                "80": "calc(100dvh - 80px)",
            },
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
                    100: "#A258FF",
                    200: "#1F0033",
                    300: "#54148A",
                    400: "#09002E",
                    stroke: "#5F3F87",
                    stroke03: "rgba(162, 88, 255, 0.3)",
                    dark: "#3C1E63",
                },
                white: "#FBF8FF",
                black: "#000000",
                grey: "#D4D4D4",
                red: "#FB7185",
            },
            fill: {
                stroke: "#5F3F87",
            },
            content: {
                heart: 'url("/images/Heart.svg")',
                triangles: 'url("/images/Triangles.svg")',
            },
            keyframes: {
                pulsation: {
                    "0%": {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                    "10%, 20%, 35%, 45%": {
                        transform: "scale(0.7)",
                        opacity: "0",
                    },
                    "25%, 50%": {
                        transform: "scale(1)",
                        opacity: "1",
                    },
                },
                brokenHeart: {
                    "0%": {
                        transform:
                            "rotate(0deg) translateX(29) translateY(-7px)",
                    },
                    "10%": {
                        transform:
                            "rotate(-10deg) translateX(20px) translateY(-7px)",
                    },
                    "20%": {
                        transform:
                            "rotate(-15deg) translateX(15px) translateY(-7px)",
                    },
                    "30%": {
                        transform:
                            "rotate(-25deg) translateX(10px) translateY(-2px)",
                    },
                    "40%": {
                        transform:
                            "rotate(-30deg) translateX(5px) translateY(0px)",
                    },

                    "60%": {
                        transform:
                            "rotate(-35deg) translateX(0px) translateY(0px)",
                    },
                    // "80%": {
                    //     transform:
                    //         "rotate(-35deg) translateX(-2px) translateY(4px)",
                    // },

                    "100%": {
                        transform:
                            "rotate(-50deg) translateX(-24px) translateY(14px)",
                    },
                    // "20%": {
                    //     transform:
                    //         "rotate(-10deg) translateX(-12px) translateY(-4px)",
                    // },

                    // "40%": {
                    //     transform:
                    //         "rotate(-30deg) translateX(-20px) translateY(8px)",
                    // },
                    // "50%": {
                    //     transform:
                    //         "rotate(-35deg) translateX(-25px) translateY(10px)",
                    // },
                    // translateX(-40px)
                    // "100%": {
                    //     transform:
                    //         "rotate(-50deg) translateX(-50px) translateY(-8px)",
                    // },
                },
            },
            animation: {
                pulsation: "pulsation 1200ms ease-in 2",
                brokenHeart: "brokenHeart 3000ms ease-in",
            },
        },
        backgroundImage: {
            portfolioGradient:
                "linear-gradient(to right, #1E003D 0% , #3C0566 50%, #6607B1 100%)",
            portfolioSectionGradient:
                "linear-gradient(to left, #1E003D 0% , #3C0566 50%, #6607B1 100%)",

            CTAGradient:
                "linear-gradient(to right, #6607B1 0% , #3C0566 50%, #1E003D 100%)",
            feedbackMobCardGradient:
                "linear-gradient(to right, #1E003D99 0% , #3C056699 50%, #6607B199 100%)",
        },
    },
    plugins: [],
};
export default config;
