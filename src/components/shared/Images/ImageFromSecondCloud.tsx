"use client";
import { CldImage, CldImageProps } from "next-cloudinary";

const CLOUD_NAME2 = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME2 || "";

interface ImageFromSecondCloudProps extends CldImageProps {
    className?: string;
}

export const ImageFromSecondCloud = ({
    className = "",
    ...props
}: ImageFromSecondCloudProps) => {
    return (
        <CldImage
            className={className}
            config={{ cloud: { cloudName: CLOUD_NAME2 } }}
            {...props}
        />
    );
};
