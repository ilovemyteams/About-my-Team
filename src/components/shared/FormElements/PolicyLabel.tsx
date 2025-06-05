import { useTranslations } from "next-intl";
import React from "react";

import { Link } from "@/src/i18n/routing";

import { CustomCheckbox } from "./CustomCheckbox";

interface PolicyLabelProps {
    name: string;
}

export const PolicyLabel = ({ ...inputProps }: PolicyLabelProps) => {
    const getTranslation = useTranslations("CustomerForm");

    return (
        <div>
            <CustomCheckbox {...inputProps}>
                <p className="max-w-[65%] text-xs tab:text-sm">
                    {getTranslation("informedAgreement")}
                    <Link
                        href="/policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-130 dark:text-purple-50"
                    >
                        {getTranslation("privacyPolicy")}
                    </Link>
                    <span>{getTranslation("informedAgreementSeparator")}</span>
                    <Link
                        href="/oferta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-130 dark:text-purple-50"
                    >
                        {getTranslation("publicOffer")}
                    </Link>
                </p>
            </CustomCheckbox>
        </div>
    );
};
