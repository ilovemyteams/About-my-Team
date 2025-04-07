"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import { GreetingModal } from "./GreetingModal";

const SESSION_LANG_KEY = "langOpened";

export const GreetingPortal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pathname = usePathname();

    const locale = useLocale();

    const onCloseModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (pathname.includes("/events")) return;

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
    }, [locale, pathname]);

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
        <AnimatePresence>
            {isModalOpen && <GreetingModal onCloseModal={onCloseModal} />}
        </AnimatePresence>
    );
};
