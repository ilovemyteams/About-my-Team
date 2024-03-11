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
    const { ...restProps } = props;

    return (
        <button
            className="embla__button--prev w-12 h-12 border-t border-b border-purple-stroke hover:border-red group 
            after:content-[''] after:absolute after:w-[48px] after:h-[48px] after:top-0 after:left-0
            hover:after:transition-opacity hover:after:duration-600 hover:after:ease-out
            after:opacity-0 hover:after:opacity-100 hover:after:blur-[2px] hover:after:rounded-full
            focus:after:opacity-100 focus:after:blur-[2px] focus:after:rounded-full focus:outline-none focus-within:outline-none
            after:bg-purple-stroke03"
            type="button"
            {...restProps}
        >
            <ArrowIcon />
        </button>
    );
};

export const NextButton: React.FC<ButtonType> = props => {
    const { ...restProps } = props;

    return (
        <button
            className="embla__button--next w-12 h-12 border-t border-b border-purple-stroke rotate-180 hover:border-red group "
            type="button"
            {...restProps}
        >
            <ArrowIcon />
        </button>
    );
};
