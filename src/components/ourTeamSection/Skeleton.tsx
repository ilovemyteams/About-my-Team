import React from "react";
import { IconHeart } from "../shared/Icons/IconHeart";

const preLoadingCard = (
    <>
        <div className="relative min-w-[128px] overflow-hidden tab:min-w-[230px] tab:aspect-[230/180] pc:aspect-[246/184] tab:mr-2 pc:mr-3 pc:mb-3 dark:bg-CTAGDarcModalradient bg-CTAGradientLight">
            <div className="absolute top-0 right-0 w-[65%] tab:w-[45%] h-auto">
                <IconHeart className="w-full h-full " />
            </div>
        </div>
        <div className="min-h-[23%] w-full mb-2 pc:mb-3 mr-2 pc:mr-3  flex justify-between content-between ">
            <div className="min-h-full w-[75%] flex flex-col justify-between">
                <div className="min-h-[40%]   dark:bg-CTAGradient bg-CTAGradientLight"></div>
                <div className="min-h-[40%]  dark:bg-CTAGradient bg-CTAGradientLight"></div>
            </div>
            <div className="h-12 w-12 dark:bg-CTAGradient bg-CTAGradientLight mt-auto mr-2"></div>
        </div>
    </>
);

export const Skeleton = ({ number }: { number: number }) => {
    const renderPreLoadingCard = () => {
        const preLoadingCards = [];
        for (let i = 0; i < number; i++) {
            preLoadingCards.push(
                <li
                    key={`skeleton-${i}`}
                    className="flex flex-col justify-between pt-2 pc:pt-3 pl-[6px] tab:pl-2 pc:pl-3 tab:border-purple-strokeLight dark:tab:border-purple-stroke 
                tab:aspect-[250/270] pc:aspect-[270/292] 
                tab:odd:border-r tab:[&:nth-child(1)]:border-b tab:[&:nth-child(2)]:border-b 
                pc:[&:nth-child(3)]:border-b pc:border-r pc:[&:nth-child(3)]:border-r-transparent pc:[&:nth-child(6)]:border-r-transparent
                deskxl:border-r deskxl:[&:nth-child(4)]:border-r-transparent deskxl:[&:nth-child(8)]:border-r-transparent 
                deskxl:[&:nth-child(3)]:border-r-purple-strokeLight dark:deskxl:[&:nth-child(3)]:border-r-purple-stroke deskxl:[&:nth-child(6)]:border-r-purple-strokeLight dark:deskxl:[&:nth-child(6)]:border-r-purple-stroke deskxl:[&:nth-child(4)]:border-b"
                >
                    {preLoadingCard}
                </li>
            );
        }
        return preLoadingCards;
    };

    return renderPreLoadingCard();
};
