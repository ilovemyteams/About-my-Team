import { BigCloudIcon } from "../icons/BigCloudIcon";
import { CupidIcon } from "../icons/CupidIcon";
import { SmallCloudIcon } from "../icons/SmallCloudIcon";
import { StarIcon } from "../icons/StarIcon";
import { FlyingEnvelope } from "../shared/FlyingEnvelope";

export const Decorations = () => {
    return (
        <>
            <div
                aria-label="line for small cloud"
                className="absolute top-0 right-[34px] h-[22px] w-[1px] dark:bg-textHighlight bg-white-100 z-[-1]"
            ></div>
            <SmallCloudIcon className="absolute top-[21px] right-2 w-[49px] h-auto " />
            <div
                aria-label="line for big cloud"
                className="absolute top-0 right-[68px] h-[60px] w-[1px] dark:bg-textHighlight bg-white-100 z-[-1] "
            ></div>
            <BigCloudIcon className="absolute top-[50px] right-[38px] w-[73px] h-auto" />
            <div
                aria-label="line for cupid"
                className="absolute top-0 right-[108px] h-[40px] w-[1px] dark:bg-textHighlight bg-white-100 z-[-1] "
            ></div>
            <CupidIcon className="w-[80px]" />
            <StarIcon
                className={`absolute top-[85px] right-[75px] w-[7px] dark:text-redLight text-white-100`}
            />
            <StarIcon
                className={`absolute top-[90px] right-[64px] w-[9px] dark:text-redLight text-white-100 `}
            />
            <StarIcon
                className={`absolute top-[145px] left-[41px] w-[9px] h-auto dark:text-redLight text-white-100 z-[2]`}
            />
            <StarIcon
                className={`absolute top-[154px] left-[37px] w-[6px] h-auto dark:text-redLight text-white-100 z-[2]`}
            />
            <StarIcon
                className={`absolute w-[7px] top-[30px] left-[54px] h-auto dark:text-redLight text-white-100 z-[2]`}
            />
            <FlyingEnvelope className="absolute rotate-[-35deg] h-8 bottom-5 right-1" />
            <FlyingEnvelope className="absolute rotate-[-30deg] h-6 bottom-10 right-[80px]" />
        </>
    );
};
