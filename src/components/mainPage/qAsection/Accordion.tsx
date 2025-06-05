"use client";
import { useState } from "react";

import { IconUp } from "../../shared/Icons/IconUp";

interface AccordionProps {
    item: { question: string | null; shortAnswer: string | null };
}

export function Accordion({ item }: AccordionProps) {
    const [isAccordionOpen, setAccordionOpen] = useState(false);

    const changeStateAccordion = () => {
        setAccordionOpen(isAccordionOpen => !isAccordionOpen);
    };

    return (
        <li className="min-h-[72px] pc:min-h-[98px] border-b-[1px] dark:border-purple-stroke border-purple-strokeLight">
            <button
                aria-label="open answer button"
                onClick={changeStateAccordion}
                className="w-full outline-none"
            >
                <div className="flex justify-between my-[16px] pc:mb-[32px]">
                    <div>
                        <summary className="flex-none font-caviar dark:text-white-200 text-purple-200 self-center h-auto text-left py-0 text-baseb tab:text-xlb ">
                            {item.question || ""}
                        </summary>
                    </div>
                    <div
                        className="relative cursor-pointer dark:text-red text-redLight flex justify-center items-center w-[48px] h-[48px] p-3 pc:p-2
            icon-hover-rounded-purple"
                    >
                        <IconUp
                            className={`w-[40px] h-[40px] duration-300 ease-out transition-transform  ${isAccordionOpen ? "rotate-0" : "rotate-180 "}`}
                        />
                    </div>
                </div>
            </button>

            <p
                className={`text-geist text-sm tab:text-base deskxl:text-lg overflow-hidden mb-[8px] transition-[max-height] duration-[600ms] ease-in 
                    ${isAccordionOpen ? "max-h-[300px]" : "max-h-0"}`}
            >
                {item.shortAnswer || ""}
            </p>
        </li>
    );
}
