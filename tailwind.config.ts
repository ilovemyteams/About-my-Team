import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { nextui } from "@nextui-org/react";
import tailwindScrollbar from "tailwind-scrollbar";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
            deskxl: "1920px",
        },
        fontSize: {
            xxs: [
                "10px",
                {
                    lineHeight: "15px",
                },
            ],
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
                },
            ],
            "2xlb": [
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
            "7xl": [
                "64px",
                {
                    lineHeight: "64px",

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
                "120": "calc(100vw - 120px)",
                portfolioHeroCard: "calc(100vw - 32px)",
            },
            height: {
                "70": "calc(100dvh - 80px)",
                "80": "calc(100vh - 80px)",
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
                backdrop: "#030303",
                error: "#D60000",
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

                curveRotate: {
                    "0%, 3%": {
                        transform: "rotate(0deg)",
                    },
                    "35%, 38%": {
                        transform: "rotate(115deg)",
                    },
                    "62%, 83%": {
                        transform: "rotate(35deg)",
                    },
                    "100%": {
                        transform: "rotate(0deg)",
                    },
                },

                //broken heart for 404 page
                pulsationHeart: {
                    "0%": {
                        transform: "scale(1)",
                    },
                    "25%": {
                        transform: "scale(1.18)",
                    },
                    "50%": {
                        transform: "scale(1)",
                    },
                    "75%": {
                        transform: "scale(1.18)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
                brokenHeart: {
                    "0%": {
                        transform:
                            "rotate(0deg) translateX(29) translateY(-7px)",
                    },
                    "10%, 30%": {
                        transform:
                            "rotate(-3deg) translateX(27px) translateY(-7px) ",
                    },
                    "70%, 90%": {
                        transform:
                            "rotate(-30deg) translateX(5px) translateY(0px)",
                    },
                    "100%": {
                        transform:
                            "rotate(-55deg) translateX(-35px) translateY(7px)",
                    },
                },
                brokenHeartTablet: {
                    "0%": {
                        transform:
                            "rotate(0deg) translateX(56) translateY(-17.6px)",
                    },
                    "10%, 30%": {
                        transform:
                            "rotate(-3deg) translateX(50px) translateY(-17.6px) ",
                    },
                    "70%, 90%": {
                        transform:
                            "rotate(-30deg) translateX(5px) translateY(0px)",
                    },
                    "100%": {
                        transform:
                            "rotate(-55deg) translateX(-65px) translateY(15px)",
                    },
                },
                brokenHeartPC: {
                    "0%": {
                        transform:
                            "rotate(0deg) translateX(98) translateY(-26px)",
                    },
                    "10%, 30%": {
                        transform:
                            "rotate(-3deg) translateX(90px) translateY(-26px) ",
                    },
                    "70%, 90%": {
                        transform:
                            "rotate(-30deg) translateX(20px) translateY(0px)",
                    },
                    "100%": {
                        transform:
                            "rotate(-55deg) translateX(-120px) translateY(15px)",
                    },
                },
                rotate: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
            },
            animation: {
                pulsation: "pulsation 1200ms ease-in 2",
                pulsationBrokenHeart: "pulsationHeart 600ms ease-in 1",
                brokenHeart: "brokenHeart 3000ms ease-in forwards",
                brokenHeartTablet: "brokenHeartTablet 3000ms ease-in forwards",
                brokenHeartPC: "brokenHeartPC 3000ms ease-in forwards",
                rotation: "rotate 1800ms linear infinite",
                curveRotation: "curveRotate 3700ms ease-out 1",
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
    plugins: [
        nextui(),
        tailwindScrollbar({
            nocompatible: true,
            preferredStrategy: "pseudoelements",
        }),
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "animate-delay": value => ({
                        animationDelay: value,
                    }),
                },
                { values: theme("transitionDelay") }
            );
        }),
    ],
};
export default config;
