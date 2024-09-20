import { nextui } from "@nextui-org/react";
import tailwindScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
                teamMob: "calc(50% - 16px)",
                teamTab: "calc(100% - 27vw - 12px)",
                teamPC: "calc(100% - 19vw - 24px)",
                teamDesk: "calc(100% - 286px - 24px)",
                teamDeskxl: "calc(100% - 232px - 24px)",
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
                    130: "#7424B7",
                    200: "#1F0033",
                    300: "#54148A",
                    400: "#09002E",
                    stroke: "#5F3F87",
                    strokeFormLabel: "#A088BF",
                    strokeFormLabelLight: "#B097CE",
                    strokeLight: "#C7C0F3",
                    stroke03: "rgba(162, 88, 255, 0.3)",
                    dark: "#3C1E63",
                },
                white: { 100: "#FFFFFF", 200: "#FBF8FF" },
                black: "#000000",
                grey: "#D4D4D4",
                greyLight: "#5C4E6D",
                red: "#FB7185",
                redLight: "#DE007F",
                disabledLight: "#B097CE",
                backdrop: "#030303",
                error: "#D60000",
            },
            fill: {
                stroke: "#5F3F87",
            },
            keyframes: {
                pulsation: {
                    "0%": {
                        transform: "scale(0.71)",
                    },
                    "5.88%": {
                        transform: "scale(1)",
                    },
                    "11.76%": {
                        transform: "scale(0.71)",
                    },
                    "17.64%": {
                        transform: "scale(1)",
                    },
                    "75%": {
                        transform: "scale(1)",
                    },
                    "80.88%": {
                        transform: "scale(0.71)",
                    },
                    "86.76%": {
                        transform: "scale(1)",
                    },
                    "92.64%": {
                        transform: "scale(0.71)",
                    },
                    "98.52%": {
                        transform: "scale(1)",
                    },
                    "100%": {
                        transform: "scale(1)",
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
                triangleRotate: {
                    "0%": {
                        transform: "rotate(0deg)",
                        animationDelay: "200ms",
                    },
                    "25%": {
                        transform: "rotate(75deg)",
                        animationDelay: "400ms",
                    },
                    "50%": {
                        transform: "rotate(30deg)",
                        animationDelay: "600ms",
                    },
                    "100%": {
                        transform: "rotate(0deg)",
                    },
                },
                trapezeRotate: {
                    "0%": {
                        transform: "rotate(0deg)",
                        animationDelay: "200ms",
                    },
                    "25%": {
                        transform: "rotate(-70deg)",
                        animationDelay: "400ms",
                    },
                    "50%": {
                        transform: "rotate(-30deg)",
                        animationDelay: "600ms",
                    },
                    "100%": {
                        transform: "rotate(0deg)",
                    },
                },
            },
            animation: {
                pulsation: "pulsation 2720ms ease-in 1",
                pulsationBrokenHeart: "pulsationHeart 600ms ease-in 1",
                brokenHeart: "brokenHeart 3000ms ease-in forwards",
                brokenHeartTablet: "brokenHeartTablet 3000ms ease-in forwards",
                brokenHeartPC: "brokenHeartPC 3000ms ease-in forwards",
                rotation: "rotate 1800ms linear infinite",
                curveRotation: "curveRotate 3700ms ease-out 1",
                triangleRotation: "triangleRotate 3000ms ease-out 2",
                trapezeRotation: "trapezeRotate 3000ms ease-out 2",
            },
        },
        backgroundImage: {
            portfolioGradient:
                "linear-gradient(to right, #1E003D 0%, #3C0566 50%, #6607B1 100%)",
            portfolioGradientLight:
                "linear-gradient(to right, #F9F8FF 0%, #F9F4FF 22%, #EDE4FF 43%, #DBCAFF 64%, #C8ADFF 83%, #B490FF 100%)",
            portfolioSectionGradient:
                "linear-gradient(to left, #1E003D 0%, #3C0566 50%, #6607B1 100%)",
            portfolioSectionGradientLight:
                "linear-gradient(to left, #A175FF 0%, #B28DFF 19%, #D0B9FF 37%, #E9DEFF 54%, #F6EFFF 75%, #F9F8FF 100%)",
            CTAGradient:
                "linear-gradient(to right, #6607B1 0%, #3C0566 50%, #1E003D 100%)",
            CTAGDarcModalradient:
                "linear-gradient(to right, #6607B1 0%, #3C0566 25%, #1E003D 100%)",

            CTAGradientLight:
                "linear-gradient(to right, #B490FF 0%, #CFB8FF 25%, #EAE0FF 50%, #F6F2FF 75%, #FEFDFF 100%)",
            feedbackMobCardGradient:
                "linear-gradient(to right, #1E003D99 0%, #3C056699 50%, #6607B199 100%)",
            feedbackMobCardGradientLight:
                "linear-gradient(to right, #FEFDFF 0%, #F6F2FF 25%, #EAE0FF 50%, #CFB8FF 75%, #B490FF 100%)",
            sharePopoverGradient:
                "linear-gradient(to bottom left, #410093 0%, #09002E 50%, #4E0B92 100%)",
            headerGradientLight:
                "linear-gradient(to right, #FFFFFF 0%, #F4EFFF 51%, #E2D4FF 100%)",
            none: "none",
            memberMenuGradientDark:
                "linear-gradient(to right, #4F0A8680 0%, #20003F80 100%)",
            memberMenuGradientLight:
                "linear-gradient(to right, #D8C5FF 0%, #EFE8FF 48%, #FBF9FF 100%)",
            PresentationGradient:
                "linear-gradient(to right, #6607B1DE 0%, #3C0566DE 50%, #1E003DDE 100%)",
            PresentationGradientLigth:
                "linear-gradient(to right, #D3B0FFDE 0%, #F2EBFFDE 100%)",
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
