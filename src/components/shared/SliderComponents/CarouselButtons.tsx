import { EmblaCarouselType } from "embla-carousel";
import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState,
} from "react";

import { ArrowIcon } from "./ArrowIcon";

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

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
    const { disabled, ...restProps } = props;

    return (
        <button
            disabled={disabled}
            aria-label="show previous slide button"
            className="embla__button--prev flex justify-center items-center w-12 h-12 relative
            tab:border-t tab:border-b group disabled:dark:text-purple-stroke disabled:dark:border-purple-stroke disabled:border-disabledLight disabled:text-disabledLight
            enabled:icon-hover-rounded-purple dark:border-red border-redLight dark:text-red text-redLight group"
            type="button"
            {...restProps}
        >
            <ArrowIcon />
        </button>
    );
};

export const NextButton: React.FC<ButtonType> = props => {
    const { disabled, ...restProps } = props;

    return (
        <button
            disabled={disabled}
            aria-label="show next slide button"
            className="embla__button--prev flex justify-center items-center w-12 h-12 rotate-180
            tab:border-t tab:border-b group disabled:dark:border-purple-stroke disabled:dark:text-purple-stroke disabled:border-disabledLight disabled:text-disabledLight
            enabled:icon-hover-rounded-purple dark:border-red border-redLight dark:text-red text-redLight group"
            type="button"
            {...restProps}
        >
            <ArrowIcon />
        </button>
    );
};
