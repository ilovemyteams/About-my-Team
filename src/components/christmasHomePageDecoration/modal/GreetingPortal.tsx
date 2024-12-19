"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";

import { usePathname } from "@/src/navigation";

import { ModalBase } from "../../shared/Modals/ModalBase";
import { GreetingModal } from "./greetingModal/GreetingModal";

const SESSION_LANG_KEY = "langOpened";
const GREETING_MODAL_DELAY = 30 * 1000;

export const GreetingPortal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const timeoutId = useRef<null | ReturnType<typeof setTimeout>>(null);

    const pathname = usePathname();
    const locale = useLocale();

    const onCloseModal = () => setIsModalOpen(false);

    const onOpenModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        const langOpened = sessionStorage.getItem(SESSION_LANG_KEY);

        const timeout = timeoutId.current;

        if (pathname.split("/")[1] === "events" && timeout) {
            clearTimeout(timeout);
        }

        if (langOpened) {
            const sessionLang = langOpened.split(",");
            const isInclude = sessionLang.includes(locale);

            if (!isInclude) {
                if (pathname.split("/")[1] === "events" && !timeoutId.current) {
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
            if (pathname.split("/")[1] === "events" && !timeoutId.current) {
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
            <GreetingModal onCloseModal={onCloseModal} />
        </ModalBase>
    );
};
