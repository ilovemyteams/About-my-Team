"use client";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { PortfolioCard } from "./PortfolioCard";
import { porfolioData } from "./PortfolioData";
import { useLocale } from "next-intl";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../../shared/SliderComponents/CarouselButtons";
import { SliderDotsBox } from "../../shared/SliderComponents/SliderDotsBox";
import { useDotButton } from "../../shared/SliderComponents/SliderDots";

type Locale = "uk" | "en" | "pl";
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

    return (
        <div className="embla overflow-hidden w-portfolioHeroCard tab:w-[50%] tab:min-w-[360px] max-w-[540px] flex flex-col-reverse mt-8 items-start  tab:mt-0 tab:flex-col tab:items-end ">
            <div className="embla__controls tab:mb-6">
                <div className="embla__buttons flex gap-4 ">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <SliderDotsBox
                        scrollSnaps={scrollSnaps}
                        selectedIndex={selectedIndex}
                        sliders={porfolioData}
                        onDotButtonClick={onDotButtonClick}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
            <div
                className="mb-6 tab:mb-0 tab:w-[100%] pc:mb-0 max-w-[540px] tab:min-w-[360px] pc:min-w-[540px] overflow-hidden"
                ref={emblaRef}
            >
                <div className="flex max-w-[540px] tab:w-[100%] tab:min-w-[360px] pc:min-w-[540px]">
                    {porfolioData.map(data => (
                        <div
                            key={data.id}
                            className="embla__slide flex-[0_0_100%] w-full "
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
