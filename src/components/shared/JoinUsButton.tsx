"use client";
import { useTranslations } from "next-intl";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

import { Button } from "./Button";

export const JoinUsButton = () => {
    const getTranslation = useTranslations();
    const { data } = useSettingsContext();

    const buttonNameString = data?.buttonJoinUS?.buttonName
        ? data?.buttonJoinUS?.buttonName.toString()
        : getTranslation("Buttons.joinUs");

    const JOIN_US_LINK = data?.buttonJoinUS?.linkExternal?.url
        ? data.buttonJoinUS.linkExternal.url
        : "https://forms.gle/nhbFek3qZYQgo9V19";

    return (
        <a
            href={JOIN_US_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none"
        >
            <Button color="grey">{buttonNameString}</Button>
        </a>
    );
};
