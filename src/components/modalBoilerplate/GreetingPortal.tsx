"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { usePathname } from "@/src/navigation";

import { ModalBase } from "../shared/Modals/ModalBase";
import { GreetingModal } from "./GreetingModal";

const SESSION_LANG_KEY = "langOpened";
const GREETING_MODAL_DELAY = 1 * 1000;

export const GreetingPortal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const timeoutId = useRef<null | ReturnType<typeof setTimeout>>(null);

    const pathname = usePathname();
    const locale = useLocale();

    const onCloseModal = () => setIsModalOpen(false);
    const onCloseModalView = () => {
        setIsModalOpen(false);
        sendGTMEvent({
            event: "christmas_pop_up_click",
            page_location: pathname,
        });
        setTimeout(() => {
            window.open("https://www.youtube.com/live/fhSUl-Hx7cw", "_blank");
        }, 0);
    };
    const onOpenModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        const langOpened = sessionStorage.getItem(SESSION_LANG_KEY);

        if (langOpened) {
            const sessionLang = langOpened.split(",");
            const isInclude = sessionLang.includes(locale);

            if (!isInclude) {
                if (!timeoutId.current) {
                    timeoutId.current = setTimeout(
                        onOpenModal,
                        GREETING_MODAL_DELAY
                    );
                }
                sessionLang.push(locale);
                sessionStorage.setItem(SESSION_LANG_KEY, sessionLang.join(","));
            }
        }

        if (!langOpened) {
            if (!timeoutId.current) {
                timeoutId.current = setTimeout(
                    onOpenModal,
                    GREETING_MODAL_DELAY
                );
            }
            sessionStorage.setItem(SESSION_LANG_KEY, locale);
        }
    }, [locale, pathname]);

    return (
        <ModalBase
            isOpen={isModalOpen}
            onCloseModal={onCloseModal}
            appearance="center"
            className="relative bg-white-100 dark:bg-purple-200 overflow-hidden"
        >
            <GreetingModal
                onCloseModal={onCloseModal}
                onCloseModalView={onCloseModalView}
            />
        </ModalBase>
    );
};
