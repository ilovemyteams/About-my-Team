"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { SubmitFnType } from "@/types/FormInModalProps";

import { AskUsNotificationModal } from "../../shared/AskUs/modals/AskUsNotificationModal";
import { PageSection } from "../../shared/PageSection";
import { ChristmasForm } from "./ChristmasForm";

export const ChristmasQuestionnaire = () => {
    const [isError, setIsError] = useState(false);
    const [isNotificationShawn, setIsNotificationShawn] = useState(false);
    const onCLoseNotification = () => {
        setIsError(false);
        setIsNotificationShawn(false);
    };
    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
        } catch (error) {
            setIsError(true);
            throw new Error("Form submission failed", { cause: error });
        } finally {
            setIsNotificationShawn(true);
        }
    };
    const getTranslation = useTranslations("Christmas");
    return (
        <PageSection id="form" className="pb-[80px] text-purple-200">
            <div className=" relative bg-memberMenuGradientLight mx-auto w-full min-h-full min-w-[288px] max-w-[726px] p-2 tab:p-4">
                <div className=" w-full min-h-full border-dash-horizontal ">
                    <div className="w-full min-h-full border-dash-vertical">
                        <div className="p-2 tab:p-4 w-full min-h-full">
                            <div className="bg-headerGradientLight p-2 tab:p-4 w-full min-h-full">
                                <p className=" whitespace-pre-line mb-2 tab:mb-4 pc:mb-6 text-sm20 tab:text-xl28">
                                    {getTranslation("formPreface1")}
                                </p>
                                <p className="mb-6 tab:mb-8 text-sm20 tab:text-xl28">
                                    {getTranslation("formPreface2")}
                                </p>
                                <ChristmasForm
                                    notificationHandler={notificationHandler}
                                />
                                <AskUsNotificationModal
                                    isError={isError}
                                    isShown={isNotificationShawn}
                                    closeNotification={onCLoseNotification}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src="/images/сhristmasTreeBranches.svg"
                    alt="Christmas tree branches"
                    width={335}
                    height={127}
                    className="absolute bottom-[-65px] left-[-40px] z-[-1] w-[229px] h-[87px] 
                    tab:bottom-[-95px] tab:left-[-50px] tab:w-[335px] tab:h-[127px]
                    pc:bottom-[-85px] pc:left-[-100px]"
                />
            </div>
        </PageSection>
    );
};
