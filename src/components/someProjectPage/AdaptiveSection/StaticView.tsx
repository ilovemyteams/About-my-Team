import React from "react";

import { ImageFromCloud } from "../../shared/ImageFromCloud";

interface StaticViewProps {
    screen: string;
}
export const StaticView = ({ screen }: StaticViewProps) => {
    const mobileMock =
        "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1745339379/mobile_hundsh.png";
    return (
        <div className="relative w-[41%] aspect-[236/484] tab:mt-[2%]  tab:w-full overflow-hidden">
            <ImageFromCloud
                src={mobileMock}
                alt="Mobile mockup"
                width={236}
                height={484}
                className="h-full w-full object-contain"
            />
            <div className="absolute left-[4.3%] right-[3.9%] top-[7.5%] tab:top-[7.2%] tab:right-[4%] rounded-b-[4vw] tab:rounded-b-[min(2vw,_20px)] pc:rounded-b-[24px] desk:rounded-b-[27px]  h-[90%] overflow-clip">
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
