"use client";

import {
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Button } from "./Button";
import { CustomerForm } from "./CustomerForm";

export const WriteUsModal = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const getTranslation = useTranslations("Buttons");

    return (
        <>
            <Button onClick={onOpen}>{getTranslation("order")}</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                size="3xl"
                classNames={{ body: "px-[60px] py-[72px] bg-purple-400" }}
            >
                <ModalContent>
                    <ModalBody>
                        <CustomerForm onClose={onClose} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
