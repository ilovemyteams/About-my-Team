"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";

import { LocaleType } from "@/types/LocaleType";
import { Project } from "@/types/sanity.types";

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

export const PortfolioSlider = ({
    projects,
}: {
    projects: Project[] | null;
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const locale = useLocale();
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    console.log(projects);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div
            className="embla overflow-hidden w-portfolioHeroCard tab:w-[50%] tab:min-w-[360px] max-w-[540px] flex flex-col-reverse mt-8
          tab:mt-0 tab:flex-col tab:items-end 
          deskxl:w-[668px] deskxl:max-w-[668px] "
        >
            <div className="embla__controls tab:mb-6 w-[176px] max-w-[176px] mx-[auto] tab:mx-0 tab:w-[auto] deskxl:mb-7">
                <div className="embla__buttons flex justify-between tab:gap-6">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <SliderDotsBox
                        scrollSnaps={scrollSnaps}
                        selectedIndex={selectedIndex}
                        sliders={portfolioData}
                        onDotButtonClick={onDotButtonClick}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
            <div
                className="mb-6 tab:mb-0 tab:w-[100%] pc:mb-0 max-w-[540px] tab:min-w-[360px] pc:min-w-[540px] overflow-hidden deskxl:w-[668px]  deskxl:max-w-[668px] "
                ref={emblaRef}
            >
                <div className="flex max-w-[540px] tab:w-[100%] tab:min-w-[360px] pc:min-w-[540px] deskxl:w-[668px] deskxl:aspect-[668/428]  deskxl:max-w-[668px] ">
                    {portfolioData.map(data => (
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
