"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/src/components/shared/Button";
import { usePathname, useRouter } from "@/src/i18n/routing";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    const getTranslation = useTranslations("Buttons");
    const router = useRouter();

    const path = usePathname();

    const onClickButton = () => {
        router.push(`/order?source=${path}`);
        sendGTMEvent({
            event: "order_form_start",
            page_location: path,
        });
    };

    return (
        <Button onClick={onClickButton} className={className}>
            {getTranslation("order")}
        </Button>
    );
};
