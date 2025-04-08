"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { useEasterCounter } from "@/src/utils/EasterCounterContext";
import { SubmitFnType } from "@/types/FormInModalProps";

import { AskUsNotificationModal } from "../../shared/AskUs/modals/AskUsNotificationModal";
import { ModalBase } from "../../shared/Modals/ModalBase";
import { BgImagesDesktop } from "../../shared/Modals/modalBgImages/contentModals/BgImagesDesktop";
import { BgImagesMobile } from "../../shared/Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "../../shared/Modals/modalBgImages/contentModals/BgImagesTablet";
import { LandingForm } from "./LandingForm";

const SUSANNALINK = "https://www.linkedin.com/in/susanna-salata/";

export const LandingModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { totalFoundEggs, setIsCounterVisible } = useEasterCounter();
    const getTranslation = useTranslations("EventsPage.Easter");
    const locale = useLocale();

    const twoBunniesSRC = (locale: string): string => {
        switch (locale) {
            case "ua":
                return "/images/easter/twoBunnies.svg";
            case "pl":
                return "/images/easter/twoBunniesPL.svg";
            default:
                return "/images/easter/twoBunniesEN.svg";
        }
    };

    useEffect(() => {
        if (totalFoundEggs === 20) {
            setIsModalOpen(true);
            setIsCounterVisible(false);
        }
    }, [totalFoundEggs, setIsCounterVisible]);

    const handleClose = () => {
        setIsModalOpen(false);
    };
    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            handleClose();
        } catch (error) {
            setIsError(true);
            throw new Error("Form submission failed", { cause: error });
        } finally {
            setIsNotificationShawn(true);
        }
    };
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);

    const onCLoseNotification = () => {
        setIsError(false);
        setIsNotificationShawn(false);
    };

    return (
        <>
            <ModalBase isOpen={isModalOpen} onCloseModal={handleClose}>
                <BgImagesMobile />
                <BgImagesTablet />
                <BgImagesDesktop />

                <div className="mb-6 tab:mb-8 tab:flex gap-[46px] tab:items-end">
                    <Image
                        src={twoBunniesSRC(locale)}
                        alt="two bunnies"
                        width={270}
                        height={146}
                        className="w-[144px] -mt-5 mb-4 tab:mb-0 tab:-mt-1 tab:-ml-3 h-auto tab:w-[245px] mx-auto
                        pc:w-[301px] pc:gap-[31px] pc:-ml-12 pc:-mt-7"
                    />
                    <div>
                        <h3
                            className="font-caviar font-bold text-lg mb-4 dark:text-white-200 text-purple-200
                     tab:text-2xl "
                        >
                            {getTranslation("landingTitle")}
                        </h3>
                        <ol
                            className="text-sm list-outside list-decimal ml-4 mb-2
                    tab:text-lg tab:mb-4"
                        >
                            <li> {getTranslation("landingText1")}</li>
                            <li>{getTranslation("landingText2")}</li>
                        </ol>

                        <p className="text-sm ">
                            {getTranslation.rich("landingCap", {
                                linkSusanna: chunk => (
                                    <a
                                        href={SUSANNALINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-130 dark:text-purple-50 underline"
                                    >
                                        {chunk}
                                    </a>
                                ),
                            })}
                        </p>
                    </div>
                </div>
                <h4 className="font-caviar font-bold text-lg tab:text-xl text-center mb-6">
                    {getTranslation("landingFormTitle")}
                </h4>
                <LandingForm notificationHandler={notificationHandler} />
            </ModalBase>
            <AskUsNotificationModal
                isError={isError}
                isShown={isNotificationShawn}
                closeNotification={onCLoseNotification}
            />
        </>
    );
};
