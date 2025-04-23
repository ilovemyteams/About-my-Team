import React from "react";

import { ImageFromCloud } from "../../shared/ImageFromCloud";

interface StaticViewProps {
    screen: string;
}
export const StaticView = ({ screen }: StaticViewProps) => {
    const phoneFrameUrl =
        "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745392825/mobile_edviep.png";
    return (
        <div className="relative w-[41%] aspect-[236/484] tab:mt-[2%]  tab:w-full overflow-hidden z-[5]">
            <ImageFromCloud
                src={phoneFrameUrl}
                alt="Mobile mockup"
                width={236}
                height={484}
                className="h-full w-full object-contain"
            />
            <div className="absolute left-[3%] right-[3%] top-[7%]  rounded-b-[4vw] z-[-1] tab:rounded-b-[min(2vw,_20px)] pc:rounded-b-[24px] desk:rounded-b-[27px]  h-[91%] overflow-clip">
                <ImageFromCloud
                    src={screen}
                    alt="Mobile view"
                    width={236}
                    height={484}
                    className="w-full h-full object-cover "
                />
            </div>
        </div>
    );
};
