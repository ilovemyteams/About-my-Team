import React from "react";

import { HeroMediaType } from "@/src/mockedData/portfolioData";

import { ImageFromCloud } from "../../shared/ImageFromCloud";

interface HeroMediaProps extends HeroMediaType {
    name: string;
}

export const HeroMedia = ({ type, url, name, poster }: HeroMediaProps) => {
    if (type === "image") {
        return (
            <div>
                <ImageFromCloud
                    src={url}
                    alt={name}
                    width={668}
                    height={408}
                    className="w-full h-auto aspect-[288/176] object-cover"
                />
            </div>
        );
    }

    return (
        <div>
            <video
                playsInline
                autoPlay
                loop
                muted
                preload="auto"
                poster={poster}
                className="w-full h-auto object-cover aspect-[288/176]"
            >
                <source src={url} type="video/mp4" />
            </video>
        </div>
    );
};
