"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { IconUpVector } from "@/src/components/shared/Icons/IconUpVector";

interface ReadMoreTextProps {
    paragraphs: string[];
    limit?: number;
}

export const ReadMoreText = ({
    paragraphs,
    limit = 495,
}: ReadMoreTextProps) => {
    const [expanded, setExpanded] = useState(false);
    const t = useTranslations("Buttons");

    const fullText = paragraphs.join("\n\n");
    const isLong = fullText.length > limit;

    return (
        <div>
            {/* Mobile + Tablet */}
            <div className="pc:hidden">
                <motion.div
                    initial={false}
                    animate={{ height: expanded ? "auto" : 200 }} // 120 = высота свернутого состояния
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    {paragraphs.map((p, i) => (
                        <p key={i} className="mb-3 leading-[23px] last:mb-0">
                            {p}
                        </p>
                    ))}
                </motion.div>

                {isLong && (
                    <button
                        onClick={() => setExpanded(prev => !prev)}
                        className="inline-flex items-center mt-2 text-xs tab:text-sm text-redLight dark:text-red"
                    >
                        {expanded ? t("less") : t("more")}

                        <motion.span
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-1 flex"
                        >
                            <IconUpVector className="w-[10px] tab:w-[12px] h-auto" />
                        </motion.span>
                    </button>
                )}
            </div>

            {/* Desktop — без аккордеона */}
            <div className="hidden pc:block">
                {paragraphs.map((p, i) => (
                    <p key={i} className="mb-3 leading-[23px] last:mb-0">
                        {p}
                    </p>
                ))}
            </div>
        </div>
    );
};
