"use client";
import { useState } from "react";
import Image from "next/image";

interface AccordionProps {
    item: {
        question: string;
        answer: string;
    };
}

export function Accordion({ item }: AccordionProps) {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const changeStateAccordion = () => {
        setAccordionOpen(isAccordionOpen => !isAccordionOpen);
    };

    return (
        <>
            <div className="min-h-[98px] border-b-[1px] border-purple-stroke">
                <button
                    onClick={changeStateAccordion}
                    className="flex justify-between items-center w-full"
                >
                    <summary className="mt-[16px] pb-[16px] font-caviar text-left  text-xlb">
                        {item.question}
                    </summary>
                    <Image
                        src="/images/iconUp.svg"
                        width="0"
                        height="0"
                        alt="Open and close answer icon"
                        className={`w-[40px] h-auto ${isAccordionOpen ? "transition-transform" : "transition-transform rotate-180 duration-300 ease-out"}`}
                    />
                </button>
                <div
                    className={`mt-[8px] grid overflow-hidden transition-transform duration-300 ease-out text-sm 
            ${
                isAccordionOpen
                    ? "grid-rows-[2fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
            }`}
                >
                    <p className="overflow-hidden font-geist text-base mb-[16px] pt-0 mt-o">
                        {item.answer}
                    </p>
                </div>
            </div>
        </>
    );
}
