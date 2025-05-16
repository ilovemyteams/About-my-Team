"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ImageFromCloud } from "../../shared/ImageFromCloud";

interface ServiceItemProps {
    title: string;
    text: string;
    id: string;
    image: string;
    onChangeSection: (id: string) => void;
    isOpen: boolean;
    onHoverChange: (value: boolean) => void;
    isHoverLoading: boolean;
}

export const ServiceItem = ({
    text,
    title,
    id,
    image,
    onChangeSection,
    isOpen,
    onHoverChange,
    isHoverLoading,
}: ServiceItemProps) => {
    const getTranslation = useTranslations("Services");

    const onHoverCard = () => {
        if (isOpen || isHoverLoading) return;
        onHoverChange(true);
        onChangeSection(id);
    };

    const onTapCard = (e: MouseEvent | TouchEvent | PointerEvent) => {
        const pointerType = (e as PointerEvent).pointerType;
        if (pointerType === "mouse") return;
        onChangeSection(id);
    };

    const bgVariants = {
        close: {
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        open: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
    };

    const wrapperVariants = {
        close: { height: 0, opacity: 0, transition: { duration: 0.5 } },
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
            },
        },
    };

    const imageVariants = {
        close: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
            },
        },
    };

    const onAnimationComplete = () => {
        if (isHoverLoading) {
            onHoverChange(false);
        }
    };

    return (
        <motion.li
            className="relative py-6 first:border-y-[1px] border-b-[1px] border-purple-strokeLight dark:border-purple-stroke tab:py-7 tab:flex tab:gap-[100px]"
            onHoverStart={onHoverCard}
            onTap={onTapCard}
        >
            <motion.div
                className="absolute inset-0 bg-homeServiceCardGradientLight dark:bg-homeServiceCardGradientDark -z-[1]"
                variants={bgVariants}
                initial={isOpen ? "open" : "close"}
                animate={isOpen ? "open" : "close"}
            ></motion.div>

            <div className="absolute top-6 left-0 m-[3px] size-[18px] border-[3px] border-redLight dark:border-red tab:static grow-0 shrink-0 tab:size-[12px] tab:border-[2px] tab:m-[2px] tab:mt-[5px]" />

            <div className="tab:w-[41%] tab:grow-0 tab:shrink-0 text-pretty pc:w-[42%] desk:w-[46%]">
                <h3 className="ml-8 font-caviar font-bold text-xl text-purple-200 dark:text-white-200 tab:ml-0  tab:text-lg pc:text-xl desk:text-2xl24">
                    {getTranslation(title)}
                </h3>

                <motion.div
                    initial={isOpen ? "open" : "close"}
                    animate={isOpen ? "open" : "close"}
                    variants={wrapperVariants}
                    className="overflow-clip"
                    onAnimationComplete={onAnimationComplete}
                >
                    <p className="text-base pt-6 tab:pt-4 desk:text-lg25">
                        {getTranslation(text)}
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="hidden tab:block absolute top-0 right-0 overflow-hidden desk:right-[64px]"
                initial={isOpen ? "open" : "close"}
                animate={isOpen ? "open" : "close"}
                variants={imageVariants}
            >
                <ImageFromCloud
                    src={image}
                    alt={`${title} image`}
                    width={186}
                    height={124}
                />
            </motion.div>
        </motion.li>
    );
};
