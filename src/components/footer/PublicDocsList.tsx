import { useTranslations } from "next-intl";

import { DocTypeLink } from "./DocTypeLink";

export const PublicDocsList = () => {
    const getTranslation = useTranslations("Footer");

    return (
        <ul className="mb-5 flex flex-col gap-4 justify-center items-center tab:mb-0 tab:flex-row">
            <li>
                <DocTypeLink
                    title={getTranslation("privacyPolicy").toUpperCase()}
                    url={"/policy"}
                />
            </li>
            <li>
                <DocTypeLink
                    title={getTranslation("publicOffer").toUpperCase()}
                    url={"/oferta"}
                />
            </li>
        </ul>
    );
};
