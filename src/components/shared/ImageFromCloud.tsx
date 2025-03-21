"use client";
import { CldImage, CldImageProps } from "next-cloudinary";

const CLOUD_NAME1 = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
const CLOUD_NAME2 = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME2 || "";

interface ImageFromCloudProps extends CldImageProps {
    storage?: "members" | "default";
    className?: string;
}

export const ImageFromCloud = ({
    className = "",
    storage = "default",
    ...props
}: ImageFromCloudProps) => {
    const cloudName = storage === "members" ? CLOUD_NAME1 : CLOUD_NAME2;

    return (
        <CldImage
            className={className}
            config={{ cloud: { cloudName } }}
            {...props}
        />
    );
};
