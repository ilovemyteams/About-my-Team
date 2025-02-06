"use client";
import { animate } from "framer-motion";
import { useRef } from "react";

import { SecondScene } from "../SecondScene/SecondScene";
import { Certificate } from "./certificate/Certificate";
import { ClickCertificateSection } from "./certificate/ClickCertificateSection";
import { Hero } from "./hero/Hero";

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

        const x = heartWidth / 3 + heartLeftPosition;
        const y = heartHeight / 5 + heartTopPosition;

        const containerHeight = containerRef.current?.offsetHeight || 0;
        const containerWidth = containerRef.current?.offsetWidth || 0;

        const pathToBottom = containerHeight - y;

        const stepY = Math.floor(pathToBottom / 60);
        const totalSteps = 60;

        const yStepsArray = Array.from({ length: totalSteps }, (_, index) => {
            let position = 0;
            if (index < 6) {
                position = y - stepY * (index + 1);
            } else if (index < 10) {
                position = y - stepY * 6 + stepY * (index + 1);
            } else {
                position = y + stepY * 11;
            }
            return `${position}px`;
        });
        const xStepsArray = Array.from({ length: totalSteps }, (_, index) => {
            let position = 0;
            if (index < 6) {
                position = x - containerWidth * 0.02 * (index + 1);
            } else if (index < 10) {
                position =
                    x -
                    containerWidth * 0.12 +
                    containerWidth * 0.02 * (index + 1);
            } else {
                position =
                    x - containerWidth * 0.12 + containerWidth * 0.02 * 11;
            }
            return `${position}px`;
        });

        console.log(yStepsArray);
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
            await animate(
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
                    zIndex: [-1, -1, -1, -1],
                    opacity: [0, 0, 0, 1],
                    y: [0, `${y}px`, `${y}px`, `${y}px`],
                    x: [0, `${x}px`, `${x}px`, `${x}px`],
                },
                {
                    duration: 0.5,
                }
            );

            await animate(
                certificateRef.current,
                {
                    y: yStepsArray,
                    x: xStepsArray,
                },
                {
                    duration: 15,
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
