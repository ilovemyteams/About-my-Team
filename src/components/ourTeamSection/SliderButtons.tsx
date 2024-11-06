import { EmblaCarouselType } from "embla-carousel";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

import { usePreviousURL } from "@/src/utils/PreviousURLContext";

import { MemberDataItemType } from "../../mockedData/membersData";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../shared/SliderComponents/SliderDotsBox";

interface SliderButtonsProps {
    membersData: MemberDataItemType[];
    emblaApi: EmblaCarouselType | undefined;
}
export const SliderButtons = ({
    emblaApi,
    membersData,
}: SliderButtonsProps) => {
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);
    const searchParams = useSearchParams();

    const { slideId, setSlideId } = usePreviousURL();
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const updateSlideIdInURL = useCallback(
        (index: number) => {
            const url = new URL(window.location.href);
            url.searchParams.set("slideId", index.toString());
            window.history.pushState({}, "", url);
            setSlideId(index);
        },
        [setSlideId]
    );

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            if (emblaApi) {
                // Go to slide, when change locale
                const slideFromParam = searchParams.get("slideId");

                const slideToScroll = slideFromParam
                    ? Number(slideFromParam)
                    : slideId;

                emblaApi.scrollTo(slideToScroll, true);
                setSlideId(slideToScroll);
                isFirstRender.current = false;
            }
        } else {
            if (emblaApi) {
                // Reset the slider to the first slide whenever optionType changes
                console.log(
                    "Reset the slider to the first slide whenever optionType changes"
                );
                emblaApi.scrollTo(slideId);
            }
        }
        // if (!isFirstRender.current && emblaApi) {
        //     // Reset the slider to the first slide whenever optionType changes
        //     emblaApi.scrollTo(slideId);
        // } else {

        //     isFirstRender.current = false;
        // }
        if (emblaApi) {
            const onSelect = () => {
                const index = emblaApi.selectedScrollSnap();
                updateSlideIdInURL(index);
            };
            emblaApi.on("select", onSelect);
            return () => {
                emblaApi.off("select", onSelect);
            };
        }
    }, [emblaApi, updateSlideIdInURL, slideId]);

    return (
        <div className="embla__controls  mt-[16px]  tab:absolute tab:top-[-80px] tab:right-0">
            <div className="embla__buttons flex justify-between gap-4 w-[176px] mx-[auto] tab:w-[120px]">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                />
                <SliderDotsBox
                    scrollSnaps={scrollSnaps}
                    selectedIndex={selectedIndex}
                    sliders={membersData}
                    onDotButtonClick={onDotButtonClick}
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                />
            </div>
        </div>
    );
};
