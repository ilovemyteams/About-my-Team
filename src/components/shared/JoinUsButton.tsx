"use client";
import { useTranslations } from "next-intl";

import { useDataSettingsContext } from "@/src/utils/SettingsSanityContext";

import { Button } from "./Button";

export const JoinUsButton = () => {
    const { dataSettings } = useDataSettingsContext();
    const getTranslation = useTranslations();
    console.log(dataSettings?.buttonJoinUS?.buttonName);
    const JOIN_US_LINK = dataSettings?.buttonJoinUS?.linkExternal?.url
        ? dataSettings.buttonJoinUS.linkExternal.url
        : "https://forms.gle/nhbFek3qZYQgo9V19";

    const buttonName = dataSettings?.buttonJoinUS?.buttonName
        ? dataSettings.buttonJoinUS.buttonName.toString()
        : getTranslation("Buttons.joinUs");

    return (
        <a
            href={JOIN_US_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none"
        >
            <Button color="grey">{buttonName}</Button>
        </a>
    );
};
