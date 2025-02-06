"use client";

import { useTranslations } from "next-intl";
import { RefObject, useState } from "react";

import { Button } from "../../../shared/Button";
import { PageSection } from "../../../shared/PageSection";
import { HeartLeftPartIcon } from "../icons/HeartLeftPartIcon";
import { HeartRightPartIcon } from "../icons/HeartRightPartIcon";
import { HeroLogo } from "../icons/HeroLogo";
import { Decorations } from "./Decorations";

interface HeroProps {
    heartRef: RefObject<HTMLDivElement>;
    leftPartRef: RefObject<HTMLDivElement>;
    onClickBtn: () => void;
}

export const Hero = ({ heartRef, leftPartRef, onClickBtn }: HeroProps) => {
    const [isDisable, setIsDisable] = useState(false);

    const getTranslation = useTranslations("Valentines");

    const onClick = async () => {
        onClickBtn();
        setIsDisable(true);
    };
    return (
        <PageSection
            className="min-h-[calc(100dvh-78px)] tab:min-h-0 flex flex-col pt-6 pb-[80px] relative
        tab:pt-10 pc:pt-[84px] desk:pt-[180px]"
        >
            <Decorations />

            <div className="w-full tab:mb-[160px] tab:max-w-[800px] mx-auto pc:w-[59%] pc:ml-0 pc:mb-[109px]">
                <HeroLogo />
            </div>
            <div className="grow flex flex-col pc:flex-row pc:gap-[110px]">
                <div
                    className="grow w-[50%] mx-auto flex items-center tab:mb-[50px] tab:justify-end 
                tab:max-w-[362px] pc:max-w-[524px] pc:pl-[90px] desk:pl-[80px] desk:max-w-[530px]"
                >
                    <div
                        className="grid grid-cols-2 justify-center"
                        ref={heartRef}
                    >
                        <div ref={leftPartRef}>
                            <HeartLeftPartIcon className="w-full h-auto" />
                        </div>

                        <HeartRightPartIcon className="w-[138%] h-auto translate-x-[-30.8%] translate-y-[-1%] rotate-[-0.5deg] relative z-[10]" />
                    </div>
                </div>
                <div className="max-w-[444px] grow-0 mx-auto text-purple-200 dark:text-white-200 text-center pc:pt-[84px] pc:mx-0 desk:max-w-[520px] desk:pt-[120px]">
                    <p className="mb-12 tab:text-xl28 desk:text-2xl34 tab:mb-10 pc:mb-[97px] desk:mb-[72px]">
                        {getTranslation("heroText")}
                    </p>
                    <Button onClick={onClick} disabled={isDisable}>
                        {getTranslation("heroBtn")}
                    </Button>
                </div>
            </div>
        </PageSection>
    );
};
