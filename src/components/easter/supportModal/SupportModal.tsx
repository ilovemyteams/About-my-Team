"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { useEasterCounter } from "@/src/utils/EasterCounterContext";

import { Button } from "../../shared/Button";
import { ModalBase } from "../../shared/Modals/ModalBase";
import { BgImagesDesktop } from "../../shared/Modals/modalBgImages/contentModals/BgImagesDesktop";
import { BgImagesMobile } from "../../shared/Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "../../shared/Modals/modalBgImages/contentModals/BgImagesTablet";

export const SupportModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { totalFoundEggs } = useEasterCounter();
    const getTranslation = useTranslations("EventsPage.Easter");

    useEffect(() => {
        if (totalFoundEggs === 15) {
            setIsModalOpen(true);
        }
    }, [totalFoundEggs]);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <ModalBase isOpen={isModalOpen} onCloseModal={handleClose}>
            <BgImagesMobile />
            <BgImagesTablet />
            <BgImagesDesktop />
            <Image
                src="/images/easter/threeBunnies.svg"
                alt="three bunnies"
                width={300}
                height={188}
                className="absolute top-0 left-[26px] w-[215px] h-auto tab:w-[300px] tab:left-1/2 tab:-translate-x-1/2"
            />
            <Image
                src="/images/easter/bunny.svg"
                alt="bunny"
                width={73}
                height={93}
                className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-[52px] tab:w-[87px] h-auto"
            />
            <div className="mt-[67px] tab:mt-[75px] mb-[45px] tab:mb-[93px] font-caviar font-bold text-center">
                <p className="mb-8 tab:mb-10 text-3xl tab:text-5xl ">
                    {getTranslation("supportTitle")}
                </p>

                <p className="mx-auto mb-8 tab:mb-10 text-lg">
                    {getTranslation.rich("supportText", {
                        red: chunk => (
                            <span className="text-redLight dark:text-red text-2xl">
                                {chunk}
                            </span>
                        ),
                        br: () => <br />,
                    })}
                </p>
                <Button color="grey" onClick={handleClose}>
                    {getTranslation("supportBtn")}
                </Button>
            </div>
        </ModalBase>
    );
};
