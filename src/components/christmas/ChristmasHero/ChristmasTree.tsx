"use client";
import React from "react";

import { IconTree } from "../../shared/Icons/IconTree";
import { ChristmasToyButton } from "./ChristmasToyButton";
import { IconStar } from "./christmasToys/IconStar";
import { IconToyBlue } from "./christmasToys/IconToyBlue";

export const ChristmasTree = () => {
    // width of tree is not matched by design for huge screens

    return (
        <div className=" flex justify-center pt-[80px] tab:pt-[120px] pc:pt-[50px] pc:pl-[50px]">
            <div className="relative">
                <IconTree className="w-[249px] h-auto tab:w-[468px] pc:w-[464px] desk:w-[505px]" />
                <ChristmasToyButton
                    id="christmas-tree-star"
                    icon={IconStar}
                    className="absolute w-[34px] h-auto top-0 left-[50%] translate-x-[-50%] translate-y-[-90%] tab:w-[63px] desk:w-[65px] "
                />
                <ChristmasToyButton
                    id="blueBaubleSmall"
                    icon={IconToyBlue}
                    className="top-[11%] left-[42%] w-[23px] tab:w-[43px] desk:w-[56px] "
                />
                <ChristmasToyButton
                    id="blueBaubleLeft"
                    icon={IconToyBlue}
                    className="top-[43%] left-[25%] w-[31px] tab:w-[60px] desk:w-[77px] "
                />
            </div>
        </div>
    );
};
