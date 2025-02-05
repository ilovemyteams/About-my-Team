import Image from "next/image";
import { useTranslations } from "next-intl";

import { PageSection } from "../../shared/PageSection";
import { Balloon } from "./Balloon";
import { IconArrowClickBalloon } from "./IconArrowClickBalloon";

export const SecondScene = () => {
    const getTranslation = useTranslations("Valentine");

    return (
        <PageSection className="pt-3 pb-11 tab:pb-[100px]">
            <h2 className="font-caviar text-purple-200 font-bold dark:text-grey text-2xl tab:text-4xl pc:text-5xl desk:text-6xlt">
                {getTranslation("secondSceneTitle")}
            </h2>
            <div
                id="balloons"
                className="relative flex mt-4 tab:mt-6 h-[397px] w-[288px] tab:w-[718px] tab:h-[920px] mx-auto"
            >
                <p
                    className="ml-auto mr-0 tab:mr-[86px] font-segoe text-xs tab:text-base dark:text-grey text-purple-200 
                mt-6 tab:mt-0"
                >
                    {getTranslation("secondSceneHint")}
                </p>
                <IconArrowClickBalloon
                    className="absolute dark:text-grey text-purple-200 top-10 left-[199px] 
                w-[47px] tab:w-[51px] h-auto tab:top-[20px] tab:left-[484px]"
                />

                <Balloon
                    heartPNG="/images/valen/pinkBalloon.png"
                    id="pinkBalloon"
                    className="w-[66.5px] tab:w-[164px] h-auto rotate-[22.31deg] absolute top-[226px] left-[114px] z-[1]
                    tab:top-[524px] tab:left-[314px]"
                />
                <Balloon
                    heartPNG="/images/valen/pinkBalloon.png"
                    id="pinkBalloon"
                    className="w-[66.5px] tab:w-[179px] h-auto rotate-[-2.31deg] absolute top-[100px] left-[70px] z-[2]
                    tab:top-[140px] tab:left-[162px]"
                />
                <Balloon
                    heartPNG="/images/valen/redBalloon.png"
                    id="pinkBalloon"
                    className="w-[72px] tab:w-[196px] h-auto rotate-[4.44deg] absolute top-[203px] left-[50px] z-[1]
                    tab:top-[410px] tab:left-[97px] tab:rotate-[-4.44deg]"
                />
                <Balloon
                    heartPNG="/images/valen/redBalloon.png"
                    id="pinkBalloon"
                    className="w-[68px] tab:w-[186px] h-auto rotate-[23.84deg] absolute top-[144px] left-[193px] z-[1]
                    tab:top-[230px] tab:left-[492px] "
                />
                <Balloon
                    heartPNG="/images/valen/magentaBalloon.png"
                    id="pinkBalloon"
                    className="w-[66px] tab:w-[171px] h-auto rotate-[-25.29deg] absolute top-[143px] left-[16px] z-[1]
                    tab:top-[224px] tab:left-[13px]"
                />
                <Balloon
                    heartPNG="/images/valen/magentaBalloon.png"
                    id="pinkBalloon"
                    className="w-[68px] tab:w-[178px] h-auto rotate-[5deg] absolute top-[152px] left-[127px] z-[1]
                    tab:top-[264px] tab:left-[315px]"
                />
                <Balloon
                    heartPNG="/images/valen/magentaBalloon.png"
                    id="pinkBalloon"
                    className="w-[66px] tab:w-[171px] h-auto absolute top-[56px] left-[120px] z-[1]
                    tab:top-[2px] tab:left-[293px]"
                />
                <Balloon
                    heartPNG="/images/valen/purpleBalloon.png"
                    id="pinkBalloon"
                    className="w-[64px] tab:w-[174px] h-auto rotate-[3deg] absolute top-[211px] left-[183px] z-[1]
                    tab:top-[414px] tab:left-[466px]"
                />
                <Balloon
                    heartPNG="/images/valen/purpleBalloon.png"
                    id="pinkBalloon"
                    className="w-[68px] tab:w-[174px] h-auto  absolute top-[80px] left-[182px] z-[1]
                    tab:top-[60px] tab:left-[466px]"
                />
                <Balloon
                    heartPNG="/images/valen/purpleBalloon.png"
                    id="pinkBalloon"
                    className="w-[71px] tab:w-[184px] h-auto rotate-[-34deg] absolute top-[64px] left-[24px] z-[1]
                    tab:top-[14px] tab:left-[34px]"
                />
                <Image
                    src="/images/valen/box&ribbons.png"
                    alt="box with balloon's ribbons "
                    width={873}
                    height={1417}
                    className="h-[279px] tab:h-[775px] w-auto absolute bottom-0 left-1/2 -translate-x-1/2 "
                />
            </div>
        </PageSection>
    );
};
