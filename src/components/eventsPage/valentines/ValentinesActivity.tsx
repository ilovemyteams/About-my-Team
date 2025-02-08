"use client";
import { animate } from "framer-motion";
import { useRef, useState } from "react";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";

import { SecondScene } from "../SecondScene/SecondScene";
import { Certificate } from "./certificate/Certificate";
import { ClickCertificateSection } from "./certificate/ClickCertificateSection";
import { Confirm } from "./confirm/Confirm";
import { Hero } from "./hero/Hero";

type ParabolaPath = {
    xArray: number[];
    yArray: number[];
};

const generateParabolicPath = (
    xStart: number,
    yStart: number,
    xEnd: number,
    yEnd: number,
    peakHeight: number = 300,
    steps: number = 60
): ParabolaPath => {
    const xArray = Array.from({ length: steps }, (_, i) => {
        const t = i / (steps - 1);
        return xStart + (xEnd - xStart) * t;
    });

    const yArray = xArray.map((_, i) => {
        const t = i / (steps - 1);
        const parabola = -4 * peakHeight * (t - 0.5) ** 2 + peakHeight;

        return yStart + (yEnd - yStart) * t - parabola;
    });

    return { xArray, yArray };
};
export const ValentinesActivity = () => {
    const heartRef = useRef<HTMLDivElement>(null);
    const leftPartOfHeartRef = useRef<HTMLDivElement>(null);
    const certificateRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const envelopeCaptionRef = useRef<HTMLDivElement>(null);
    const clickEnvelopeSectionRef = useRef<HTMLDivElement>(null);
    const screen = useScreenSize();
    const { mobileName, tabletName } = SCREEN_NAMES;
    const [isOpen, setIsOpen] = useState(false);
    const [disabledCertificate, setDisabledCertificate] = useState(true);

    const onClickGetDiscount = async () => {
        if (
            heartRef.current &&
            leftPartOfHeartRef.current &&
            certificateRef.current &&
            containerRef.current &&
            envelopeCaptionRef.current &&
            clickEnvelopeSectionRef.current
        ) {
            animate(
                clickEnvelopeSectionRef.current,
                {
                    height: "auto",
                },
                { duration: 0.5 }
            );
            await animate(
                heartRef.current,
                { scale: [1.1, 1, 1.1, 1] },
                { duration: 1 }
            );
            const heartHeight = heartRef.current.offsetHeight;
            const heartWidth = heartRef.current.offsetWidth;
            const heartLeftPosition = heartRef.current.offsetLeft;
            const heartTopPosition = heartRef.current.offsetTop;

            const containerHeight = containerRef.current.offsetHeight;

            const containerWidth = clickEnvelopeSectionRef.current.offsetWidth;

            const startYPosition =
                screen === mobileName ? 160 : screen === tabletName ? 140 : 170;

            const startXPosition =
                screen === mobileName
                    ? containerWidth * 0.4
                    : containerWidth * 0.7;

            const x = heartLeftPosition - heartWidth / 8 - startXPosition;
            const y =
                startYPosition +
                heartTopPosition +
                heartHeight / 1.5 -
                containerHeight;

            const totalSteps = 60;

            const path = generateParabolicPath(
                x,
                y,
                x + heartWidth,
                y,
                heartHeight,
                totalSteps
            );
            const { xArray, yArray } = path;

            animate(
                certificateRef.current,
                {
                    zIndex: [-1, -1, -1],
                    scale: [0, 0.2, 0.2, 0.2],
                    opacity: [0, 0, 0, 1],
                    y: [0, `${y}px`, `${y}px`, `${y}px`],
                    x: [0, `${x}px`, `${x}px`, `${x}px`],
                },
                {
                    duration: 0.5,
                }
            );
            animate(
                leftPartOfHeartRef.current,
                {
                    rotate: "-40deg",
                    x: "-50%",
                    y: "15%",
                },
                { duration: 1 }
            );

            await animate(
                certificateRef.current,
                {
                    zIndex: [-1, 1],
                    scale: [0.2, 0.5],
                },
                {
                    duration: 0.5,
                    delay: 0.5,
                }
            );

            await animate(
                certificateRef.current,
                {
                    y: yArray,
                    x: xArray,
                },
                {
                    duration: 2,
                }
            );

            await animate(
                certificateRef.current,
                {
                    scale: [0.5, 1],
                    y: [yArray[yArray.length - 1], 0],
                    x: [xArray[xArray.length - 1], "-50%"],
                },
                {
                    duration: 10,
                }
            );
            await animate(
                envelopeCaptionRef.current,
                {
                    opacity: [0, 1],
                },
                {
                    duration: 1,
                }
            );
            setDisabledCertificate(false);
        }
    };

    const onClickConfirmDiscount = () => {
        setIsOpen(true);
    };

    const onCloseModal = () => setIsOpen(false);

    return (
        <div className="relative overflow-clip mt-[-148px]" ref={containerRef}>
            <Hero
                heartRef={heartRef}
                leftPartRef={leftPartOfHeartRef}
                onClickBtn={onClickGetDiscount}
            />

            <SecondScene />

            <div ref={clickEnvelopeSectionRef} className="h-0">
                <ClickCertificateSection />
            </div>

            <div
                className={`absolute w-[210px] tab:w-[250px] pc:w-[350px] desk:w-[430px] 
                    opacity-0 bottom-[160px] left-[40%] tab:left-[70%] tab:bottom-[140px] pc:bottom-[170px]`}
                ref={certificateRef}
            >
                <Certificate
                    captionRef={envelopeCaptionRef}
                    onClickCertificate={onClickConfirmDiscount}
                    disabled={disabledCertificate}
                />
            </div>
            <Confirm
                isOpen={isOpen}
                onCloseModal={onCloseModal}
                setDisabledCertificate={setDisabledCertificate}
            />
        </div>
    );
};
