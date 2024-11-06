import { EmblaCarouselType } from "embla-carousel";
import { useSearchParams } from "next/navigation";
import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

type UseDotButtonType = {
    selectedIndex: number;
    scrollSnaps: number[];
    onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined,
    paramName: string
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const isFirstRender = useRef(true);
    const searchParams = useSearchParams();

    useEffect(() => {
        const slideIdFromParams = searchParams.get(paramName);
        if (slideIdFromParams && Number(slideIdFromParams) !== selectedIndex) {
            setSelectedIndex(Number(slideIdFromParams));
        }
    }, [paramName, searchParams, selectedIndex]);

    const updateSlideIdInURL = useCallback(
        (index: number) => {
            const url = new URL(window.location.href);
            url.searchParams.set(paramName, index.toString());
            window.history.pushState({}, "", url);
        },
        [paramName]
    );

    useEffect(() => {
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
    }, [emblaApi, selectedIndex, updateSlideIdInURL]);

    useEffect(() => {
        if (isFirstRender.current && emblaApi) {
            emblaApi.scrollTo(selectedIndex, true);
            isFirstRender.current = false;
        }
    }, [emblaApi, selectedIndex]);

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);
    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
    };
};

type PropType = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >
>;

export const SliderDots: React.FC<PropType> = props => {
    const { children, ...restProps } = props;

    return (
        <button
            aria-label="show next or previous slide button"
            type="button"
            {...restProps}
        >
            {children}
        </button>
    );
};
