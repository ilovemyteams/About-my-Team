"use client";
import { useTranslations } from "next-intl";
import React from "react";

import { useRouter } from "@/src/i18n/routing";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

import { Button } from "../../../shared/Button";

export const ViewProfileButton = () => {
    const { setPreviousURL } = usePreviousURL();
    const t = useTranslations("MemberPage");
    const router = useRouter();

    const onClickViewProfileBtn = () => {
        router.push("/team");
        setPreviousURL(`back`);
    };
    return (
        <Button
            color="grey"
            className="w-full max-w-[270px] mx-auto"
            size="small"
            onClick={onClickViewProfileBtn}
        >
            {t("seeProfile")}
        </Button>
    );
};
