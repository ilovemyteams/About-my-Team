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
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <>
            <div className="py-[16px] min-h-[72px] border-b-[1px]">
                <button
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="flex justify-between w-full"
                >
                    <summary>{item.question}</summary>
                    <Image
                        src="/images/iconUp.svg"
                        width="0"
                        height="0"
                        alt="Share icon"
                        className={`w-[40px] h-auto ${accordionOpen ? "transition-all" : "transition-transform rotate-180 duration-300 ease-in-out"}`}
                    />
                </button>
                <div
                    className={`mt-[8px] grid overflow-hidden transition-all duration-300 ease-in-out text-sm 
            ${
                accordionOpen
                    ? "grid-rows-[2fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
            }`}
                >
                    <p className="overflow-hidden ">{item.answer}</p>
                </div>
            </div>
        </>
    );
}
