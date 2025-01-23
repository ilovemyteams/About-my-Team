import { IconChrismasBranch } from "../shared/Icons/IconChristmasBranch";
import { IconChristmasBubbles } from "../shared/Icons/IconChristmasBubbles";
import { IconChristmasLights } from "../shared/Icons/IconChristmasLights";
import { IconChristmasTree } from "../shared/Icons/IconChristmasTree";
import { ThumbnailBg } from "./ThumbnailBG";
export const ThumbnailChristmas = () => {
    return (
        <div className="relative w-full max-w-[280px] mx-auto aspect-[280/200] tab:aspect-[300/200] flex">
            <IconChristmasTree className="absolute w-auto h-full bottom-[-.5rem] right-[7%] z-[3]" />
            <IconChristmasBubbles className="absolute w-[30%] h-auto bottom-0 left-0 z-[2]" />
            <IconChristmasLights className="absolute w-[37%] h-auto top-0 right-0 z-[4]" />
            <IconChrismasBranch className="absolute w-[54%] h-auto top-0 left-0" />
            <ThumbnailBg />
        </div>
    );
};
