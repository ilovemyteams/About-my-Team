"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { PageSection } from "../../../shared/PageSection";
import { EasterCertificate } from "../confirmCertificate/EasterCertificate";
import { IconGlaze } from "../icons/IconGlaze";
import { EggsScene } from "./EggsScene";

export const EasterHeroSection = () => {
    const getTranslation = useTranslations("EasterEvent");
    const [startAnimation, setStartAnimation] = useState(false);
    const [isEggBroken, setIsEggBroken] = useState(false);

    const onStartAnimation = () => setStartAnimation(true);
    const onEndAnimation = () => setStartAnimation(false);

    const onBrokenEgg = () => setIsEggBroken(true);
    const onFixEgg = () => setIsEggBroken(false);

    return (
        <div className="min-h-[calc(100dvh_-_78px)] flex flex-col pc:min-h-dvh pc:mb-[100px]">
            <IconGlaze className="w-full h-auto mb-2 tab:mb-[-20px] pc:mb-[-6%]  shrink-0 text-easterGlaze" />
            <PageSection className="h-full grid grid-rows-[auto,1fr]  grow shrink pb-[80px] tab:pb-[100px] pc:pb-0 ">
                <h1 className="text-center font-caviar font-bold text-3xl28 tab:text-6xlt pc:text-7xl desk:text-9xl text-purple-200 dark:text-white-100 mb-4 tab:mb-[48px] desk:mb-[56px] pc:text-left">
                    {getTranslation("heroTitle")}
                </h1>
                <div className=" flex flex-col pc:flex-row pc:justify-between">
                    <div className=" grow shrink relative flex items-center justify-center mb-[clamp(28px,_6dvh,_56px)] tab:mb-[clamp(80px,_6dvh,_120px)] pc:mb-[clamp(50px,_6dvh,_80px)] pc:grow-0">
                        <div className="max-w-[80%] h-full aspect-[140/127] mx-auto tab:max-w-[550px] pc:max-w-none pc:max-h-[500px]">
                            <EggsScene
                                startAnimation={startAnimation}
                                onEndAnimation={onEndAnimation}
                                onBrokenEgg={onBrokenEgg}
                                isEggBroken={isEggBroken}
                            />
                        </div>
                    </div>
                    <div className="shrink-0 text-center tab:max-w-[444px] tab:mx-auto pc:grow-0 pc:flex pc:flex-col pc:justify-center pc:items-center pc:mr-0 desk:mr-[60px] desk:max-w-[520px]">
                        <p className="mb-[56px] tab:mb-[68px] text-base tab:text-xl28 text-purple-200 dark:text-white-200 desk:text-2xl">
                            {getTranslation("heroText")}
                        </p>
                        <EasterCertificate
                            onStartAnimation={onStartAnimation}
                            onFixEgg={onFixEgg}
                        />
                    </div>
                </div>
            </PageSection>
        </div>
    );
};
