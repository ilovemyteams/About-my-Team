"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";

import { LocaleType } from "@/types/LocaleType";

import { portfolioData } from "../../../mockedData/portfolioData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../../shared/SliderComponents/SliderDotsBox";
import { PortfolioCard } from "./PortfolioCard";

const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };

export const PortfolioSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const locale = useLocale();
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);
    const portfolioForRender = [...portfolioData].sort(
        (a, b) => a.data.order - b.data.order
    );

    return (
        <div
            className="embla overflow-hidden w-full max-w-[508px] tab:w-[50%] tab:min-w-[410px] pc:min-w-[608px] flex flex-col-reverse mt-[34px]
          tab:flex-col tab:items-end 
          desk:w-[668px] desk:max-w-[668px] tab:mt-[27px] pc:mt-0 desk:mt-4"
        >
            <div className="embla__controls tab:mb-6 w-[176px] max-w-[176px] mx-[auto] tab:mx-0 tab:w-[auto] desk:mb-7">
                <div className="embla__buttons flex justify-between tab:gap-6">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <SliderDotsBox
                        scrollSnaps={scrollSnaps}
                        selectedIndex={selectedIndex}
                        sliders={portfolioForRender}
                        onDotButtonClick={onDotButtonClick}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
            <div
                className="mb-4 tab:mb-0 tab:w-[100%] pc:mb-0 tab:min-w-[410px] pc:min-w-[608px] overflow-hidden desk:w-[668px]  desk:max-w-[668px] "
                ref={emblaRef}
            >
                <div className="flex tab:w-[100%] tab:min-w-[410px] pc:min-w-[540px] desk:w-[668px] desk:aspect-[668/375]  desk:max-w-[668px] ">
                    {portfolioForRender.map(data => (
                        <div
                            key={data.data.id}
                            className="embla__slide flex-[0_0_100%] w-full "
                        >
                            <PortfolioCard
                                data={data[locale as LocaleType]}
                                img={data.data?.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
