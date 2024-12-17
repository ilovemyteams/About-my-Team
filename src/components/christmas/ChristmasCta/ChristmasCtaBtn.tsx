"use client";
import { useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/src/navigation";

import { Button } from "../../shared/Button";

export const ChristmasCtaBtn = () => {
    const getTranslation = useTranslations("Christmas");
    const router = useRouter();
    const pathName = usePathname();

    const onCLickBtn = () => {
        router.replace(`${pathName}#form`);
    };

    return <Button onClick={onCLickBtn}>{getTranslation("ctaBtn")}</Button>;
};
