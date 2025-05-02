"use client";
import { YouTubeEmbed } from "@next/third-parties/google";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

export const ReleaseSlider = ({ videos }: { videos: string[] }) => {
    const options: EmblaOptionsType = {
        loop: true,
    };
    const [emblaRef] = useEmblaCarousel(options, [
        AutoScroll({ playOnInit: true, speed: 1 }),
    ]);

    return (
        <div className="relative embla min-w-full mt-8 pc:mt-[64px] ">
            <div className=" overflow-hidden" ref={emblaRef}>
                <div className=" flex ">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="embla__slide cursor-grabbing flex-[0_0_100%] tab:flex-[0_0_50%] pc:flex-[0_0_45%] w-full px-2"
                        >
                            <YouTubeEmbed videoid={video} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
