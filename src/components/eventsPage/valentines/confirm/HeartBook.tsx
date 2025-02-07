"use client";

import { animate } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

export default function HeartBook() {
    const getTranslation = useTranslations("Valentines");
    const openedPartRef = useRef<HTMLDivElement>(null);
    const openedTextRef = useRef<HTMLDivElement>(null);

    const animateHeart = async () => {
        if (
            openedPartRef.current &&
            openedTextRef.current &&
            openedPartRef.current
        ) {
            animate(
                openedPartRef.current,
                { rotateY: 180 },
                { duration: 1.5, ease: "easeInOut", delay: 0.5 }
            );

            animate(
                openedTextRef.current,
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                },
                { duration: 1, ease: "easeInOut", delay: 1 }
            );
            animate(
                openedPartRef.current,
                { zIndex: 0 },
                { duration: 1, ease: "easeInOut", delay: 1.3 }
            );
        }
    };

    useEffect(() => {
        animateHeart();
    }, []);

    return (
        <div className="relative w-[90%] tab:w-[68%] aspect-[1.22] h-auto mx-auto mb-6 tab:mb-8 desk:mb-10">
            <div className=" absolute w-[50%] h-full right-[50%] origin-left z-[1]">
                <div className=" overflow-hidden">
                    <div className="content w-[200%]">
                        <Image
                            src="/images/valen/fullHeart.svg"
                            alt="fullHeart"
                            width={582}
                            height={458}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute top-[23%] bottom-[20%] tab:bottom-[22%] left-[3%] right-[3%]  text-white-200 z-[2] overflow-hidden">
                <div
                    ref={openedTextRef}
                    className="w-full h-full flex flex-col justify-between [clip-path:inset(0%_100%_0%_0%)]"
                >
                    <p className="text-center font-caviar font-bold text-sm  tab:text-xl desk:text-2xl">
                        {getTranslation("confirmationGreeting")}
                    </p>
                    <p className="w-[40%] mx-auto text-center text-4xl tab:text-7xl desk:text-8xl font-caviar font-bold">
                        50$
                    </p>
                    <p className="w-[58%] tab:w-[45%] mx-auto text-xxs tab:text-sm desk:text-base text-center">
                        {getTranslation("confirmationFootnote")}
                    </p>
                </div>
            </div>
            <div
                className={`absolute w-[50%] h-full right-[calc(50%_+_2px)] origin-right rotateY-0  z-[3] `}
                ref={openedPartRef}
            >
                <div>
                    <div className="outer overflow-hidden">
                        <div className=" w-[200%]">
                            <Image
                                src="/images/valen/fullHeart.svg"
                                alt="fullHeart"
                                width={582}
                                height={458}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
