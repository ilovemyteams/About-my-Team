"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { Button } from "@/src/components/shared/Button";
import { usePathname } from "@/src/navigation";

interface WriteUsProps {
    className?: string;
}

export const WriteUs = ({ className }: WriteUsProps) => {
    const getTranslation = useTranslations("Buttons");
    const router = useRouter();
    const locale = useLocale();
    const path = usePathname();

    const onClickButton = () => {
        router.push(`/${locale}/order`);
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
