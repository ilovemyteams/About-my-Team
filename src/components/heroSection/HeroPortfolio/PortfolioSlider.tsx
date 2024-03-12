"use client";
import { EmblaOptionsType } from "embla-carousel";
import { PortfolioCard } from "./PortfolioCard";
import { porfolioData } from "./PortfolioData";
import useEmblaCarousel from "embla-carousel-react";
import { useLocale } from "next-intl";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";

type Locale = "uk" | "en" | "pl";
const OPTIONS: EmblaOptionsType = { loop: true, align: "start" };

export const PortfolioSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const locale = useLocale();

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="embla flex flex-col items-end ">
            <div className="embla__controls mb-12">
                <div className="embla__buttons flex gap-6 ">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
            <div className="pc:w-[540px] overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {porfolioData.map(data => (
                        <div
                            key={data.id}
                            className="embla__slide pc:w-[540px]"
                        >
                            <PortfolioCard
                                data={data[locale as Locale]}
                                img={data.img}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
