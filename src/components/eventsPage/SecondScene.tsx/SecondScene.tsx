import Image from "next/image";
import { useTranslations } from "next-intl";

import { PageSection } from "../../shared/PageSection";
import { Balloon } from "./Balloon";
import { IconArrowClickBalloon } from "./IconArrowClickBalloon";

export const SecondScene = () => {
    const getTranslation = useTranslations("Valentine");

    return (
        <PageSection className="pt-3 pb-11 tab:pb-[100px] desk:pb-[140px]">
            <h2 className="font-caviar text-purple-200 font-bold dark:text-grey text-2xl tab:text-4xl pc:text-5xl desk:text-6xlt">
                {getTranslation("secondSceneTitle")}
            </h2>
            <div
                id="balloons"
                className="relative flex mt-4 tab:mt-6 pc:mt-[64px] h-[397px] w-[288px] 
                tab:w-[718px] tab:h-[920px] pc:w-[1026px] pc:h-[1364px] desk:w-[1336px] desk:h-[1702px] mx-auto"
            >
                <p
                    className="ml-auto mr-0 tab:mr-[86px] pc:mr-[120px] desk:mr-[210px] font-segoe text-xs tab:text-base pc:text-xl desk:text-2xl dark:text-grey text-purple-200 
                mt-6 tab:mt-0"
                >
                    {getTranslation("secondSceneHint")}
                </p>
                <IconArrowClickBalloon
                    className="absolute dark:text-grey text-purple-200 top-10 left-[199px] 
                w-[47px] tab:w-[51px] pc:w-[74px] desk:w-[92px] h-auto tab:top-5 tab:left-[484px] pc:top-7 pc:left-[685px] desk:left-[890px]"
                />

                <Balloon
                    heartPNG="/images/valen/pinkBalloon.png"
                    id="pinkBalloon"
                    className="w-[66.5px] tab:w-[164px] pc:w-[240px] desk:w-[293px] h-auto rotate-[22.31deg] absolute top-[226px] left-[114px] z-[1]
                    tab:top-[524px] tab:left-[314px] pc:top-[725px] pc:left-[400px] desk:top-[885px] desk:left-[530px]"
                />
                <Balloon
                    heartPNG="/images/valen/pinkBalloon.png"
                    id="pinkBalloon"
                    className="w-[66.5px] tab:w-[179px] pc:w-[252px] desk:w-[315px] h-auto rotate-[-2.31deg] absolute top-[100px] left-[70px] z-[2]
                    tab:top-[140px] tab:left-[162px] pc:top-[200px] pc:left-[225px] desk:top-[245px] desk:left-[308px]"
                />
                <Balloon
                    heartPNG="/images/valen/redBalloon.png"
                    id="pinkBalloon"
                    className="w-[72px] tab:w-[196px] pc:w-[265px] desk:w-[342px] h-auto rotate-[4.44deg] absolute top-[203px] left-[50px] z-[1]
                    tab:top-[410px] tab:left-[97px] pc:top-[600px] pc:left-[134px] desk:top-[745px] desk:left-[184px] tab:rotate-[-4.44deg]"
                />
                <Balloon
                    heartPNG="/images/valen/redBalloon.png"
                    id="pinkBalloon"
                    className="w-[68px] tab:w-[186px] pc:w-[252px] desk:w-[325px] h-auto rotate-[23.84deg] absolute top-[144px] left-[193px] z-[1]
                    tab:top-[230px] tab:left-[492px] pc:top-[358px] pc:left-[722px] desk:top-[445px] desk:left-[922px]"
                />
                <Balloon
                    heartPNG="/images/valen/magentaBalloon.png"
                    id="pinkBalloon"
                    className="w-[66px] tab:w-[171px] pc:w-[245px] desk:w-[310px] h-auto rotate-[-25.29deg] absolute top-[143px] left-[16px] z-[1]
                    tab:top-[224px] tab:left-[13px] pc:top-[358px] pc:left-[9px] desk:top-[465px] desk:left-[40px]"
                />
                <Balloon
                    heartPNG="/images/valen/magentaBalloon.png"
                    id="pinkBalloon"
                    className="w-[68px] tab:w-[178px] pc:w-[253px] desk:w-[326px] h-auto rotate-[5deg] absolute top-[152px] left-[127px] z-[1]
                    tab:top-[264px] tab:left-[315px] pc:top-[388px] pc:left-[458px] desk:top-[485px] desk:left-[588px]"
                />
                <Balloon
                    heartPNG="/images/valen/magentaBalloon.png"
                    id="pinkBalloon"
                    className="w-[66px] tab:w-[171px] pc:w-[246px] desk:w-[310px] h-auto absolute top-[56px] left-[120px] z-[1]
                    tab:top-[2px] tab:left-[293px] pc:top-[8px] pc:left-[424px] desk:top-[5px] desk:left-[552px]"
                />
                <Balloon
                    heartPNG="/images/valen/purpleBalloon.png"
                    id="pinkBalloon"
                    className="w-[64px] tab:w-[174px] pc:w-[235px] desk:w-[294px] h-auto rotate-[3deg] absolute top-[211px] left-[183px] z-[1]
                    tab:top-[414px] tab:left-[466px] pc:top-[635px] pc:left-[678px] desk:top-[795px] desk:left-[868px]"
                />
                <Balloon
                    heartPNG="/images/valen/purpleBalloon.png"
                    id="pinkBalloon"
                    className="w-[68px] tab:w-[174px] pc:w-[250px] desk:w-[311px] h-auto  absolute top-[80px] left-[182px] z-[1]
                    tab:top-[60px] tab:left-[466px] pc:top-[101px] pc:left-[676px] desk:top-[120px] desk:left-[874px]"
                />
                <Balloon
                    heartPNG="/images/valen/purpleBalloon.png"
                    id="pinkBalloon"
                    className="w-[71px] tab:w-[184px] pc:w-[263px] desk:w-[328px] h-auto rotate-[-34deg] absolute top-[64px] left-[24px] z-[1]
                    tab:top-[14px] tab:left-[34px] pc:top-[39px] pc:left-[40px] desk:top-[40px] desk:left-[78px]"
                />
                <Image
                    src="/images/valen/box&ribbons.png"
                    alt="box with balloon's ribbons "
                    width={873}
                    height={1417}
                    className="h-[279px] tab:h-[775px] pc:h-[1129px] desk:h-[1418px] w-auto absolute bottom-0 left-1/2 -translate-x-1/2 "
                />
            </div>
        </PageSection>
    );
};
