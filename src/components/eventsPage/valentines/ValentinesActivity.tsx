"use client";
import { animate } from "framer-motion";
import { useRef, useState } from "react";

import { SCREEN_SIZES } from "@/src/constants/screenSizes";

import { SecondScene } from "../SecondScene/SecondScene";
import { Certificate } from "./certificate/Certificate";
import { ClickCertificateSection } from "./certificate/ClickCertificateSection";
import { Confirm } from "./confirm/Confirm";
import { Cupid } from "./hero/Cupid";
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

    const envelopeCaptionRef = useRef<HTMLDivElement>(null);
    const clickEnvelopeSectionRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);
    const cupidRef = useRef<HTMLDivElement>(null);
    const cupidLineRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [disabledCertificate, setDisabledCertificate] = useState(true);

    const onClickGetDiscount = async () => {
        if (
            heartRef.current &&
            leftPartOfHeartRef.current &&
            certificateRef.current &&
            envelopeCaptionRef.current &&
            clickEnvelopeSectionRef.current &&
            cupidRef.current &&
            arrowRef.current &&
            cupidLineRef.current &&
            window
        ) {
            // Appearance section for certificate
            animate(
                clickEnvelopeSectionRef.current,
                {
                    height: "auto",
                },
                { duration: 0.5 }
            );
            // HeartBeating animation
            await animate(
                heartRef.current,
                { scale: [1.1, 1, 1.1, 1] },
                { duration: 1 }
            );
            // Calculate track for envelope
            const heartHeight = heartRef.current.offsetHeight;
            const heartWidth = heartRef.current.offsetWidth;
            const heartLeftPosition = heartRef.current.offsetLeft;
            const heartTopPosition = heartRef.current.offsetTop;

            const certificatePositionLeft = certificateRef.current.offsetLeft;
            const certificateWidth = certificateRef.current.offsetWidth;
            const certificateTopPosition = certificateRef.current.offsetTop;
            const certificateHeight = certificateRef.current.offsetHeight;
            const windowWidth = window.innerWidth;

            // Start position for envelope appearence
            const x =
                heartLeftPosition -
                certificatePositionLeft -
                certificateWidth * 0.3;
            const y =
                heartTopPosition +
                heartHeight * 0.5 -
                certificateHeight * 0.3 -
                certificateTopPosition;

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

            const isDesktop = windowWidth >= SCREEN_SIZES.pc;

            // Calculate arrow direction and end position
            const arrowLeftPosition = arrowRef.current.offsetLeft;
            const arrowTopPosition = arrowRef.current.offsetTop;

            //Cupid shift
            let delay;
            if (isDesktop) {
                delay = 0.3;

                animate(
                    cupidLineRef.current,
                    {
                        rotate: [0, "-1.5deg", 0],
                    },
                    { duration: 0.7 }
                );
                animate(
                    cupidRef.current,
                    {
                        x: [0, "5%", 0],
                    },
                    { duration: 0.7 }
                );
                const arrowShiftX =
                    arrowLeftPosition - heartLeftPosition - heartWidth / 1.5;
                const arrowShiftY =
                    heartTopPosition - arrowTopPosition - heartHeight / 3;
                const arrowStartXPosition =
                    arrowLeftPosition - arrowRef.current.offsetWidth * 0.46;
                const arrowStartYPosition =
                    arrowLeftPosition + arrowRef.current.offsetHeight * 0.3;
                //Arrow fly animation
                await animate(
                    arrowRef.current,
                    {
                        opacity: [0, 1, 1],
                        scale: [0.2, 0.2, 1],
                        x: [
                            arrowStartXPosition,
                            arrowStartXPosition,
                            arrowShiftX,
                        ],
                        y: [
                            arrowStartYPosition,
                            arrowStartYPosition,
                            arrowShiftY,
                        ],
                    },
                    { duration: 1, delay: delay }
                );
            } else {
                delay = 0.5;
                const cupidLeftPosition = cupidRef.current.offsetLeft;
                const cupidWidth = cupidRef.current.offsetWidth;
                const cupidShift = cupidLeftPosition + cupidWidth * 2;
                await animate(
                    cupidRef.current,
                    {
                        opacity: [0, 1],
                        x: [-cupidShift, -cupidShift],
                    },
                    { duration: 0.1 }
                );
                animate(
                    cupidRef.current,
                    {
                        rotate: ["-10deg", "-10deg"],
                        opacity: [1, 1],
                        scaleX: [-1, -1],
                        x: [-cupidShift, 0],
                    },
                    { duration: 1 }
                );

                const arrowShiftX =
                    arrowLeftPosition - heartLeftPosition - heartWidth * 0.1;
                const arrowShiftY =
                    heartTopPosition - arrowTopPosition - heartHeight * 0.6;

                //Arrow fly animation
                await animate(
                    arrowRef.current,
                    {
                        opacity: [0, 1, 1],
                        scale: [0.2, 0.2, 0.6],
                        x: [arrowLeftPosition, arrowLeftPosition, arrowShiftX],
                        y: [arrowTopPosition, arrowTopPosition, arrowShiftY],
                    },
                    { duration: 1, delay: delay }
                );
            }

            animate(
                arrowRef.current,
                {
                    opacity: [1, 0],
                },
                { duration: 0.2 }
            );

            //Certificate appearance
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

            //Heart broken animation
            animate(
                leftPartOfHeartRef.current,
                {
                    rotate: "-40deg",
                    x: "-50%",
                    y: "15%",
                },
                { duration: 1 }
            );

            // Flying certificate
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
            //Text under envelope appearance
            await animate(
                envelopeCaptionRef.current,
                {
                    opacity: [0, 1],
                },
                {
                    duration: 1,
                }
            );
            //Activate click on certificate
            setDisabledCertificate(false);
        }
    };

    const onClickConfirmDiscount = () => {
        setIsOpen(true);
    };

    const onCloseModal = () => setIsOpen(false);

    return (
        <div className="overflow-clip">
            <div className="relative max-w-[540px] tab:max-w-[unset] mt-[-148px] desk:max-w-[1456px] mx-auto">
                <Hero
                    heartRef={heartRef}
                    leftPartRef={leftPartOfHeartRef}
                    onClickBtn={onClickGetDiscount}
                />
                <Cupid
                    arrowRef={arrowRef}
                    cupidRef={cupidRef}
                    cupidLineRef={cupidLineRef}
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
        </div>
    );
};
