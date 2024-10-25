"use client";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { IconCloseX } from "../Icons/IconCloseX";
import { BgImagesDesktop } from "./modalBgImages/notificationModals/BgImagesDesktop";
import { BgImagesMobile } from "./modalBgImages/notificationModals/BgImagesMobile";
import { BgImagesTablet } from "./modalBgImages/notificationModals/BgImagesTablet";

interface ErrorModalProps {
    isShown: boolean;
    closeFn: () => void;
}

export const ErrorModal = ({ isShown, closeFn }: ErrorModalProps) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const getTranslation = useTranslations("Notifications");

    useEffect(() => {
        if (isShown) {
            onOpen();
        }
    }, [isShown, onOpen]);

    const onCloseModal = () => {
        onClose();
        closeFn();
    };
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            radius="none"
            hideCloseButton={true}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            className="justify-between min-w-[320px] max-w-[360px] tab:min-w-[464px] max-h-[420px] tab:min-h-[434px] pc:min-h-[474px]
            p-[16px] m-0 overflow-y-auto tab:overflow-y-visible bg-white-100 dark:bg-purple-400"
            classNames={{
                backdrop: "bg-backdrop bg-opacity-0",
            }}
        >
            <ModalContent className="relative w-full h-full m-0">
                <BgImagesMobile />
                <BgImagesTablet />
                <BgImagesDesktop />

                <ModalHeader className="relative min-h-[64px] border-b-[1px] border-purple-stroke">
                    <button
                        type="button"
                        onClick={onCloseModal}
                        aria-label="close button"
                        className="cursor-pointer flex justify-center items-center absolute top-[2px] right-4 h-12 w-12 p-3 bg-transparent icon-hover-rounded-purple"
                    >
                        <IconCloseX />
                    </button>
                </ModalHeader>
                <ModalBody className="flex flex-col items-center gap-0 min-h-[324px] p-0">
                    some text
                    <h3
                        className={`font-caviar text-3xl text-purple-200 dark:text-white-200 mt-6 mb-4 tab:text-4xl pc:text-5xl`}
                    >
                        {getTranslation("somethingWrong")}
                    </h3>
                    <p className="text-base text-center">
                        {getTranslation("tryAgain")}
                    </p>
                    <Image
                        src="/images/bgImagesNotification/brokenHeart.svg"
                        alt="background"
                        width="0"
                        height="0"
                        sizes="100%"
                        className="block w-[177px] h-[129px] tab:w-[192px] tab:h-[127px] pc:w-[238px] pc:h-[157px] mt-[52px] tab:mt-[46px] pc:mt-[53px]"
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
