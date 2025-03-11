import { heroui } from "@heroui/react";
import tailwindScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
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
            sm20: [
                "14px",
                {
                    lineHeight: "20px",
                },
            ],
            base: [
                "16px",
                {
                    lineHeight: "20px",
                },
            ],
            base23: [
                "16px",
                {
                    lineHeight: "23px",
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
            lg25: [
                "18px",
                {
                    lineHeight: "25px",
                },
            ],
            xl: [
                "20px",
                {
                    lineHeight: "25px",
                },
            ],
            xl28: [
                "20px",
                {
                    lineHeight: "28px",
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
            "2xl24": [
                "24px",
                {
                    lineHeight: "24px",
                },
            ],
            "2xl34": [
                "24px",
                {
                    lineHeight: "34px",
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
            "3xl28": [
                "28px",
                {
                    lineHeight: "28px",
                },
            ],
            "4xl": [
                "32px",
                {
                    lineHeight: "32px",
                    fontWeight: "700",
                },
            ],
            "4xl42": [
                "32px",
                {
                    lineHeight: "42px",
                },
            ],
            "5xl": [
                "40px",
                {
                    lineHeight: "52px",
                    fontWeight: "700",
                },
            ],
            "5xl40": [
                "40px",
                {
                    lineHeight: "40px",
                },
            ],
            "6xl": [
                "48px",
                {
                    lineHeight: "48px",
                    fontWeight: "700",
                },
            ],
            "6xln": [
                "48px",
                {
                    lineHeight: "48px",
                },
            ],
            "6xlt": ["48px", { lineHeight: "62px" }],

            "7xl": [
                "64px",
                {
                    lineHeight: "64px",
                    fontWeight: "700",
                },
            ],
            "8xl": [
                "80px",
                {
                    lineHeight: "104px",
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
                lineWithoutHexagonMob: "calc(100% - 12px)",
                lineWithoutHexagonTab: "calc(100% - 24px)",
                lineWithoutHexagonPC: "calc(100% - 44px)",
                lineWithoutHexagonDesk: "calc(100% - 62px)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                geist: ["var(--font-geist)"],
                caviar: ["var(--font-caviar)"],
                intro: ["var(--font-intro)"],
                segoe: ["var(--font-segoe)"],
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
                textHighlight: "#30253E",
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
                linesColor: {
                    "0%": {
                        backgroundColor: "currentColor",
                    },
                    "50%": {
                        backgroundColor: "#A258FF",
                    },
                    "100%": {
                        backgroundColor: "currentColor",
                    },
                },
                wave: {
                    "0%": {
                        transform: "scale3d(1, 1, 1)",
                    },

                    "0.5%": {
                        transform:
                            "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
                    },
                    "1%": {
                        transform:
                            "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
                    },
                    "1.5%": {
                        transform:
                            "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                    },
                    "2%": {
                        transform:
                            "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                    },
                    "2.5%": {
                        transform:
                            "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                    },
                    "3%": {
                        transform:
                            "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                    },
                    "3.5%": {
                        transform:
                            "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                    },
                    "4%": {
                        transform:
                            "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                    },
                    "4.5%": {
                        transform:
                            "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                    },
                    "5%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                    "100%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                },
                scale: {
                    "0%": {
                        transform: "scale(1)",
                    },
                    "15%": {
                        transform: "scaleX(1.1)",
                    },
                    "25%": {
                        transform: "scale(1)",
                    },
                    "35%": {
                        transform: "scaleY(1.2)",
                    },
                    "50%": {
                        transform: "scale(1)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
                glow: {
                    "0%, 100%": { filter: "brightness(1)" },
                    "50%": { filter: "brightness(1.5)" },
                },
                glowLights: {
                    "0%, 100%": { filter: "brightness(1)" },
                    "50%": { filter: "brightness(1.1)" },
                },
                showUp: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
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
                linesColor: "linesColor 3000ms ease-in infinite",
                wave: "wave 20s ease-in-out infinite",
                wobble: "scale .7s ease-in infinite",
                glow: "glow 2s ease-in-out infinite",
                glowLights: "glowLights 1500ms ease-in infinite",
                blink1: "glow 600ms infinite",
                blink2: "glow 600ms 200ms infinite",
                blink3: "glow 600ms 400ms infinite",
                showUp: "showUp 700ms ease-out infinite",
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
            pinkGradient: "linear-gradient(to right, #FFF1F1 0%, #FFBAC2 100%)",
            memberMenuGradientDark:
                "linear-gradient(to right, #4F0A8680 0%, #20003F80 100%)",
            memberMenuGradientLight:
                "linear-gradient(to right, #D8C5FF 0%, #EFE8FF 48%, #FBF9FF 100%)",
            PresentationGradient:
                "linear-gradient(to right, #6607B1DE 0%, #3C0566DE 50%, #1E003DDE 100%)",
            PresentationGradientLight:
                "linear-gradient(to right, #D3B0FFDE 0%, #F2EBFFDE 100%)",
            underConstructionGradient:
                "linear-gradient(90deg, #6607B1DE 0%, #3C0566DE 50%, #1E003DDE 100%)",
            underConstructionGradientLight:
                "linear-gradient(90.01deg, #B490FFCC 0%, #CFB8FFCC 25%, #EAE0FFCC 50%, #F6F2FFCC 75%, #FEFDFFCC 100%)",
            serviceCardGradient:
                "linear-gradient(to right, #4F0A86 0%, #20003F 50%, transparent 50%, transparent 100%)",
            serviceCardGradientLight:
                "linear-gradient(to right, #D8C5FF 0%, #EFE8FF 24%, #FBF9FF 50%, transparent 50%, transparent 100%)",
            discountModalBgGradient:
                "linear-gradient(90deg, #10001A 0%, #300079 100%)",
            discountModalBgGradientLight:
                "linear-gradient(90deg, #10001A 0%, #300079 100%)",
            projectCardGradientDark:
                "linear-gradient(to top, #5F3F87 0%,  #09002E 70%)",
            projectCardGradient:
                "linear-gradient(to top, #B490FF 0%, #CFB8FF 25%, #EAE0FF 50%, #F6F2FF 75%, #FEFDFF 100%)",
            portfolioActiveButtonGradient:
                "linear-gradient(to right, #4F0A86 50%, #20003F 100%)",
        },

        backgroundSize: {
            "size-200": "200% 200%",
        },
        backgroundPosition: {
            "pos-0": "0% 0%",
            "pos-100": "100% 100%",
        },
    },
    plugins: [
        heroui(),
        tailwindScrollbar({
            nocompatible: true,
            preferredStrategy: "pseudoelements",
        }),
        plugin(function ({ matchUtilities, theme, addUtilities }) {
            matchUtilities(
                {
                    "animate-delay": value => ({
                        animationDelay: value,
                    }),
                },
                { values: theme("transitionDelay") }
            );
            addUtilities({
                ".border-dash-horizontal": {
                    borderStyle: "dashed",
                    borderWidth: "1px 0", // Верхній і нижній бордер
                    borderImage:
                        "repeating-linear-gradient(90deg, #5F3F87 0 10px, transparent 10px 15px) 1",
                },
                ".border-dash-vertical": {
                    borderStyle: "dashed",
                    borderWidth: "0 1px", // Лівий і правий бордер
                    borderImage:
                        "repeating-linear-gradient(#5F3F87 0 10px, transparent 10px 15px) 1",
                },
            });
        }),
    ],
};
export default config;
