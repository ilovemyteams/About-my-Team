import { BigCloudIcon } from "../icons/BigCloudIcon";
import { SmallCloudIcon } from "../icons/SmallCloudIcon";
import { StarIcon } from "../icons/StarIcon";

export const Decorations = () => {
    const starWidth = "w-[7px] h-auto tab:w-[13px]";
    return (
        <>
            <SmallCloudIcon
                className="absolute top-[100px] right-4 w-[49px] h-auto 
            tab:top-[183px] tab:right-[38px] tab:w-[88px]"
            />
            <BigCloudIcon
                className="absolute top-[104px] left-[-35px] w-[93px] h-auto 
            tab:top-[209px] tab:left-[-27px] tab:w-[179px]"
            />
            <StarIcon
                className={`absolute top-[85px] right-[75px] ${starWidth} tab:top-[156px] tab:right-[175px]`}
            />
            <StarIcon
                className={`absolute top-[90px] right-[64px] ${starWidth} tab:top-[165px] tab:right-[156px]`}
            />
            <StarIcon
                className={`absolute top-[175px] left-[21x] w-[9px] h-auto  tab:top-[340px] tab:left-[60px] tab:w-[15px]`}
            />
            <StarIcon
                className={`absolute top-[190px] left-[37px] w-[4px] h-auto  tab:top-[370px] tab:left-[90px] tab:w-[7px]`}
            />
        </>
    );
};
