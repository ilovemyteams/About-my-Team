"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { useRouter } from "@/src/navigation";
import { SubmitFnType } from "@/types/FormInModalProps";

import { ModalBase } from "../../Modals/ModalBase";
import { BgImagesDesktop } from "../../Modals/modalBgImages/contentModals/BgImagesDesktop";
import { BgImagesMobile } from "../../Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "../../Modals/modalBgImages/contentModals/BgImagesTablet";
import { CustomerForm } from "../form/CustomerForm";

interface CustomerFormModalProps {
    isError: boolean;
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotificationShawn: Dispatch<SetStateAction<boolean>>;
    previousUrl: string | undefined;
}

export const CustomerFormModal = ({
    isError,
    setIsError,
    setIsNotificationShawn,
    previousUrl,
}: CustomerFormModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const router = useRouter();

    const onCloseModal = () => {
        setIsModalOpen(false);
        if (previousUrl) {
            router.push(previousUrl, {});
        } else {
            router.back();
        }
    };

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
            isOpen={isModalOpen}
            onCloseModal={onCloseModal}
            isCloseDisabled={isError}
        >
            <BgImagesMobile />
            <BgImagesTablet />
            <BgImagesDesktop />
            <CustomerForm notificationHandler={notificationHandler} />
        </ModalBase>
    );
};
