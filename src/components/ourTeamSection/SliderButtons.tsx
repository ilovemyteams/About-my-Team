import { EmblaCarouselType } from "embla-carousel";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../shared/SliderComponents/CarouselButtons";
import { useDotButton } from "../shared/SliderComponents/SliderDots";
import { SliderDotsBox } from "../shared/SliderComponents/SliderDotsBox";
import { MemberDataItemType } from "../../mockedData/membersData";

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

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

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
