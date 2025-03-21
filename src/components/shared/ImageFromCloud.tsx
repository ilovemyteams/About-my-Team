"use client";
import { CldImage, CldImageProps } from "next-cloudinary";

const CLOUD_NAME1 = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
const CLOUD_NAME2 = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME2 || "";

interface ImageFromCloudProps extends CldImageProps {
    storage: 1 | 2;
    className?: string;
}

export const ImageFromCloud = ({
    className = "",
    storage,
    ...props
}: ImageFromCloudProps) => {
    const cloudName = storage === 1 ? CLOUD_NAME1 : CLOUD_NAME2;

    return (
        <CldImage
            className={className}
            config={{ cloud: { cloudName } }}
            {...props}
        />
    );
};
