"use client";
import { useEffect } from "react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
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

    console.log(isNotificationShawn);

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
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute top-2 right-4 pc:top-3 pc:right-3 h-12 w-12 p-3 bg-transparent icon-hover-rounded-purple
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
            <ModalContent>
                <h3>{title}</h3>
                <p>{textMessage}</p>
            </ModalContent>
        </Modal>
    );
};
