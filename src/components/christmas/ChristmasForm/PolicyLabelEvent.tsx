import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

import { usePathname } from "@/src/navigation";
import { selectedLink } from "@/src/utils/selectedLink";

export const PolicyLabelEvent = () => {
    const getTranslation = useTranslations("Christmas");
    const locale = useLocale();
    const policyURL = selectedLink(locale);
    const pathName = usePathname();

    return (
        <p className="text-xs tab:text-sm">
            {getTranslation.rich("submittingConditions", {
                purple: chunk => (
                    <a
                        href={policyURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-100"
                    >
                        {chunk}
                    </a>
                ),
                purpleCond: chunk => (
                    <Link
                        href={`${pathName}#condition`}
                        className="text-purple-100"
                    >
                        {chunk}
                    </Link>
                ),
            })}
        </p>
    );
};
