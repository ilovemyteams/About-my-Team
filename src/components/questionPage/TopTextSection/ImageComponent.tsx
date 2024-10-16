import Image from "next/image";
import React from "react";

import { NoImageHeart } from "../../shared/NoImageHeart";

interface ImageComponentProps {
    imgUrl?: string;
    alt?: string;
}

export const ImageComponent = ({ imgUrl, alt }: ImageComponentProps) => {
    if (!imgUrl) {
        return (
            <div className="bg-CTAGradientLight dark:bg-CTAGradient w-full aspect-[1.7]">
                <NoImageHeart className="ml-auto mr-0 w-[45%] h-auto" />
            </div>
        );
    }
    return (
        <Image
            src={imgUrl}
            alt={alt || "decoration image"}
            width={508}
            height={296}
            className="w-full object-cover"
        />
    );
};
