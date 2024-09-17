"use client";
import { useTranslations } from "next-intl";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

import { Button } from "./Button";

const JOIN_US_LINK = "https://forms.gle/nhbFek3qZYQgo9V19";

export const JoinUsButton = () => {
    const getTranslation = useTranslations();
    const { data } = useSettingsContext();

    const buttonNameString = data?.buttonJoinUS?.buttonName
        ? data?.buttonJoinUS?.buttonName.toString()
        : getTranslation("Buttons.joinUs");

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
