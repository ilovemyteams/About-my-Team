import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { selectedLink } from "@/src/utils/selectedLink";

export const PolicyLabel = () => {
    const getTranslation = useTranslations("CustomerForm");
    const locale = useLocale();
    const policyURL = selectedLink(locale);

    return (
        <p className="max-w-[65%]">
            {getTranslation("informedAgreement")}
            <a
                href={policyURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-130 dark:text-purple-50"
            >
                {getTranslation("rulesLink")}
            </a>
        </p>
    );
};
