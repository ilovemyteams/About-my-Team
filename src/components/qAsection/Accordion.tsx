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
                    <div className="flex justify-between my-[16px] pc:mb-[32px]">
                        <div>
                            <summary className="flex-none font-caviar self-center h-auto text-left py-0 text-baseb pc:text-xlb ">
                                {item.question}
                            </summary>
                        </div>
                        <div
                            className="flex-none cursor-pointer w-[40px] h-[40px] flex justify-center items-center
            after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
            pc:hover:after:scale-100 pc:hover:after:blur-[2px] pc:hover:after:w-[48px] pc:hover:after:h-[48px]
            focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-[48px] focus-visible:after:h-[48px] 
            focus-visible:outline-none focus-within:outline-none"
                        >
                            <Image
                                src="/images/iconUp.svg"
                                width="0"
                                height="0"
                                alt="Open and close answer icon"
                                className={`w-[24px] h-[24px]  duration-300 ease-out transition-transform  ${isAccordionOpen ? "rotate-0" : "rotate-180 "}`}
                            />
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
