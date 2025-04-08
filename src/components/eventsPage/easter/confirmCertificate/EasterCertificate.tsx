"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/src/components/shared/Button";

import { ConfirmEasterCertificate } from "./ConfirmEasterCertificate";

export const EasterCertificate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const getTranslation = useTranslations("EasterEvent");

    const onClickGetCertificate = () => {
        // setIsOpen(true);
    };

    const onCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Button onClick={onClickGetCertificate}>
                {getTranslation("heroBtn")}
            </Button>
            <ConfirmEasterCertificate
                isOpen={isOpen}
                onCloseModal={onCloseModal}
            />
        </>
    );
};
