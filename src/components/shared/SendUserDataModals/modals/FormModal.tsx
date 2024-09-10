import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { Dispatch, ElementType, SetStateAction } from "react";

import { Button } from "@/src/components/shared/Button";
import { IconCloseX } from "@/src/components/shared/Icons/IconCloseX";
import { BgImagesDesktop } from "@/src/components/shared/SendUserDataModals/modalBgImages/notificationModalBgImages/BgImagesDesktop";
import { BgImagesMobile } from "@/src/components/shared/SendUserDataModals/modalBgImages/notificationModalBgImages/BgImagesMobile";
import { BgImagesTablet } from "@/src/components/shared/SendUserDataModals/modalBgImages/notificationModalBgImages/BgImagesTablet";

interface FormModalProps {
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotification: Dispatch<SetStateAction<boolean>>;
    formComponent: ElementType;
    triggerBtnTitle: string;
}

export const FormModal = ({
    setIsError,
    setIsNotification,
    formComponent: FormComponent,
    triggerBtnTitle,
}: FormModalProps) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const submitFn = async (path: string, data: { [key: string]: string }) => {
        try {
            await axios({
                method: "post",
                url: path,
                data,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            onClose();
        } catch (error) {
            setIsError(true);
            return error;
        } finally {
            setIsNotification(true);
        }
    };

    return (
        <>
            <Button onClick={onOpen}>{triggerBtnTitle}</Button>
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
                    <FormComponent submitFn={submitFn} />
                </ModalContent>
            </Modal>
        </>
    );
};
