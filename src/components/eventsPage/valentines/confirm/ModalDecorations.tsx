import React from "react";

import { BigCloudIcon } from "../icons/BigCloudIcon";
import { CupidIcon } from "../icons/CupidIcon";
import { SmallCloudIcon } from "../icons/SmallCloudIcon";
import { SmallHeart } from "../icons/SmallHeart";
import { StarIcon } from "../icons/StarIcon";

export const ModalDecorations = () => {
    return (
        <div className="absolute top-0 left-0 bottom-0 right-0">
            <SmallCloudIcon className="absolute top-[30%] right-[-10px] pc:right-[-25px] desk:right-[-40px] w-[49px] tab:w-[88px] pc:w-[95px] desk:w-[146px]" />
            <BigCloudIcon className="absolute top-[2%] left-[-60px] tab:left-[-110px] w-[100px] tab:w-[220px] desk:w-[250px]" />
            <CupidIcon
                className="absolute top-[30%] left-[1%] w-[77px] h-auto tab:w-[135px] pc:w-[105px] desk:w-[164px] 
            rotate-[-250deg] scale-y-[-1]"
            />
            <StarIcon className="absolute w-[7px] h-auto tab:w-[13px] desk:w-[15px] top-[37%] right-[14%]" />
            <StarIcon className="absolute w-[7px] h-auto tab:w-[13px] desk:w-[15px] top-[39%] right-[10%]" />
            <StarIcon className="absolute w-[9px] h-auto tab:w-[15px] desk:w-[20px] top-[5%] left-[20%]" />
            <StarIcon className="absolute w-[4px] h-auto tab:w-[7px] desk:w-[8px] top-[7%] left-[24%]" />
            <SmallHeart className="absolute text-[#E63354] top-[23%] left-[10%]  w-[7px] h-auto tab:w-[13px] desk:w-[15px]" />
            <SmallHeart className="absolute text-[#E63354] top-[18%] right-[10%]  w-[7px] h-auto tab:w-[13px] desk:w-[15px] scale-x-[-1]" />
            <SmallHeart className="absolute text-[#F98398] bottom-[5%] left-[10%]  w-[7px] h-auto tab:w-[13px] desk:w-[15px]  scale-x-[-1]" />
            <SmallHeart className="absolute text-[#F98398] bottom-[13%] right-[10%]  w-[7px] h-auto tab:w-[13px] desk:w-[15px]" />
        </div>
    );
};
