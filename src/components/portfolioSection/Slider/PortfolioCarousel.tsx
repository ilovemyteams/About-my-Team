"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export function PortfolioCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla ">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex  ">
                    <div className="embla__slide flex-[0_0_100%]">Slide 1</div>
                    <div className="embla__slide flex-[0_0_100%]">Slide 2</div>
                    <div className="embla__slide flex-[0_0_100%]">Slide 3</div>
                    <div className="embla__slide flex-[0_0_100%]">Slide 4</div>
                    <div className="embla__slide flex-[0_0_100%]">Slide 5</div>
                    <div className="embla__slide flex-[0_0_100%]">Slide 6</div>
                </div>
                <button className="embla__prev" onClick={scrollPrev}>
                    Prev
                </button>
                <button className="embla__next" onClick={scrollNext}>
                    Next
                </button>
            </div>
        </div>
    );
}
