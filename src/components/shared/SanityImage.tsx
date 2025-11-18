import Image from "next/image";

import { ImageType, SanityImageMetadata } from "@/sanity/types";
import { urlFor } from "@/src/sanity/lib/image";

import { NoImageHeart } from "./NoImageHeart";

interface ImageComponentProps {
    image: ImageType["image"] | null;
    metadata: SanityImageMetadata | null;
    alt?: string | undefined | null;
    className?: string;
    sizes?: string;
    width: number;
    height?: number;
}

const calcHeight = (
    width: number,
    height: number | undefined,
    dimensions: SanityImageMetadata["dimensions"]
) => {
    if (!dimensions || !dimensions.height || !dimensions.width) {
        return width / 1.3;
    }

    return height
        ? height
        : Math.ceil((width * dimensions.height) / dimensions.width);
};

export const SanityImage = ({
    image,
    alt,
    metadata,
    className = "",
    sizes = "45vw",
    width,
    height,
}: ImageComponentProps) => {
    if (!image || !metadata) {
        //default image with brand heart
        return (
            <div
                className={`bg-CTAGradientLight dark:bg-CTAGradient ${className}`}
            >
                <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-0 right-0" />
            </div>
        );
    }

    const { dimensions, lqip } = metadata;

    const renderHeight = calcHeight(width, height, dimensions);

    const url = urlFor(image)
        .width(width)
        .height(renderHeight)
        .auto("format")
        .url();

    const aspectRatio = Math.ceil((width / renderHeight) * 1000) / 1000;
    return (
        <div>
            <Image
                src={url}
                width={width}
                height={renderHeight}
                sizes={`(max-width: 768px), 540px, ${sizes}`}
                alt={alt || "An image without description"}
                className={`${className} object-cover`}
                placeholder="blur"
                blurDataURL={lqip || ""}
                style={{ aspectRatio }}
            />
        </div>
    );
};
