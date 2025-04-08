"use client";
import Image from "next/image";

import { useEasterCounter } from "@/src/utils/EasterCounterContext";

export const CounterBox = () => {
    const { totalFoundEggs } = useEasterCounter();
    return (
        <div
            className="px-[11px] py-[7px] w-[72px] h-[42px] items-center text-base tab:text-2xl desk:text-3xl tab:leading-6 desk:leading-7 leading-4 justify-center
            tab:w-[107px] tab:h-[62px] desk:w-[129px] desk:h-[76px] desk:font-light
            dark:bg-CTAGradient bg-CTAGradientLight text-purple-200 dark:text-grey border border-t-0 tab:border-t-1 border-purple-strokeLight dark:border-purple-stroke
        flex"
        >
            <div className="flex gap-1 items-end">
                <Image
                    src="/images/easter/bunnyWithEgg.svg"
                    alt="Bunny with egg"
                    width={99}
                    height={193}
                    className="w-[14px] h-auto tab:w-[22px] desk:w-[26px]"
                />
                <p className="text-xxs tab:text-base mb-[2px] tab:mb-[3px] desk:text-lg">
                    x
                </p>
                <p className="">{totalFoundEggs}</p>
            </div>
        </div>
    );
};
