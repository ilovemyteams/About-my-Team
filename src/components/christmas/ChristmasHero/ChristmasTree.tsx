"use client";
import React from "react";

import { IconArrowPresent } from "../../shared/Icons/christmas/IconArrowPresent";
import { IconArrowToys } from "../../shared/Icons/christmas/IconArrowToys";
import { IconHeroTree } from "../../shared/Icons/christmas/IconHeroTree";
import { IconPresentGrey } from "../../shared/Icons/christmas/IconPresentGrey";
import { IconPresentPurple } from "../../shared/Icons/christmas/IconPresentPurple";
import { IconPresentViolet } from "../../shared/Icons/christmas/IconPresentViolet";
import { IconToyBlue } from "../../shared/Icons/christmas/IconToyBlue";
import { IconToyWithCurves } from "../../shared/Icons/christmas/IconToyWithCurves";
import { IconToyWithLines } from "../../shared/Icons/christmas/IconToyWithLines";
import { IconTreeStar } from "../../shared/Icons/christmas/IconTreeStar";
import { IconToyWithSnow } from "../../shared/Icons/IconToyWithSnow";
import { ChristmasPresentButton } from "./ChristmasPresentButton";
import { ChristmasToyButton } from "./ChristmasToyButton";
import { useTranslations } from "next-intl";

export const ChristmasTree = () => {
    // width of tree is not matched by design for huge screens

    const captionTextStyle =
        "text-xs tab:text-lg25 pc:text-base23 desk:text-xl28 text-purple-200 dark:text-white-100";
    const getTranslation = useTranslations("Christmas");

    return (
        <div className=" flex justify-center tab:mt-[-22px] pc:mt-0 desk:pl-[100px]">
            <div className="relative">
                <IconHeroTree className="w-full max-w-[320px] h-auto tab:max-w-full tab:w-[602px] pc:w-[597px] desk:w-[650px]" />
                <ChristmasToyButton
                    id="christmas-tree-star"
                    icon={IconTreeStar}
                    className="absolute w-[34px] h-auto top-0 left-[50%] translate-x-[-50%] translate-y-[-90%] tab:w-[63px] desk:w-[65px] "
                />
                <ChristmasToyButton
                    id="blueBaubleSmall"
                    icon={IconToyBlue}
                    className="top-[25%] left-[42%] w-[23px] tab:w-[43px] desk:w-[47px] "
                />
                <ChristmasToyButton
                    id="blueBaubleLeft"
                    icon={IconToyBlue}
                    className="top-[51%] left-[28%] w-[31px] tab:w-[60px] desk:w-[64px] "
                />
                <ChristmasToyButton
                    id="blueBaubleRight"
                    icon={IconToyBlue}
                    className="rotate-[-9deg] bottom-[29%] right-[25%] w-[31px] tab:w-[60px] desk:w-[64px] "
                    isIconRevert={true}
                />
                <ChristmasToyButton
                    id="baubleWithCurvesTopRight"
                    icon={IconToyWithCurves}
                    className="rotate-[5deg] top-[32%] right-[41%] w-[24px] tab:w-[44px] desk:w-[57px] "
                />
                <ChristmasToyButton
                    id="baubleWithCurvesTopLeft"
                    icon={IconToyWithCurves}
                    className="top-[38%] left-[37%] w-[22px] tab:w-[42px] desk:w-[54px] "
                    isIconRevert={true}
                />
                <ChristmasToyButton
                    id="baubleWithCurvesBottomRight"
                    icon={IconToyWithCurves}
                    className="bottom-[36%] right-[40%] w-[21px] tab:w-[41px] desk:w-[52px]"
                />
                <ChristmasToyButton
                    id="baubleWithCurvesBottomLeft"
                    icon={IconToyWithCurves}
                    className="rotate-[18deg] bottom-[24%] right-[45%] w-[26px] tab:w-[49px] desk:w-[61px] "
                />
                <ChristmasToyButton
                    id="baubleWithLines"
                    icon={IconToyWithLines}
                    className="bottom-[45%] right-[49%] w-[23px] tab:w-[42px] desk:w-[55px] "
                />
                <ChristmasToyButton
                    id="baubleWithSnowRight"
                    icon={IconToyWithSnow}
                    className="top-[44%] right-[33%] w-[22px] tab:w-[42px] desk:w-[54px] "
                />
                <ChristmasToyButton
                    id="baubleWithSnowLeft"
                    icon={IconToyWithSnow}
                    className="rotate-[9deg] bottom-[26%] left-[27%] w-[22px] tab:w-[42px] desk:w-[54px] "
                    isIconRevert={true}
                />
                <ChristmasPresentButton
                    id="greyPresentMiddle"
                    className="bottom-[8%] left-[29%] w-[57px] tab:w-[104px] desk:w-[116px]"
                    icon={IconPresentGrey}
                />
                <ChristmasPresentButton
                    id="greyPresentLeft"
                    className="bottom-[7.5%] left-[9%] w-[53px] tab:w-[99px] desk:w-[108px]"
                    icon={IconPresentGrey}
                    iconStyle="scale-y-[1.2] scale-x-[0.9] skew-y-[10deg] rotate-[20deg]"
                />
                <ChristmasPresentButton
                    id="purplePresentRight"
                    className="bottom-[5%] right-[11%] w-[34px] tab:w-[65px] desk:w-[85px]"
                    icon={IconPresentPurple}
                    iconStyle="rotate-[-15deg]"
                />
                <ChristmasPresentButton
                    id="purplePresentMiddle"
                    className="bottom-[14%] right-[40%] w-[25px] tab:w-[35px] desk:w-[56px]"
                    icon={IconPresentPurple}
                    iconStyle="rotate-[15deg] scale-y-[1.1]"
                />
                <ChristmasPresentButton
                    id="purplePresentLeft"
                    className="bottom-[5%] left-[8%] w-[20px] tab:w-[34px] desk:w-[43px]"
                    icon={IconPresentPurple}
                />
                <ChristmasPresentButton
                    id="greyPresentWider"
                    className="bottom-[10%] right-[31%] w-[38px] tab:w-[64px] desk:w-[77px]"
                    icon={IconPresentGrey}
                    iconStyle="rotate-[20deg] scale-x-[1.1]"
                />
                <ChristmasPresentButton
                    id="violetPresentMiddle"
                    className="bottom-[8%] right-[48%] w-[33px] tab:w-[60px] desk:w-[76px]"
                    icon={IconPresentViolet}
                />
                <ChristmasPresentButton
                    id="violetPresentLeft"
                    className="bottom-[5%] left-[21%] w-[43px] tab:w-[76px] desk:w-[86px]"
                    icon={IconPresentViolet}
                />
                <ChristmasPresentButton
                    id="violetPresentRight"
                    className="bottom-[8%] right-[19%] w-[43px] tab:w-[79px] desk:w-[89px]"
                    icon={IconPresentViolet}
                    iconStyle="rotate-[10deg] scale-y-[1.2]"
                />
                <ChristmasPresentButton
                    id="greyPresentCenter"
                    className="bottom-[6%] right-[40%] w-[36px] tab:w-[66px] desk:w-[70px]"
                    icon={IconPresentGrey}
                    iconStyle="scale-y-[1.2]"
                />
                <div className="absolute top-[-5%] left-0 w-[138px] tab:left-[65%] tab:top-[19%] tab:w-[250px] pc:w-[224px] pc:left-[-5%] desk:w-[276px] desk:left-[-13%] text-center">
                    <p className={captionTextStyle}>
                        {getTranslation("clickToys")}
                    </p>
                    <IconArrowToys
                        className="absolute top-[110%] left-[40%] w-[75px] tab:w-[80px] tab:top-[90%] tab:left-[10%] tab:scale-x-[-1] tab:rotate-[10deg] 
                    pc:scale-x-[1] pc:rotate-[-20deg] pc:top-[85%] pc:left-[68%] desk:w-[97px] h-auto"
                    />
                </div>
                <div className="absolute bottom-[-15%] left-[20%] w-[172px] tab:bottom-[37%] tab:left-[-10%] tab:w-[207px] pc:w-[186px] desk:w-[236px] desk:left-[-13%] text-center">
                    <p className={captionTextStyle}>
                        {getTranslation("clickPresents")}
                    </p>
                    <IconArrowPresent
                        className="absolute bottom-[90%] left-[30%] w-[100px] tab:w-[150px] tab:bottom-[-19%]  tab:left-[55%]
                    tab:rotate-[90deg] tab:translate-x-[-60%] tab:translate-y-[105%] desk:w-[180px] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};
