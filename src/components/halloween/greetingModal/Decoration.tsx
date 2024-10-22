import Image from "next/image";

import { IconBooo } from "../../shared/Icons/IconBooo";
import { IconBottomWeb } from "../../shared/Icons/IconBottomWeb";
import { IconGhost } from "../../shared/Icons/IconGhost";
import { IconTopWeb } from "../../shared/Icons/IconTopWeb";

export const Decoration = () => {
    return (
        <>
            <div className="absolute right-[-12px] tab:right-[-22px] pc:right-[-16px] top-[20%] w-[50px] tab:w-[65px]">
                <Image
                    src="/images/pumpkin.png"
                    alt="pumpkin"
                    width={65}
                    height={65}
                />
            </div>
            <div className="absolute left-[-14px] tab:left-[-22px] pc:left-[-33px] bottom-[24%] tab:bottom-[10%] w-[60px] tab:w-[120px]">
                <Image
                    src="/images/pumpkin.png"
                    alt="pumpkin"
                    width={120}
                    height={120}
                />
            </div>
            <IconTopWeb className="absolute top-0 left-0 w-[139px] tab:w-[139px] pc:w-[250px] h-auto " />
            <IconBottomWeb className="absolute bottom-0 right-0 w-[82px] tab:w-[88px] pc:w-[95px] h-auto " />
            <IconBottomWeb className="absolute bottom-0 left-0 w-[82px] pc:w-[100px] scale-x-[-1] h-auto " />
            <IconGhost className="absolute w-[99px] top-[9%] tab:top-[5%] pc:top-[7%] right-[17%] tab:w-[192px] h-auto" />
            <IconBooo className="absolute top-[10%] tab:top-[7%] left-[21%] pc:left-[30%] w-[106px] tab:w-[186px] h-auto text-purple-stroke dark:text-white-200" />
            <IconBooo className="absolute top-[21%] tab:top-[24%] left-[13%] pc:left-[20%] w-[27px] tab:w-[47px] h-auto text-purple-stroke dark:text-white-200" />
            <IconBooo className="absolute top-[23%] tab:top-[28%] left-[30%] pc:left-[34%] w-[35px] tab:w-[71px] rotate-[25deg] h-auto text-purple-stroke dark:text-white-200" />
        </>
    );
};
