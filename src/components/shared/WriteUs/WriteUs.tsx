"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/src/components/shared/Button";
import { usePathname, useRouter } from "@/src/i18n/routing";

interface WriteUsProps {
    className?: string;
    eventGTM?: string;
    buttonName?: string;
    topic?: string;
}

export const WriteUs = ({
    className,
    eventGTM,
    buttonName,
    topic,
}: WriteUsProps) => {
    const getTranslation = useTranslations("Buttons");
    const router = useRouter();
    const link = usePathname();

    const path = topic
        ? topic
        : link
          ? link
          : buttonName
            ? buttonName
            : getTranslation("order");

    const onClickButton = () => {
        router.push(`/order?topic=${path}`);
        sendGTMEvent({
            event: eventGTM || "order_form_start",
            page_location: path,
        });
    };

    return (
        <Button onClick={onClickButton} className={className}>
            {buttonName ? buttonName : getTranslation("order")}
        </Button>
    );
};
