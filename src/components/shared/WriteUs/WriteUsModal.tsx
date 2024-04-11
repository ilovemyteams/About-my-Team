"use client";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { SCREEN_NAMES } from "@/src/constants/screenNames";
import { Button } from "../Button";
import { CustomerForm } from "./CustomerForm";
import { IconCloseX } from "../Icons/IconCloseX";

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
                placement="center"
                shouldBlockScroll={
                    screenSizeName !== mobileName &&
                    screenSizeName !== tabletName
                }
                hideCloseButton={true}
                className="min-w-[320px] max-w-[360px] tab:min-w-[660px] pc:min-w-[750px] max-h-[792px] tab:min-h-[789px] pc:min-h-[813px]
                px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px] overflow-y-auto tab:overflow-y-visible
                bg-purple-400"
                classNames={{ backdrop: "bg-backdrop bg-opacity-80" }}
            >
                <ModalContent className="w-full h-full m-0">
                    <Image
                        src="/images/bgImagesModalWriteUs/bgModalWriteUsMobile.png"
                        alt="background"
                        width="0"
                        height="0"
                        className="tab:hidden absolute top-0 left-0 z-[-10] w-full h-[792px] object-cover"
                    />
                    <Image
                        src="/images/bgImagesModalWriteUs/bgModalWriteUsTablet.png"
                        alt="background"
                        width="0"
                        height="0"
                        className="hidden tab:block pc:hidden absolute top-0 left-0 z-[-10] min-w-[660px] h-auto object-cover"
                    />
                    <Image
                        src="/images/bgImagesModalWriteUs/bgModalWriteUsDesktop.png"
                        alt="background"
                        width="0"
                        height="0"
                        className="hidden pc:block absolute top-0 left-0 z-[-10] min-w-[750px] h-auto object-cover"
                    />
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isError}
                        aria-label="close button"
                        className="cursor-pointer absolute top-2 right-4 pc:top-3 pc:right-3 h-12 w-12 p-3 disabled:text-purple-stroke bg-transparent icon-hover-rounded-purple
                         icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
                         icon-hover-rounded-purple:active"
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
