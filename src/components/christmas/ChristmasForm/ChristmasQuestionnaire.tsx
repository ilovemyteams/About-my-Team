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
        <PageSection className="pb-[80px] text-purple-200">
            <div className=" relative bg-memberMenuGradientLight w-full min-h-full min-w-[288px] p-2 tab:p-4">
                <div className=" w-full min-h-full border-dash-horizontal ">
                    <div className="w-full min-h-full border-dash-vertical">
                        <div className="p-2 tab:p-4 w-full min-h-full">
                            <div className="bg-headerGradientLight p-2 w-full min-h-full">
                                <p className=" whitespace-pre-line mb-2 tab:mb-4 pc:mb-6">
                                    {getTranslation("formPreface1")}
                                </p>
                                <p className="mb-6">
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
                    width={229}
                    height={87}
                    className="absolute bottom-[-80px] left-[-20px] z-[-1]"
                />
            </div>
        </PageSection>
    );
};
