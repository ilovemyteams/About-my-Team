import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";
import { ArrowIcon } from "./ArrowIcon";

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
    const { className, disabled, ...restProps } = props;

    return (
        <button
            aria-label="show previous slide button"
            className={`embla__button--prev flex justify-center items-center w-12 h-12 relative
            tab:border-t tab:border-b  group
             icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            ${
                disabled
                    ? "cursor-not-allowed dark:border-purple-stroke dark:text-purple-stroke border-[#B097CE] text-[#B097CE]"
                    : "icon-hover-rounded-purple dark:border-red border-redLight dark:text-red text-redLight group"
            }`}
            type="button"
            {...restProps}
        >
            <ArrowIcon className={className} />
        </button>
    );
};

export const NextButton: React.FC<ButtonType> = props => {
    const { className, disabled, ...restProps } = props;

    return (
        <button
            aria-label="show next slide button"
            className={`embla__button--prev flex justify-center items-center w-12 h-12 rotate-180
            tab:border-t tab:border-b  group
           icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            icon-hover-rounded-purple:active 
            ${
                disabled
                    ? "cursor-not-allowed dark:border-purple-stroke dark:text-purple-stroke border-[#B097CE] text-[#B097CE]"
                    : "icon-hover-rounded-purple dark:border-red border-redLight dark:text-red text-redLight group"
            }`}
            type="button"
            {...restProps}
        >
            <ArrowIcon className={className} />
        </button>
    );
};
