import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import React from "react";

import { urlForImage } from "@/sanity/lib/image";

import { NoImageHeart } from "../NoImageHeart";

interface ImageComponentProps {
    image: string | undefined | null;
    alt?: string | undefined | null;
    className?: string;
}

export const ImageComponent = ({
    image,
    alt,
    className,
}: ImageComponentProps) => {
    if (!image) {
        return (
            <div
                className={`bg-CTAGradientLight dark:bg-CTAGradient ${className}`}
            >
                <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-0 right-0" />
            </div>
        );
    }

    const dimensions = getImageDimensions(image);
    const url = urlForImage(image).auto("format").fit("max").url();
    const blurUrl = urlForImage(image).width(20).blur(10).url();

    return (
        <div className={`relative ${className}`}>
            <Image
                src={url}
                width={dimensions.width}
                height={dimensions.height}
                sizes="(max-width: 768px) 540px, (max-width: 1280px) 400px, (max-width: 1540) 630px, 730px"
                alt={alt || "alt"}
                className="object-cover w-full h-full"
                placeholder="blur"
                blurDataURL={blurUrl}
            />
        </div>
    );
};
