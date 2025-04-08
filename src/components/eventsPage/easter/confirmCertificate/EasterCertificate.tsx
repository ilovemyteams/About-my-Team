"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Button } from "@/src/components/shared/Button";

import { ConfirmEasterCertificate } from "./ConfirmEasterCertificate";

export const EasterCertificate = () => {
    const [isOpen, setIsOpen] = useState(false);
    const getTranslation = useTranslations("EasterEvent");
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const checkDisabledButton = async () => {
            const participated =
                localStorage.getItem("easter_sertificate") === "true";

            if (participated) {
                setIsDisabled(true);
            } else {
                setIsDisabled(false);
            }
        };

        checkDisabledButton();

        window.addEventListener(
            "easter-sertificate-obtained",
            checkDisabledButton
        );

        return () => {
            window.removeEventListener(
                "easter-sertificate-obtained",
                checkDisabledButton
            );
        };
    }, []);

    const onClickGetCertificate = () => {
        setIsOpen(true);
    };

    const onCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Button disabled={isDisabled} onClick={onClickGetCertificate}>
                {isDisabled
                    ? getTranslation("heroBtnGot")
                    : getTranslation("heroBtn")}
            </Button>
            <ConfirmEasterCertificate
                isOpen={isOpen}
                onCloseModal={onCloseModal}
            />
        </>
    );
};
