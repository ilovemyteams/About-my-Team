"use client";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import React, { useEffect, useState } from "react";

import { IconCloseX } from "@/src/components/shared/Icons/IconCloseX";
import { BgImagesDesktop } from "@/src/components/shared/Modals/modalBgImages/contentModals/BgImagesDesktop";
import { BgImagesMobile } from "@/src/components/shared/Modals/modalBgImages/contentModals/BgImagesMobile";
import { BgImagesTablet } from "@/src/components/shared/Modals/modalBgImages/contentModals/BgImagesTablet";
import { localeInURL } from "@/src/utils/localeInURL";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

export const Modal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { previousURL } = usePreviousURL();
    const locale = useLocale();
    const [isModalOpen, setIsModalOpen] = useState(true);

    useEffect(() => {
        const closeModal = () => {
            if (!pathname.includes("member")) {
                setIsModalOpen(false);
            } else {
                setIsModalOpen(true);
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (previousURL === "back") {
                    router.back();
                } else {
                    router.push(previousURL || `/${localeInURL(locale)}#team`);
                }
                setIsModalOpen(false);
            }
        };

        document.addEventListener("keydown", handleEsc);

        closeModal();

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [pathname, router, previousURL, locale]);

    if (!isModalOpen) return null;

    const handleClose = () => {
        if (previousURL === "back") {
            router.back();
        } else {
            router.push(previousURL || `/${localeInURL(locale)}#team`);
        }
        setIsModalOpen(false);
    };

    return (
        <div>
            <div
                onClick={handleClose}
                className="w-full h-full bg-greyLight bg-opacity-70 dark:bg-backdrop dark:bg-opacity-80 fixed top-0 left-0 z-[20] no-doc-scroll"
            >
                <div
                    onClick={e => e.stopPropagation()}
                    className="p-0 min-w-[320px] w-[90vw] max-w-[360px] tab:min-w-[768px] tab:w-[768px] h-auto max-h-[90vh] overflow-y-auto fixed top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2 z-[21] bg-white-100 dark:bg-purple-400 scroll"
                >
                    <div className="h-auto relative pb-[64px] pt-2 tab:pb-[72px] tab:pt-3">
                        <BgImagesMobile />
                        <BgImagesTablet />
                        <BgImagesDesktop />
                        <button
                            onClick={handleClose}
                            type="button"
                            className="flex mb-2 ml-auto mr-4 tab:mr-6 tab:mb-3 w-12 h-12 justify-center items-center icon-hover-rounded-purple relative"
                        >
                            <IconCloseX className="stroke-2 size-6" />
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
