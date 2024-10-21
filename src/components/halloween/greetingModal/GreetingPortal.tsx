"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { GreetingModal } from "./GreetingModal";

export const GreetingPortal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const onCloseModal = () => setIsModalOpen(false);

    console.log("isModalOpen", isModalOpen);
    useEffect(() => {
        console.log("useEffect");
        setIsModalOpen(true);

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
