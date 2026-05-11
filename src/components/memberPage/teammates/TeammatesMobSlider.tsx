"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "@/src/components/shared/SliderComponents/CarouselButtons";
import { useDotButton } from "@/src/components/shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "@/src/components/shared/SliderComponents/SliderDotsBox";
import { membersData } from "@/src/mockedData/membersData";
import { getTeammates } from "@/src/utils/getTeammates";
import { Project } from "@/types/Projects";

import { OneSlideStack, STACKS_PER_SLIDE } from "./OneSlideStack";

interface TeammatesProps {
    projects: Project[];
    id: string;
}

const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
};

export const TeammatesMobSlider = ({ projects, id }: TeammatesProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    const teammates = getTeammates(membersData, projects, id);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);
    const technologiesAmount = teammates.length;

    return (
        <div className="relative embla min-w-full ">
            <div className="overflow-hidden" ref={emblaRef}>
                <ul className="flex gap-0">
                    <OneSlideStack projects={projects} id={id} />
                </ul>
            </div>
            {technologiesAmount > STACKS_PER_SLIDE && (
                <div className="embla__controls right-0 mt-[16px]">
                    <div className="embla__buttons flex justify-center">
                        <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                            className="tab:border-0"
                        />
                        <SliderDotsBox
                            scrollSnaps={scrollSnaps}
                            selectedIndex={selectedIndex}
                            sliders={teammates}
                            onDotButtonClick={onDotButtonClick}
                            className="tab:flex"
                        />
                        <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                            className="tab:border-0"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
