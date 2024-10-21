"use client";
import { useTranslations } from "next-intl";

import { questionsData } from "@/src/mockedData/questionsData";
import { motion } from "framer-motion";

import { PageTopSection } from "../shared/PageTopSection";
import Image from "next/image";

export const HeaderFAQ = () => {
    const getTranslation = useTranslations();
    const breadcrumbs = [
        { title: getTranslation("Breadcrumbs.breadcrumbItemFaq"), url: "" },
    ];
    return (
        <section className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px] pt-8 tab:pt-12 pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <div className="mb-[21px] tab:mb-12 pc:mb-[56px] tab:flex tab:gap-6">
                <h1 className="font-caviar text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-6xl desk:text-7xl">
                    {getTranslation("Q&A.pageBigTitle")}
                </h1>
                <motion.div
                    className="w-[60px] ml-auto mr-0 tab:ml-6"
                    animate={{
                        rotate: [0, 360, -360, 0, 0],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src="/images/pumpkin.png"
                        alt="pumpkin"
                        width={60}
                        height={60}
                    />
                </motion.div>
            </div>

            <div className="pb-6 tab:pb-9 pc:pb-12 border-b border-purple-strokeLight dark:border-purple-stroke">
                <p className="my-auto text-sm tab:text-base text-purple-100 dark:text-purple-50">
                    {getTranslation("Q&A.questionQuantity")}
                    {questionsData.length}
                </p>
            </div>
        </section>
    );
};
