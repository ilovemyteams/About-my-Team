import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { ArrowIcon } from "../../portfolioSection/Slider/ArrowIcon";
import { CircleHoverWrapper } from "../CircleHoverWrapper";

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

type ButtonType = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>;

export const PrevButton: React.FC<ButtonType> = props => {
    const { ...restProps } = props;

    return (
        <CircleHoverWrapper className="w-[48px] h-[48px]">
            <button
                className="embla__button--prev flex justify-center items-center w-12 h-12 border-t border-b border-red group cursor-pointer"
                type="button"
                {...restProps}
            >
                <ArrowIcon />
            </button>
        </CircleHoverWrapper>
    );
};

export const NextButton: React.FC<ButtonType> = props => {
    const { ...restProps } = props;

    return (
        <CircleHoverWrapper className="w-[48px] h-[48px]">
            <button
                className="embla__button--prev flex justify-center items-center w-12 h-12 rotate-180 border-t border-b border-red group cursor-pointer"
                type="button"
                {...restProps}
            >
                <ArrowIcon />
            </button>
        </CircleHoverWrapper>
    );
};
