import { motion } from "framer-motion";
import Image from "next/image";

import { Link } from "@/src/i18n/routing";

export const Basket = () => {
    return (
        <Link
            href="/events"
            className=" relative w-8 tab:w-[36px] desk:w-[50px] h-[50px] tab:h-[50px] desk:h-[76px] flex justify-center"
        >
            <Image
                src="/images/easter/upper-part-basket.svg"
                alt="basket handle"
                width={44}
                height={40}
                className=" absolute w-full top-0 z-[-1] tab:w-8 desk:w-full"
            />
            <motion.div
                animate={{
                    y: [0, -15, -15, -15, 0],
                    rotate: [0, 0, 15, -15, 0, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="w-5 tab:w-6 desk:w-8 h-auto absolute bottom-1 tab:bottom-[8px] desk:bottom-4"
                style={{
                    transformOrigin: "bottom center",
                }}
            >
                <Image
                    src="/images/easter/bunny.svg"
                    alt="bunny"
                    width={73}
                    height={93}
                    className=""
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
