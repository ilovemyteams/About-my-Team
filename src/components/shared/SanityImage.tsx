import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";

import { NoImageHeart } from "./NoImageHeart";

//blurUrl: lqip image from metadata in sanity image
//sizes: image size for non-mobile devices

interface ImageComponentProps {
    src: string | undefined | null;
    alt?: string | undefined | null;
    blurUrl?: string | undefined | null;
    className?: string;
    sizes?: string;
    width: number;
}

export const SanityImage = ({
    src,
    alt,
    blurUrl,
    className,
    sizes = "45vw",
    width,
}: ImageComponentProps) => {
    if (!src) {
        //default image with brand heart
        return (
            <div
                className={`bg-CTAGradientLight dark:bg-CTAGradient ${className}`}
            >
                <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-0 right-0" />
            </div>
        );
    }
    const dimensions = getImageDimensions(src);
    const url = urlFor(src).auto("format").fit("max").url();

    const height = Math.ceil((width * dimensions.height) / dimensions.width);

    return (
        <Image
            src={url}
            width={width}
            height={height}
            sizes={`(max-width: 768px), 540px, ${sizes}`}
            alt={alt || "An image without description"}
            className={`${className} object-cover`}
            placeholder="blur"
            blurDataURL={blurUrl || ""}
        />
    );
};
