"use client";
import { useAnimate } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { Button } from "../../shared/Button";
import { PageSection } from "../../shared/PageSection";
import { HeartLeftPartIcon } from "../icons/HeartLeftPartIcon";
import { HeartRightPartIcon } from "../icons/HeartRightPartIcon";
import { HeroLogo } from "../icons/HeroLogo";
import { Decorations } from "./Decorations";

export const Hero = () => {
    const [scope, animate] = useAnimate();
    const heartRef = useRef(null);
    const getTranslation = useTranslations("Valentines");

    const onClickBtn = async () => {
        await animate(
            heartRef.current,
            { scale: [1.1, 1, 1.1, 1] },
            { duration: 1 }
        );
        await animate(
            scope.current,
            {
                rotate: "-57deg",
                x: "-70%",
                y: "35%",
            },
            { duration: 1 }
        );
    };
    return (
        <PageSection
            className="min-h-[calc(100dvh-78px)] tab:min-h-0 pc:min-h-dvh flex flex-col pt-6 pb-[80px] relative
        tab:pt-10"
        >
            <Decorations />
            <div className="tab:mb-[160px] tab:max-w-[900px]">
                <HeroLogo />
            </div>

            <div className="grow w-[50%] mx-[auto] tab:justify-end tab:w-[362px] pc:w-[325px] flex items-center tab:mb-[50px]">
                <div className="grid grid-cols-2 justify-center" ref={heartRef}>
                    <div ref={scope}>
                        <HeartLeftPartIcon className="w-full h-auto" />
                    </div>

                    <HeartRightPartIcon className="w-[138%] h-auto translate-x-[-30.8%] translate-y-[-1%] rotate-[-0.5deg]" />
                </div>
            </div>
            <div className="max-w-[444px]  mx-auto text-white-200 text-center ">
                <p className="mb-12 tab:text-xl28 tab:mb-10">
                    {getTranslation("heroText")}
                </p>
                <Button onClick={onClickBtn}>
                    {getTranslation("heroBtn")}
                </Button>
            </div>
        </PageSection>
    );
};
