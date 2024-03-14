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
            <div className="min-h-[72px] pc:min-h-[98px] border-b-[1px] border-purple-stroke">
                <button onClick={changeStateAccordion} className="w-full">
                    <div className="flex justify-between items-start my-[16px] pc:mb-[32px]">
                        <div>
                            <summary className="font-caviar self-center h-auto max-w-[248px] pc:max-w-[770px] text-left py-0 text-baseb pc:text-xlb ">
                                {item.question}
                            </summary>
                        </div>
                        <div
                            className="cursor-pointer w-[48px] h-[48px] flex justify-center items-center
            after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-[48px] hover:after:h-[48px]
            focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-[48px] focus-visible:after:h-[48px] 
            focus-visible:outline-none focus-within:outline-none"
                        >
                            <Image
                                src="/images/iconUp.svg"
                                width="0"
                                height="0"
                                alt="Open and close answer icon"
                                className={`w-[40px] h-[40px]  ${isAccordionOpen ? "" : "transition rotate-180 duration-300 ease-out"}`}
                            />
                        </div>
                    </div>
                </button>
                <div
                    className={`mt-0 grid overflow-hidden transition-transform duration-1000 linear text-sm 
            ${
                isAccordionOpen
                    ? "grid-rows-[1fr] transition-opacity opacity-100 mb-[16px]"
                    : "grid-rows-[0fr] opacity-0 h-0"
            }`}
                >
                    <p className="overflow-hidden text-sm pc:text-base">
                        {item.answer}
                    </p>
                </div>
            </div>
        </>
    );
}
