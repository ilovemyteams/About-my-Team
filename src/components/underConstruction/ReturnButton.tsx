"use client";

import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

import { Button } from "../shared/Button";

export const ReturnButton = () => {
    const router = useRouter();
    const getTranslation = useTranslations("Buttons");

    const onClick = useCallback(() => {
        router.back();
    }, [router]);

    return <Button onClick={onClick}>{getTranslation("return")}</Button>;
};
