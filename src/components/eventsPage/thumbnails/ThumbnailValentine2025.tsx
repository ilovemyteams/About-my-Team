import Image from "next/image";

import { Decorations } from "../valentines/Decorations";
import { IconBigHeart } from "../valentines/icons/IconBigHeart";
import { ThumbnailBg } from "./ThumbnailBG";

const ThumbnailValentine = () => {
    return (
        <div className="relative w-full max-w-[280px] mx-auto aspect-[280/200] tab:aspect-[300/200] flex overflow-hidden">
            <Image
                src="/images/bgImages/rightTop.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`msms block dark:hidden absolute right-0 top-0 w-[142px] z-[-1] `}
            />
            <Image
                src="/images/bgImages/rightTopLight.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`msms hidden dark:block absolute right-0 top-0 w-[142px] z-[-1] `}
            />
            <IconBigHeart className="w-[100px] ml-4 mt-4" />
            <Decorations />
            <ThumbnailBg />
        </div>
    );
};

export default ThumbnailValentine;
