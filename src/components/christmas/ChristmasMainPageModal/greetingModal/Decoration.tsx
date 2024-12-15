import { IconBall } from "@/src/components/shared/Icons/christmas/IconBall";
import { IconCandybar } from "@/src/components/shared/Icons/christmas/IconCandybar";
import { IconFourSpike } from "@/src/components/shared/Icons/christmas/IconFourSpike";
import { IconSnowflake } from "@/src/components/shared/Icons/christmas/IconSnowflake";
import { IconStar } from "@/src/components/shared/Icons/christmas/IconStar";
import { IconTree } from "@/src/components/shared/Icons/christmas/IconTree";

export const Decoration = () => {
    return (
        <>
            <IconSnowflake className="absolute w-[70px] h-[78px] text-purple-stroke bottom-[4.5%] left-[3%]" />
            <IconSnowflake className="absolute w-[47px] h-[52px] text-purple-stroke top-[11%] left-[3%]" />
            <IconSnowflake className="absolute w-[59px] h-[65px] text-purple-stroke bottom-[6.3%] right-[14.5%]" />
            <IconSnowflake className="absolute w-[32px] h-[35px] text-purple-stroke top-[5.7%] left-[23%]" />
            <IconSnowflake className="absolute w-[50px] h-[55px] text-purple-stroke bottom-[30%] left-[23%]" />
            <IconSnowflake className="absolute w-[57px] h-[63px] text-purple-stroke top-[25%] right-[7.7%]" />
            <IconSnowflake className="absolute w-[66px] h-[73px] text-purple-stroke top-[9.3%] right-[32%]" />
            <IconFourSpike className="absolute top-0 right-[46%]" />
            <IconBall className="absolute top-0 right-[24%]" />
            <IconCandybar className="absolute top-0 left-[33%]" />
            <IconStar className="absolute top-0 left-[11%]" />
            <IconTree className="absolute top-0 right-[5%]" />
        </>
    );
};
