"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useLocale } from "next-intl";
import { PortfolioCard } from "./PortfolioCard";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../shared/SliderComponents/CarouselButtons";
import { PortfolioDataItemType } from "./portfolioData";
import { LocaleType } from "@/types/LocaleType";
import { useDotButton } from "../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../shared/SliderComponents/SliderDotsBox";

type PortfolioCarouselProps = {
    projects: PortfolioDataItemType[];
    options?: EmblaOptionsType;
};
type Locale = LocaleType;

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = props => {
    const { projects, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const locale = useLocale();
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="relative embla min-w-full">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex">
                    {projects.map(project => (
                        <div
                            key={project.data.id}
                            className="embla__slide flex-[0_0_100%] tab:flex-[0_0_50%] w-full"
                        >
                            <PortfolioCard
                                data={project.data}
                                localizationData={project[locale as Locale]}
                            />
                        </div>
                    ))}
                </div>
                <div className="embla__controls  tab:absolute tab:-top-[80px] pc:-top-[112px] right-0 mt-[16px] tab:mt-0">
                    <div className="embla__buttons flex justify-center gap-4">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                        />
                        <SliderDotsBox
                            scrollSnaps={scrollSnaps}
                            selectedIndex={selectedIndex}
                            sliders={projects}
                            onDotButtonClick={onDotButtonClick}
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
