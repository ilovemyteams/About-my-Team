"use client";
import { useState } from "react";
import { IconUp } from "../shared/IconUp";

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
            <div className="min-h-[72px] pc:min-h-[98px] border-b-[1px] border-purple-stroke">
                <button onClick={changeStateAccordion} className="w-full">
                    <div className="flex justify-between my-[16px] pc:mb-[32px]">
                        <div>
                            <summary className="flex-none font-caviar self-center h-auto text-left py-0 text-baseb pc:text-xlb ">
                                {item.question}
                            </summary>
                        </div>
                        <div
                            className="flex-none cursor-pointer w-[48px] h-[48px] flex justify-center items-center
            after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full text-red after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-[48px] hover:after:h-[48px]
            focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-[48px] focus-visible:after:h-[48px] 
            focus-visible:outline-none focus-within:outline-none"
                        >
                            <IconUp />
                        </div>
                    </div>
                </button>

                <p
                    className={`text-geist text-sm overflow-hidden mb-[8px] transition-[max-height] duration-[300ms] ease-in-out 
                    ${isAccordionOpen ? "max-h-[300px]" : "max-h-0"}`}
                >
                    {item.answer}
                </p>
            </div>
        </>
    );
}
