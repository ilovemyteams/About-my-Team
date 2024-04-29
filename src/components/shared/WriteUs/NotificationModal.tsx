"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

interface NotififcationModalProps {
    isNotificationShawn: boolean;
    isError: boolean;
    setIsError: (value: boolean | ((prev: boolean) => boolean)) => void;
    setIsNotificationShawn: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
}

export const NotificationModal = ({
    isNotificationShawn,
    isError,
    setIsError,
    setIsNotificationShawn,
}: NotififcationModalProps) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const getTranslation = useTranslations("Notifications");

    useEffect(() => {
        if (isNotificationShawn) {
            onOpen();
        }
    }, [isNotificationShawn, onOpen]);

    const closeNotification = () => {
        onClose();
        setIsError(false);
        setIsNotificationShawn(false);
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            hideCloseButton={true}
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            className="justify-between min-w-[320px] max-w-[360px] tab:min-w-[464px] max-h-[420px] tab:h-[434px] pc:h-[474px]
            p-[16px] m-0 overflow-y-auto tab:overflow-y-visible
            bg-purple-400"
            classNames={{
                backdrop: `${isError ? "bg-backdrop bg-opacity-0" : "bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80"} `,
            }}
        >
            <ModalContent className="w-full h-full m-0">
                <Image
                    src={
                        isError
                            ? "/images/bgImagesNotification/bgErrorNotificationMobile.png"
                            : "/images/bgImagesNotification/bgOkNotificationMobile.png"
                    }
                    alt="background"
                    width="0"
                    height="0"
                    sizes="100%"
                    className="tab:hidden absolute top-0 left-0 z-[-10] w-full h-[420px]"
                />
                <Image
                    src={
                        isError
                            ? "/images/bgImagesNotification/bgErrorNotificationTablet.png"
                            : "/images/bgImagesNotification/bgOkNotificationTablet.png"
                    }
                    alt="background"
                    width="0"
                    height="0"
                    sizes="100%"
                    className="hidden tab:block pc:hidden absolute top-0 left-0 z-[-10] w-full h-[434px] object-cover"
                />
                <Image
                    src={
                        isError
                            ? "/images/bgImagesNotification/bgErrorNotificationDesktop.png"
                            : "/images/bgImagesNotification/bgOkNotificationDesktop.png"
                    }
                    alt="background"
                    width="0"
                    height="0"
                    sizes="100%"
                    className="hidden dark:pc:block absolute top-0 left-0 z-[-10] w-full h-[474px] object-cover"
                />
                <Image
                    src={
                        isError
                            ? "/images/bgImagesNotification/bgErrorNotificationDesktopLight.png"
                            : "/images/bgImagesNotification/bgOkNotificationDesktopLight.png"
                    }
                    alt="background"
                    width="0"
                    height="0"
                    sizes="100%"
                    className="hidden pc:block dark:hidden absolute top-0 left-0 z-[-10] w-full h-[474px] object-cover"
                />
                <ModalHeader className="relative min-h-[64px] border-b-[1px] border-purple-stroke">
                    <button
                        type="button"
                        onClick={closeNotification}
                        aria-label="close button"
                        className="cursor-pointer flex justify-center items-center absolute top-[2px] right-4 h-12 w-12 p-3 bg-transparent icon-hover-rounded-purple
                         icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
                         icon-hover-rounded-purple:active"
                    >
                        <Image
                            src="/images/closeX.svg"
                            alt="Close button"
                            width={24}
                            height={24}
                        />
                    </button>
                </ModalHeader>
                <ModalBody className="flex flex-col items-center gap-0 min-h-[324px] p-0">
                    <h3
                        className={`font-caviar text-3xl text-white-200 mt-6 mb-4 tab:text-4xl ${isError ? "pc:text-5xl" : "pc:text-6xl"}`}
                    >
                        {isError
                            ? getTranslation("somethingWrong")
                            : getTranslation("thankYou")}
                    </h3>
                    <p className="text-base text-center">
                        {isError
                            ? getTranslation("tryAgain")
                            : getTranslation("waitResponse")}
                    </p>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
