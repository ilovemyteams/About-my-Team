"use client";

import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
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
                shouldBlockScroll={false}
                className="min-w-[320px] tab:min-w-[660px] pc:min-w-[750px] h-[792px] tab:h-[789px] pc:h-[813px]
                px-[16px] tab:px-[24px] pc:px-[60px] py-[64px] pc:py-[72px] overflow-y-auto tab:overflow-y-visible
                bg-purple-400"
            >
                <ModalContent className="h-full m-0 ">
                    <CustomerForm onClose={onClose} />
                </ModalContent>
            </Modal>
        </>
    );
};
