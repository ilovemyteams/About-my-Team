"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { ModalBase } from "../../shared/Modals/ModalBase";
import { GreetingModal } from "./greetingModal/GreetingModal";
const SESSION_LANG_KEY = "langOpened";

export const GreetingPortal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const locale = useLocale();

    const onCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        const langOpened = sessionStorage.getItem(SESSION_LANG_KEY);

        if (langOpened) {
            const sessionLang = langOpened.split(",");
            const isInclude = sessionLang.includes(locale);

            if (!isInclude) {
                sessionLang.push(locale);
                setIsModalOpen(true);
                sessionStorage.setItem(SESSION_LANG_KEY, sessionLang.join(","));
            }
        }

        if (!langOpened) {
            setIsModalOpen(true);
            sessionStorage.setItem(SESSION_LANG_KEY, locale);
        }
    }, [locale]);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onCloseModal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <ModalBase
            isOpen={isModalOpen}
            onCloseModal={onCloseModal}
            appearance="center"
            className="relative bg-white-100 dark:bg-purple-200"
        >
            <GreetingModal onCloseModal={onCloseModal} />
        </ModalBase>
    );
};
// p-0 tab:w-[86%] tab:min-w-[660px] pc:w-[59%] pc:min-w-[750px] desk:w-[55%] desk:min-w-[850px]
