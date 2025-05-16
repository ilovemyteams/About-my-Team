"use client";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useState } from "react";

import { ModalBase } from "@/src/components/shared/Modals/ModalBase";
import { BgImagesDesktop } from "@/src/components/shared/Modals/modalBgImages/contentModals/BgImagesDesktop";
import { BgImagesMobile } from "@/src/components/shared/Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "@/src/components/shared/Modals/modalBgImages/contentModals/BgImagesTablet";
import { localeInURL } from "@/src/utils/localeInURL";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const { previousURL } = usePreviousURL();
    const locale = useLocale();
    const [isModalOpen, setIsModalOpen] = useState(true);

    const onCloseModal = () => {
        if (previousURL === "back") {
            router.back();
        } else {
            router.push(previousURL || `/${localeInURL(locale)}#team`);
        }
        setIsModalOpen(false);
    };

    return (
        <ModalBase
            isOpen={isModalOpen}
            onCloseModal={onCloseModal}
            appearance="center"
            className="pc:mx-[-60px]"
            widthStyle="min-w-[320px] w-[90vw] max-w-[360px] tab:min-w-[none] tab:w-full tab:max-w-[768px]"
        >
            <BgImagesMobile />
            <BgImagesTablet />
            <BgImagesDesktop />
            {children}
        </ModalBase>
    );
};
