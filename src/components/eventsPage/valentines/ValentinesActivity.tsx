"use client";
import { animate } from "framer-motion";
import { useRef } from "react";

import { SecondScene } from "../SecondScene/SecondScene";
import { Certificate } from "./certificate/Certificate";
import { ClickCertificateSection } from "./certificate/ClickCertificateSection";
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

    const onClickBtn = async () => {
        const heartHeight = heartRef.current?.offsetHeight || 0;
        const heartWidth = heartRef.current?.offsetWidth || 0;
        const heartLeftPosition = heartRef.current?.offsetLeft || 0;
        const heartTopPosition = heartRef.current?.offsetTop || 0;

        const x = heartLeftPosition + 15;
        const y = heartHeight / 4 + heartTopPosition;

        // const containerHeight = containerRef.current?.offsetHeight || 0;
        // const containerWidth = containerRef.current?.offsetWidth || 0;

        const totalSteps = 60;

        const path = generateParabolicPath(
            x,
            y,
            x + heartWidth,
            y,
            heartHeight / 2,
            totalSteps
        );
        console.log(path);
        if (
            heartRef.current &&
            leftPartOfHeartRef.current &&
            certificateRef.current &&
            containerRef.current
        ) {
            await animate(
                heartRef.current,
                { scale: [1.1, 1, 1.1, 1] },
                { duration: 1 }
            );
            animate(
                certificateRef.current,
                {
                    zIndex: [-1, -1, -1],
                    scale: [0, 0.5, 0.5, 0.5],
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
                    scale: [0.5, 1],
                },
                {
                    duration: 0.5,
                    delay: 0.5,
                }
            );

            await animate(
                certificateRef.current,
                {
                    y: path.yArray,
                    x: path.xArray,
                },
                {
                    duration: 3,
                }
            );
        }
    };

    return (
        <div className="relative" ref={containerRef}>
            <Hero
                heartRef={heartRef}
                leftPartRef={leftPartOfHeartRef}
                onClickBtn={onClickBtn}
            />

            <SecondScene />
            <ClickCertificateSection />

            <div
                className={`absolute w-[100px] tab:w-[180px] pc:w-[210px] desk:w-[320px] opacity-0 top-0 left-0 `}
                ref={certificateRef}
            >
                <Certificate />
            </div>
        </div>
    );
};
