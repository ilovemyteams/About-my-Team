import Image from "next/image";

import { IconBooo } from "../shared/Icons/IconBooo";
import { IconBottomWeb } from "../shared/Icons/IconBottomWeb";
import { IconGhost } from "../shared/Icons/IconGhost";
import { IconTopWeb } from "../shared/Icons/IconTopWeb";
import { ThumbnailBg } from "./ThumbnailBG";

export const ThumbnailHalloween = () => {
    return (
        <div className="relative  w-auto h-[200px] flex">
            <div className="absolute right-[-5%] top-[-8%] w-[17%]">
                <Image
                    src="/images/pumpkin.png"
                    alt="pumpkin"
                    width={65}
                    height={65}
                />
            </div>
            <div className="absolute left-[-4%] bottom-[33%] w-[14%] z-10">
                <Image
                    src="/images/pumpkin.png"
                    alt="pumpkin"
                    width={120}
                    height={120}
                />
            </div>

            <IconTopWeb className="absolute top-0 left-0 w-[33%] h-auto text-grey dark:text-greyLight z-10" />
            <IconBottomWeb className="absolute bottom-0 right-0 w-[82px] tab:w-[13%] h-auto text-grey dark:text-greyLight   z-10" />
            <IconBottomWeb className="absolute bottom-0 left-0 w-[13%] scale-x-[-1] h-auto text-grey dark:text-greyLight  z-10" />
            <IconGhost className="w-[37%] h-auto absolute top-[31%] right-[8%] z-10" />

            <IconBooo className="absolute top-[18%] left-[16%] rotate-[-15deg] w-[37%] h-auto dark:text-purple-stroke text-white-200 z-10" />
            <IconBooo className="absolute top-[69%] left-[27%] rotate-[15deg] w-[23%] h-auto dark:text-purple-stroke text-white-200 z-10" />
            <IconBooo className="absolute top-[52%] left-[35%] w-[12%] h-auto dark:text-purple-stroke text-white-200 z-10" />
            <ThumbnailBg />
        </div>
    );
};
