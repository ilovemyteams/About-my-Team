import { useTranslations } from "next-intl";
import React from "react";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

export const PolicyLabel = () => {
    const getTranslation = useTranslations("CustomerForm");
    const { footerData } = useSettingsContext();

    const selectedLink = footerData?.privacyPolicyURL || "";

    return (
        <p className="max-w-[65%] text-xs tab:text-sm">
            {getTranslation("informedAgreement")}
            <a
                href={selectedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-130 dark:text-purple-50"
            >
                {getTranslation("rulesLink")}
            </a>
        </p>
    );
};
