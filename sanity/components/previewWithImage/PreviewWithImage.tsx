import Image from "next/image";
import React from "react";

export const PreviewWithImage = (src: string, alt: string) => {
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                width={250}
                height={100}
                style={{
                    display: "block",
                    aspectRatio: "2/1",
                    objectFit: "cover",
                    objectPosition: "left top",
                }}
            />
        </div>
    );
};
