"use client";
import { useEffect } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

interface NotififcationModalProps {
    title: string;
    textMessage: string;
    isNotificationShawn: boolean;
}

export const NotificationModal = ({
    title,
    textMessage,
    isNotificationShawn,
}: NotififcationModalProps) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    useEffect(() => {
        if (isNotificationShawn) {
            onOpen();
        }
    }, [isNotificationShawn, onOpen]);

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            hideCloseButton={true}
            className="justify-between min-w-[320px] max-w-[360px] tab:min-w-[464px] max-h-[420px] tab:h-[434px] pc:h-[474px]
            p-[16px] m-0 overflow-y-auto tab:overflow-y-visible
            bg-purple-400"
            classNames={{ backdrop: "bg-backdrop bg-opacity-80" }}
        >
            <ModalContent className="w-full h-full m-0">
                <Image
                    src="/images/bgImagesNotification/bgOkNotificationMobile.png"
                    alt="background"
                    width={320}
                    height={420}
                    className="tab:hidden absolute top-0 left-0 z-[-10] w-full h-full object-cover"
                />
                <Image
                    src="/images/bgImagesNotification/bgOkNotificationTablet.png"
                    alt="background"
                    width={464}
                    height={434}
                    className="hidden tab:block pc:hidden absolute top-0 left-0 z-[-10] object-cover"
                />
                <Image
                    src="/images/bgImagesNotification/bgOkNotificationDesktop.png"
                    alt="background"
                    width={464}
                    height={474}
                    className="hidden pc:block absolute top-0 left-0 z-[-10] object-cover"
                />
                <ModalHeader className="relative min-h-[64px] border-b-[1px] border-purple-stroke">
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute top-[2px] right-4 h-12 w-12 p-3 bg-transparent icon-hover-rounded-purple
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
                    <h3 className="font-caviar text-3xl mt-6 mb-4 tab:text-4xl pc:text-6xl">
                        {title}
                    </h3>
                    <p className="text-base text-center">{textMessage}</p>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
