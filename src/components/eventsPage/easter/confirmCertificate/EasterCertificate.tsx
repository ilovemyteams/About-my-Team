"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Button } from "@/src/components/shared/Button";

import { ConfirmEasterCertificate } from "./ConfirmEasterCertificate";

interface EasterCertificateProps {
    onStartAnimation: () => void;
    onFixEgg: () => void;
}

export const EasterCertificate = ({
    onStartAnimation,
    onFixEgg,
}: EasterCertificateProps) => {
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
        onStartAnimation();
        sendGTMEvent({
            event: "easter_get_certificate_button",
        });
        setIsDisabled(true);
        setTimeout(() => setIsOpen(true), 4500);
    };

    const onCloseModal = () => {
        setIsOpen(false);
    };

    const onEnableBtn = () => {
        setIsDisabled(false);
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
                onFixEgg={onFixEgg}
                onEnableBtn={onEnableBtn}
            />
        </>
    );
};
