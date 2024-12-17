import { IconBall } from "@/src/components/shared/Icons/christmas/IconBall";
import { IconCandybar } from "@/src/components/shared/Icons/christmas/IconCandybar";
import { IconFourSpike } from "@/src/components/shared/Icons/christmas/IconFourSpike";
import { IconSnowflake } from "@/src/components/shared/Icons/christmas/IconSnowflake";
import { IconStar } from "@/src/components/shared/Icons/christmas/IconStar";
import { IconTree } from "@/src/components/shared/Icons/christmas/IconTree";

export const Decoration = () => {
    return (
        <>
            {/* star 9 */}
            <IconSnowflake className="absolute text-purple-strokeLight dark:text-purple-stroke -z-30  w-[42px] h-[46px] tab:w-[70px] tab:h-[78px] top-[13px] left-[205px] tab:bottom-[20px] tab:left-[20px] tab:top-auto pc:bottom-[23px] pc:left-[22px] desk:bottom-[31px] desk:left-[37px]" />
            {/* star 8 */}
            <IconSnowflake className="absolute text-purple-strokeLight dark:text-purple-stroke -z-30  w-[33px] h-[36px] tab:w-[47] tab:h-[52px] left-[100px] top-[121px] tab:left-[16px] tab:top-[56px] pc:left-[25px] pc:top-[54px] desk:left-[29px] desk:top-[43px]" />
            {/* star 7 */}
            <IconSnowflake className="absolute text-purple-strokeLight dark:text-purple-stroke -z-30  w-[31px] h-[34px] tab:w-[59px] tab:h-[65px] left-[41px] bottom-[10px] tab:left-auto tab:right-[65px] tab:bottom-[31px] pc:right-[109px] pc:bottom-[33px] desk:right-[159px] desk:bottom-[34px]" />
            {/* star 11 */}
            <IconSnowflake className="absolute text-purple-strokeLight dark:text-purple-stroke -z-30  w-[32px] h-[35px] left-[43px] top-[20px] tab:left-[128px] tab:top-[29px] pc:left-[173px] pc:top-[29px] desk:left-[189px] desk:top-[32px]" />
            {/* star 6 */}
            <IconSnowflake className="absolute text-purple-strokeLight dark:text-purple-stroke -z-30  w-[27px] h-[30px] tab:w-[50px] tab:h-[55px] bottom-[158px] left-[20px] tab:bottom-[149px] tab:left-[140px] pc:bottom-[149px] pc:left-[173px] desk:bottom-[132px] desk:left-[205px]" />
            {/* star 10 */}
            <IconSnowflake className="absolute text-purple-strokeLight dark:text-purple-stroke -z-30  w-[22px] h-[25px] tab:w-[45px] tab:h-[50px] pc:w-[57px] pc:h-[63px] right-[17px] bottom-[133px] tab:top-[120px] tab:right-[36px] tab:bottom-auto pc:top-[113px] pc:right-[29px] desk:top-[125px] desk:right-[28px]" />
            {/* star 5 */}
            <IconSnowflake className="absolute text-purple-strokeLight dark:text-purple-stroke -z-30 w-[40px] h-[44px] tab:w-[66px] tab:h-[73px] top-[112px] right-[25px] tab:top-[47px] tab:right-[191px] pc:right-[236px] desk:top-[37px] desk:right-[272px]" />
            {/* star 12 mobile only*/}
            <IconSnowflake className="absolute text-purple-strokeLight dark:text-purple-stroke -z-30  w-[38px] h-[41px] bottom-[16px] right-[80px] tab:hidden" />

            <IconFourSpike className="absolute text-purple-strokeLight dark:text-purple-stroke -z-20 w-[46px] h-[152px] -top-[27px] left-[157px] tab:w-[60px] tab:h-[196px] tab:-top-[64px] tab:left-[303px] pc:-top-[54px] pc:left-[349px] desk:-top-[73px] desk:left-[395px]" />
            <IconBall className="absolute text-purple-strokeLight dark:text-purple-stroke -z-20 w-[36px] h-[119px] top-0 left-[277px] tab:w-[50px] tab:h-[163px] tab:-top-[10px] tab:left-[480px] pc:-top-[17px] pc:left-[522px] desk:-top-[36px] desk:left-[612px] " />
            <IconCandybar className="absolute text-purple-strokeLight dark:text-purple-stroke -z-20 w-[30px] h-[173px] top-0 left-[88px] tab:w-[35px] tab:h-[204px] tab:-top-[20px] tab:left-[197px] pc:-top-[36px] pc:left-[244px] desk:-top-[60px] desk:left-[266px]" />

            <IconStar className="absolute text-purple-strokeLight dark:text-purple-stroke -z-20 w-[36px] h-[241px] -top-[85px] left-[16px] tab:w-[61px] tab:h-[401px] tab:-top-[8px] tab:left-[47px] pc:top-0 pc:left-[92px] dark:desk:left-[63px]" />
            <IconTree className="absolute text-purple-strokeLight dark:text-purple-stroke -z-20 w-[40px] h-[215px] -top-[55px] left-[221px] tab:w-[71px] tab:h-[450px] tab:-top-[4px] tab:left-[567px] pc:top-0 pc:left-[641px] desk:-top-[15px] desk:left-[747px]" />
        </>
    );
};
