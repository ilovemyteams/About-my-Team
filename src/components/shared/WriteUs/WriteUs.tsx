"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/src/components/shared/Button";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    const getTranslation = useTranslations("Buttons");
    const router = useRouter();
    const locale = useLocale();

    const onClickButton = () => {
        router.push(`/${locale}/order`);
        sendGTMEvent({
            event: "order_form_start",
            value: "Order form started",
        });
    };

    return (
        <Button id="order-button" onClick={onClickButton} className={className}>
            {getTranslation("order")}
        </Button>
    );
};
