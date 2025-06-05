import { useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/src/i18n/routing";

export const PolicyLabel = () => {
    const getTranslation = useTranslations("CustomerForm");

    return (
        <p className="max-w-[65%] text-xs tab:text-sm">
            {getTranslation("informedAgreement")}
            <Link
                href="/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-130 dark:text-purple-50"
            >
                {getTranslation("rulesLink")}
            </Link>
        </p>
    );
};
