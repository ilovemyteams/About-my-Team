"use client";
import { useState } from "react";
import { IconUp } from "../shared/Icons/IconUp";

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
        <div className="min-h-[72px] pc:min-h-[98px] border-b-[1px] border-purple-stroke">
            <button onClick={changeStateAccordion} className="w-full">
                <div className="flex justify-between my-[16px] pc:mb-[32px]">
                    <div>
                        <summary className="flex-none font-caviar text-white self-center h-auto text-left py-0 text-baseb pc:text-xlb ">
                            {item.question}
                        </summary>
                    </div>
                    <div
                        className="relative cursor-pointer text-red flex justify-center items-center w-[48px] h-[48px] p-3 pc:p-2
            icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            icon-hover-rounded-purple:active"
                    >
                        <IconUp
                            className={`w-[40px] h-[40px] duration-300 ease-out transition-transform  ${isAccordionOpen ? "rotate-0" : "rotate-180 "}`}
                        />
                    </div>
                </div>
            </button>

            <p
                className={`text-geist text-sm tab:text-base deskxl:text-lg overflow-hidden mb-[8px] transition-[max-height] duration-[300ms] ease-in-out 
                    ${isAccordionOpen ? "max-h-[300px]" : "max-h-0"}`}
            >
                {item.answer}
            </p>
        </div>
    );
}
