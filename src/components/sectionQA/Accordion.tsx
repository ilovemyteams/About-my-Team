"use client";
import { useState } from "react";

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
            <div className="py-[16px] h-[72px] border-b-[1px] hover:border-none">
                <button
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    className="flex justify-between w-full"
                >
                    <summary>{item.question}</summary>
                    <svg className="w-4 h-4 pc:min-w-6 pc:h-6 bg-purple-100"></svg>
                </button>
            </div>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm 
            ${
                accordionOpen
                    ? "grid-rows-[2fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
            }`}
            >
                <p className="overflow-hidden ">{item.answer}</p>
            </div>
        </>
    );
}
