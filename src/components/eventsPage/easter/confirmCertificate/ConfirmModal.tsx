import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

import { ModalBase } from "@/src/components/shared/Modals/ModalBase";
import { SubmitFnType } from "@/types/FormInModalProps";

import { IconWreath } from "../icons/IconWreath";
import { BunnyEars } from "./BunnyEars";
import { ConfirmForm } from "./ConfirmForm";

interface ConfirmModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotificationShawn: Dispatch<SetStateAction<boolean>>;
}
export const ConfirmModal = ({
    isOpen,
    onCloseModal,
    setIsError,
    setIsNotificationShawn,
}: ConfirmModalProps) => {
    const getTranslation = useTranslations("EasterEvent");

    const notificationHandler = async (submitFn: SubmitFnType) => {
        try {
            await submitFn();
            onCloseModal();
        } catch (error) {
            setIsError(true);
            throw new Error("Form submission failed", { cause: error });
        } finally {
            setIsNotificationShawn(true);
        }
    };
    return (
        <ModalBase
            isOpen={isOpen}
            onCloseModal={onCloseModal}
            className="overflow-x-clip"
        >
            <IconWreath
                className="absolute top-0 left-1/2 -translate-y-[7%] -translate-x-[53%] w-[120%] 
             h-auto z-[-1] tab:w-[85%] tab:-translate-y-[24%] pc:w-[75%] desk:w-[65%]"
            />

            <div className="mb-[32%] tab:mb-[108px]">
                <h2
                    className="text-center whitespace-pre-wrap font-bold font-caviar text-lg max-w-[65%] mb-3 text-purple-200 dark:text-white-200 mx-auto
                tab:text-xl tab:max-w-[40%] tab:mb-5 desk:max-w-[37%]"
                >
                    {getTranslation("confirmTitle")}
                </h2>
                <p className="font-caviar text-redLight dark:text-red text-6xl text-center mb-3 tab:text-7xl tab:mb-4">
                    100$
                </p>
                <p className="text-center text-sm  mx-auto whitespace-pre-wrap  text-purple-200 dark:text-grey">
                    {getTranslation("confirmCaption")}
                </p>
            </div>
            <ConfirmForm notificationHandler={notificationHandler} />

            <BunnyEars />
        </ModalBase>
    );
};
