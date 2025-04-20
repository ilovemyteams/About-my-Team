import { SliderDots } from "./SliderDots";

interface SliderNumbersBoxProps {
    scrollSnaps: number[];
    selectedIndex: number;
    onDotButtonClick: (index: number) => void;
}

export const SliderNumbersBox = <T,>({
    scrollSnaps,
    selectedIndex,
    sliders,
    onDotButtonClick,
}: SliderNumbersBoxProps & { sliders: T[] }) => {
    return (
        <div className=" embla__dots flex gap-2 items-center ">
            {scrollSnaps.map((_, index) => (
                <SliderDots
                    key={index}
                    style={{
                        display:
                            selectedIndex === 0
                                ? index === selectedIndex + 2
                                    ? "flex"
                                    : ""
                                : selectedIndex === sliders.length - 1
                                  ? index === selectedIndex - 2
                                      ? "flex"
                                      : ""
                                  : selectedIndex === index ||
                                      selectedIndex - 1 === index ||
                                      selectedIndex + 1 === index
                                    ? "flex"
                                    : "",
                    }}
                    onClick={() => onDotButtonClick(index)}
                    className={`slider-number ${
                        index === selectedIndex ? "slider-number--selected" : ""
                    } 
                   w-7 h-7 flex items-center justify-center font-caviar font-bold text-base 
                   `}
                >
                    {index + 1}
                </SliderDots>
            ))}
        </div>
    );
};
