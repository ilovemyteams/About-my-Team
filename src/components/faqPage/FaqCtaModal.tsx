import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

import { Button } from "../shared/Button";
import { IconCloseX } from "../shared/Icons/IconCloseX";
import { BgImagesDesktop } from "../shared/WriteUs/modalBgImages/notificationModalBgImages/BgImagesDesktop";
import { BgImagesMobile } from "../shared/WriteUs/modalBgImages/notificationModalBgImages/BgImagesMobile";
import { BgImagesTablet } from "../shared/WriteUs/modalBgImages/notificationModalBgImages/BgImagesTablet";
import { FaqCtaForm } from "./FaqCtaForm";

interface FaqCtaModalProps {
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotification: Dispatch<SetStateAction<boolean>>;
}

export const FaqCtaModal = ({
    setIsError,
    setIsNotification,
}: FaqCtaModalProps) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const getTranslation = useTranslations("FaqPage");

    return (
        <>
            <Button onClick={onOpen}>{getTranslation("ctaButton")}</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                scrollBehavior="outside"
                radius="none"
                hideCloseButton={true}
                classNames={{
                    backdrop:
                        "bg-greyLight dark:bg-backdrop bg-opacity-70 dark:bg-opacity-80",

                    base: "px-4 tab:px-6 pc:px-[60px] py-16 pc:py-[72px] m-0 w-full tab:w-[660px] pc:w-[750px] max-w-[360px] tab:max-w-none bg-white-100 dark:bg-purple-400 ",
                    body: "p-0, m-0",
                }}
            >
                <ModalContent className="relative">
                    <BgImagesMobile />
                    <BgImagesTablet />
                    <BgImagesDesktop />
                    <button
                        aria-label="close modal"
                        onClick={onClose}
                        className="absolute top-2 pc:top-3 right-4 tab:right-6 pc:right-4 w-[48px] h-[48px] cursor-pointer flex items-center justify-center icon-hover-rounded-purple"
                    >
                        <IconCloseX />
                    </button>
                    <FaqCtaForm
                        onClose={onClose}
                        setIsError={setIsError}
                        setIsNotification={setIsNotification}
                    />
                </ModalContent>
            </Modal>
        </>
    );
};
