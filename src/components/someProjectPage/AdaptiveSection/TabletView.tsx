import { AdaptiveImageType } from "@/src/mockedData/portfolioData";

import { ImageFromCloud } from "../../shared/ImageFromCloud";
import { TriggerAnimation } from "./TriggerAnimation";
interface TabletViewProps {
    imageData: AdaptiveImageType;
}

const IMAGE_WIDTH = 861;
const IMAGE_ASPECT_RATIO = 1.533; // 861 / 561

const tabletFrameUrl =
    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745399016/laptop_q3fwqs.png";

export const TabletView = ({ imageData }: TabletViewProps) => {
    const { height, url, width } = imageData;

    const imageHeight = Math.floor((IMAGE_WIDTH * height) / width);
    return (
        <div className="w-full aspect-[16/9] mb-6 tab:mb-0 relative">
            <ImageFromCloud
                src={tabletFrameUrl}
                alt="laptop frame"
                width={1143}
                height={638}
                className="h-full w-full object-contain"
            />
            <div className="absolute left-[11%] right-[11%] top-[4%]  z-[-1] h-[91%] overflow-clip">
                <TriggerAnimation
                    aspectRatio={IMAGE_ASPECT_RATIO}
                    className="absolute top-0 left-0 right-0 "
                >
                    <ImageFromCloud
                        src={url}
                        alt="Desktop view"
                        width={IMAGE_WIDTH}
                        height={imageHeight}
                        className="w-full h-auto object-cover object-top"
                    />
                </TriggerAnimation>
            </div>
        </div>
    );
};
