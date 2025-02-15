import { BigCloudIcon } from "../icons/BigCloudIcon";
import { SmallCloudIcon } from "../icons/SmallCloudIcon";
import { StarIcon } from "../icons/StarIcon";

export const Decorations = () => {
    const starWidth = "w-[7px] h-auto tab:w-[13px] pc:w-[9px] desk:w-[15px]";
    return (
        <>
            <div
                aria-label="line for small cloud"
                className="absolute top-0 pc:right-[75px] pc:h-[142px] pc:w-[1px] bg-textHighlight dark:bg-white-100 z-[-1]
                desk:h-[235px] desk:right-[89px]"
            ></div>
            <SmallCloudIcon
                className="absolute top-[100px] right-4 w-[49px] h-auto 
            tab:top-[183px] tab:right-[38px] tab:w-[88px] pc:top-[141px] pc:right-[27px] pc:w-[95px]
            desk:top-[230px] desk:right-[10px] desk:w-[146px]"
            />
            <div
                aria-label="line for big cloud"
                className="absolute top-0 pc:right-[193px] pc:h-[190px] pc:w-[1px] bg-textHighlight dark:bg-white-100 
                desk:h-[320px] desk:right-[260px]"
            ></div>
            <BigCloudIcon
                className="absolute top-[104px] left-[-35px] w-[93px] h-auto 
            tab:top-[209px] tab:left-[-27px] tab:w-[179px] pc:top-[187px] pc:right-[148px] pc:left-[unset] 
            pc:w-[108px] desk:w-[167px] desk:top-[300px] desk:right-[190px] "
            />

            <StarIcon
                className={`absolute top-[85px] right-[75px] ${starWidth} text-redLight dark:text-white-100  tab:top-[156px] tab:right-[175px] 
                pc:top-[129px] pc:right-[23px] desk:top-[210px] desk:right-[40px]`}
            />
            <StarIcon
                className={`absolute top-[90px] right-[64px] ${starWidth} text-redLight dark:text-white-100  tab:top-[165px] tab:right-[156px] 
                pc:top-[136px] pc:right-[10px] desk:top-[220px] desk:right-[25px]`}
            />
            <StarIcon
                className={`absolute top-[175px] left-[21x] w-[9px] h-auto text-redLight dark:text-white-100  tab:top-[340px] tab:left-[60px] tab:w-[15px] 
                    pc:top-[168px] pc:right-[172px] pc:w-[12px] pc:left-[unset]
                    desk:w-[20px] desk:top-[265px] desk:right-[220px]`}
            />
            <StarIcon
                className={`absolute top-[190px] left-[37px] w-[4px] h-auto text-redLight dark:text-white-100  tab:top-[370px] tab:left-[90px] tab:w-[7px] 
                    pc:top-[189px] pc:right-[157px] pc:w-[5px] pc:left-[unset]
                    desk:w-[8px] desk:top-[300px] desk:right-[200px]`}
            />
            <StarIcon
                className={`absolute w-[0px] h-auto text-redLight dark:text-white-100  pc:top-[121px] pc:right-[389px] pc:w-[7px]
                    desk:w-[11px] desk:top-[180px] desk:right-[580px]`}
            />
            <StarIcon
                className={`absolute w-[0px] h-auto text-redLight dark:text-white-100  pc:top-[131px] pc:right-[375px] pc:w-[5px] 
                    desk:w-[8px] desk:top-[200px] desk:right-[560px]`}
            />
        </>
    );
};
