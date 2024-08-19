"use client";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useTranslations } from "next-intl";

import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { useScreenSize } from "@/src/hooks/useScreenSize";

import { Button } from "../Button";
import { IconCloseX } from "../Icons/IconCloseX";
import { CustomerForm } from "./CustomerForm";
import { BgImagesDesktop } from "./modalBgImages/writeUsBgImages/BgImagesDesktop";
import { BgImagesMobile } from "./modalBgImages/writeUsBgImages/BgImagesMobile";
import { BgImagesTablet } from "./modalBgImages/writeUsBgImages/BgImagesTablet";

interface WriteUsModalProps {
    isError: boolean;
    setIsError: (value: boolean | ((prev: boolean) => boolean)) => void;
    setIsNotificationShawn: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
    className?: string;
}

export const WriteUsModal = ({
    isError,
    setIsError,
    setIsNotificationShawn,
    className,
}: WriteUsModalProps) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const getTranslation = useTranslations("Buttons");
    const screenSizeName = useScreenSize();
    const { mobileName, tabletName } = SCREEN_NAMES;

    return (
        <div className={className}>
            <Button onClick={onOpen}>{getTranslation("order")}</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                radius="none"
                shouldBlockScroll={
                    screenSizeName !== mobileName &&
                    screenSizeName !== tabletName
                }
                hideCloseButton={true}
                className="min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] min-h-[792px] max-h-[792px] tab:min-h-[789px] pc:min-h-[813px]
                px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px] overflow-y-auto tab:overflow-y-visible bg-white-100 dark:bg-purple-400"
                classNames={{
                    backdrop:
                        "bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80",
                }}
            >
                <ModalContent className="relative w-full h-full m-0">
                    <BgImagesMobile />
                    <BgImagesTablet />
                    <BgImagesDesktop />

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isError}
                        aria-label="close button"
                        className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple"
                    >
                        <IconCloseX />
                    </button>
                    <CustomerForm
                        onClose={onClose}
                        setIsError={setIsError}
                        setIsNotificationShawn={setIsNotificationShawn}
                    />
                </ModalContent>
            </Modal>
        </div>
    );
};
