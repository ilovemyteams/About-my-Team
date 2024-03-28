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
                scrollBehavior="inside"
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
