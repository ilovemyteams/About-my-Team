"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/src/i18n/routing";

import { IconCurlyArrow } from "../icons/IconCurlyArrow";

export const CtaBasket = () => {
    const getTranslation = useTranslations("EventsPage.Easter");
    const caption = getTranslation("greetingBtn");

    return (
        <div className="relative pr-[15%] tab:pr-[10%]">
            <Link
                href="/"
                className="relative w-[100px]  aspect-[50/78] pc:w-[120px] desk:w-[150px] flex justify-center mx-auto"
            >
                <Image
                    src="/images/easter/upper-part-basket.svg"
                    alt="basket handle"
                    width={44}
                    height={40}
                    className=" absolute w-full top-0 z-[-1]"
                />
                <motion.div
                    animate={{
                        y: [0, "-55%", "-55%", "-55%", "-55%", 0],
                        rotate: [0, 0, 15, -15, 0, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="h-[55%] aspect-[73/93] absolute bottom-[10%] left-1/2 -translate-x-1/2"
                    style={{
                        transformOrigin: "bottom center",
                        x: "-50%",
                    }}
                >
                    <Image
                        src="/images/easter/bunny.svg"
                        alt="bunny"
                        width={73}
                        height={93}
                        className="w-full h-full object-contain"
                    />
                </motion.div>
                <Image
                    src="/images/easter/basket.svg"
                    alt="basket"
                    width={50}
                    height={35}
                    className="z-[2] absolute w-full bottom-0"
                />
                <div className="absolute left-[70%] top-0  text-greyLight dark:text-grey tab:left-[20%]">
                    <p className="font-segoe text-xxs tab:text-sm pc:text-xl whitespace-nowrap -translate-y-full ">
                        {caption}
                    </p>
                    <IconCurlyArrow className="absolute top-0 left-[40%] w-[20%] h-auto tab:left-[60%]" />
                </div>
            </Link>
        </div>
    );
};
