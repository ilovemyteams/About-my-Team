"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Tool } from "@/types/Tools";

import { BtnShowMore } from "../shared/BtnShowMore";
import { Title } from "../shared/Title";
import { ToolCard } from "./ToolCard";

interface ExpertiseProps {
    tools: Tool[];
}

const INITIAL_VISIBLE = 10;

export const Expertise = ({ tools }: ExpertiseProps) => {
    const t = useTranslations("MemberPage");
    const tButton = useTranslations("Buttons");
    const [showAll, setShowAll] = useState(false);
    const initialTools = tools.slice(0, INITIAL_VISIBLE);
    const extraTools = tools.slice(INITIAL_VISIBLE);

    return (
        <section>
            <Title>{t("expertise")}</Title>
            <div className="p-4">
                <ul className="w-full flex flex-wrap tab:flex-col gap-2 tab:gap-4 desk:gap-3">
                    {initialTools.map(tool => (
                        <li key={tool.name}>
                            <ToolCard tool={tool} />
                        </li>
                    ))}
                </ul>
                <AnimatePresence initial={false}>
                    {showAll && (
                        <motion.ul
                            layout
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className={`
                                w-full flex flex-wrap tab:flex-nowrap tab:flex-col
                                gap-2 tab:gap-4 desk:gap-3
                                overflow-hidden
                            `}
                        >
                            {extraTools.map(tool => (
                                <li
                                    key={tool.name}
                                    className="first:mt-2 tab:first:mt-4 desk:first:mt-3"
                                >
                                    <ToolCard tool={tool} />
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                {extraTools.length > 0 && (
                    <div className="flex items-center justify-start tab:justify-end mt-2 tab:mt-4">
                        <BtnShowMore
                            onClick={() => setShowAll(prev => !prev)}
                            isOpen={showAll}
                        >
                            {showAll ? tButton("less") : tButton("more")}
                        </BtnShowMore>
                    </div>
                )}
            </div>
        </section>
    );
};
