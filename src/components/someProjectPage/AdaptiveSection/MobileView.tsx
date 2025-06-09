import { AdaptiveImageType } from "@/src/mockedData/portfolioData";

import { ImageFromCloud } from "../../shared/ImageFromCloud";
import { TriggerAnimation } from "./TriggerAnimation";

interface MobileViewProps {
    imageData: AdaptiveImageType;
}

const IMAGE_WIDTH = 236;
const IMAGE_ASPECT_RATIO = 0.503; // 236 / 484

const phoneFrameUrl =
    "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745392825/mobile_edviep.png";

export const MobileView = ({ imageData }: MobileViewProps) => {
    const { height, url, width } = imageData;

    const imageHeight = Math.floor((IMAGE_WIDTH * height) / width);
    return (
        <div className="relative w-[41%] aspect-[236/484] tab:absolute tab:w-[17.5%] tab:bottom-[2%] tab:left-[68%] z-[10]">
            <ImageFromCloud
                src={phoneFrameUrl}
                alt="Mobile phone frame"
                width={236}
                height={484}
                className="h-full w-full object-contain"
            />
            <div className="absolute left-[3%] right-[3%] top-[7%]  rounded-b-[4vw] z-[-1] tab:rounded-b-[min(2vw,_20px)] pc:rounded-b-[24px] desk:rounded-b-[27px]  h-[91%] overflow-clip">
                <TriggerAnimation
                    aspectRatio={IMAGE_ASPECT_RATIO}
                    className="absolute top-0 left-0 right-0"
                >
                    <ImageFromCloud
                        src={url}
                        alt="Mobile view"
                        width={IMAGE_WIDTH}
                        height={imageHeight}
                        className="w-full h-full object-cover object-top"
                    />
                </TriggerAnimation>
            </div>
        </div>
    );
};
