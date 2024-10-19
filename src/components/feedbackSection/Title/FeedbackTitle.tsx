"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { DeskTitle } from "./DeskTitle";
import { MobTitle } from "./MobTitle";

export const FeedbackTitle = () => {
    const getTranslation = useTranslations("Feedback");

    return (
        <div>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3  tab:mt-2 tab:mr-[16px] pc:mt-[14px] flex items-center">
                    {getTranslation("pageTitle")}
                </SmallPageTitle>
                <MobTitle />
                <DeskTitle />
                <motion.div
                    className="ml-auto mr-0 tab:ml-6"
                    animate={{
                        rotate: [0, 360, -360, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src="/images/pumkin.png"
                        alt="Pumkin"
                        width={60}
                        height={60}
                    />
                </motion.div>
            </TitleWrapper>
        </div>
    );
};
