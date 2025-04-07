"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { Link } from "@/src/i18n/routing";

export const CtaBasket = () => {
    return (
        <Link
            href="/"
            className="relative w-[150px] aspect-[50/78] tab:w-[120px] desk:w-[150px] flex justify-center mx-auto"
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
        </Link>
    );
};
