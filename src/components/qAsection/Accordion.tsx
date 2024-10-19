"use client";
import Image from "next/image";
import { useState } from "react";

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
        <li className="min-h-[72px] pc:min-h-[98px] border-b-[1px] dark:border-purple-stroke border-purple-strokeLight">
            <button
                aria-label="open answer button"
                onClick={changeStateAccordion}
                className="w-full outline-none"
            >
                <div className="flex justify-between my-[16px] pc:mb-[32px]">
                    <div>
                        <summary className="flex-none font-caviar dark:text-white-200 text-purple-200 self-center h-auto text-left py-0 text-baseb tab:text-xlb ">
                            {item.question}
                        </summary>
                    </div>
                    <div
                        className="relative cursor-pointer dark:text-red text-redLight flex justify-center items-center w-[48px] h-[48px] p-3 pc:p-2
            icon-hover-rounded-purple "
                    >
                        <div className="w-10 h-10 flex-shrink-0">
                            <Image
                                src="/images/pumpkin.png"
                                alt="pumpkin"
                                width={40}
                                height={40}
                                className={`duration-300 ease-out transition-transform  ${isAccordionOpen ? "rotate-180" : "rotate-0 "}`}
                            />
                        </div>
                    </div>
                </div>
            </button>

            <p
                className={`text-geist text-sm tab:text-base deskxl:text-lg overflow-hidden mb-[8px] transition-[max-height] duration-[600ms] ease-in 
                    ${isAccordionOpen ? "max-h-[300px]" : "max-h-0"}`}
            >
                {item.answer}
            </p>
        </li>
    );
}
