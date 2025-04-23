import React from "react";

import { ImageFromCloud } from "../../shared/ImageFromCloud";

interface MobileViewProps {
    screen: string;
}
export const MobileView = ({ screen }: MobileViewProps) => {
    const mobileMock =
        "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745392825/mobile_edviep.png";

    return (
        <div className="relative w-[41%] aspect-[236/484] tab:absolute tab:w-[17.5%] tab:bottom-[2%] tab:left-[68%] z-[10]">
            <ImageFromCloud
                src={mobileMock}
                alt="Mobile mockup"
                width={236}
                height={484}
                className="h-full w-full object-contain"
            />
            <div className="absolute left-[3%] right-[3%] top-[7%]  rounded-b-[4vw] z-[-1] tab:rounded-b-[min(2vw,_20px)] pc:rounded-b-[24px] desk:rounded-b-[27px]  h-[91%] overflow-clip">
                <div className="absolute top-0 left-0 right-0">
                    <ImageFromCloud
                        src={screen}
                        alt="Mobile view"
                        width={236}
                        height={3060}
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    );
};
