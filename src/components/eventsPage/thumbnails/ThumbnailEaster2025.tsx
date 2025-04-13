"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { EggsScene } from "../easter/EggsScene";
import { ThumbnailBg } from "./ThumbnailBG";

const ThumbnailEaster = () => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [isEggBroken, setIsEggBroken] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const onEndAnimation = () => setStartAnimation(false);
    const onBrokenEgg = () => setIsEggBroken(true);

    useEffect(() => {
        const node = wrapperRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                    setStartAnimation(true);

                    setTimeout(() => {
                        setIsEggBroken(false);
                    }, 5000);
                }
            },
            {
                threshold: [0, 0.9],
            }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, []);

    return (
        <div
            ref={wrapperRef}
            className="relative w-full max-w-[280px] mx-auto aspect-[280/200] tab:aspect-[300/200] flex overflow-hidden"
        >
            <div className="max-w-[50%] h-auto aspect-[140/127] mb-6 ml-10">
                <EggsScene
                    startAnimation={startAnimation}
                    onEndAnimation={onEndAnimation}
                    onBrokenEgg={onBrokenEgg}
                    isEggBroken={isEggBroken}
                />
            </div>
            <motion.div
                animate={{
                    y: [0, 15, 15, 15, 0],
                    rotate: [0, 0, 15, -15, 0, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="w-[60px] h-auto absolute top-[-20px] right-7"
                style={{
                    transformOrigin: "top center",
                }}
            >
                <Image
                    src="/images/easter/bunny.svg"
                    alt="bunny"
                    width={73}
                    height={93}
                    className=" rotate-180"
                />
            </motion.div>
            <Image
                src="/images/easter/branchesBouquet.svg"
                alt="Bouquet of willow branches"
                width={179}
                height={169}
                className="absolute w-[20%] bottom-0 right-[-10px] rotate-[-30deg] "
            />
            <ThumbnailBg />
        </div>
    );
};

export default ThumbnailEaster;
