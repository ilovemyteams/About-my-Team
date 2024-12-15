// "use client";

// import { AnimatePresence } from "framer-motion";
// import { useLocale } from "next-intl";
// import { useEffect, useState } from "react";

// import { GreetingModal } from "@/src/components/christmas/ChristmasMainPageModal/greetingModal/GreetingModal";

// const SESSION_LANG_KEY = "langOpened";

// export const GreetingPortal = () => {
//     const [isModalOpen, setIsModalOpen] = useState(true);

//     const locale = useLocale();

//     const onCloseModal = () => setIsModalOpen(false);

//     // useEffect(() => {
//     //     const langOpened = sessionStorage.getItem(SESSION_LANG_KEY);

//     //     if (langOpened) {
//     //         const sessionLang = langOpened.split(",");
//     //         const isInclude = sessionLang.includes(locale);

//     //         if (!isInclude) {
//     //             sessionLang.push(locale);
//     //             setIsModalOpen(true);
//     //             sessionStorage.setItem(SESSION_LANG_KEY, sessionLang.join(","));
//     //         }
//     //     }

//     //     if (!langOpened) {
//     //         setIsModalOpen(true);
//     //         sessionStorage.setItem(SESSION_LANG_KEY, locale);
//     //     }
//     // }, [locale]);

//     useEffect(() => {
//         const handleEsc = (event: KeyboardEvent) => {
//             if (event.key === "Escape") {
//                 onCloseModal();
//             }
//         };

//         document.addEventListener("keydown", handleEsc);

//         return () => {
//             document.removeEventListener("keydown", handleEsc);
//         };
//     }, []);

//     return (
//         <AnimatePresence>
//             {isModalOpen && <GreetingModal onCloseModal={onCloseModal} />}
//         </AnimatePresence>
//     );
// };
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
            className="relative"
        >
            <GreetingModal onCloseModal={onCloseModal} />
        </ModalBase>
    );
};
