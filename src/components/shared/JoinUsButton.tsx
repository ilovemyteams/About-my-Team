"use client";
import { useTranslations } from "next-intl";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

import { Button } from "./Button";

export const JoinUsButton = () => {
    const getTranslation = useTranslations("Buttons");
    const { data } = useSettingsContext();

    const buttonNameString = data?.buttonJoinUS?.buttonName
        ? data.buttonJoinUS.buttonName.toString()
        : getTranslation("joinUs");

    const JOIN_US_LINK = data?.buttonJoinUS?.buttonPageLink
        ? data.buttonJoinUS.buttonPageLink
        : "";
    return (
        <a
            href={JOIN_US_LINK}
            target={data?.buttonJoinUS?.newWindow ? "_blank" : ""}
            rel="noopener noreferrer"
            className="outline-none"
        >
            <Button color="grey">{buttonNameString}</Button>
        </a>
    );
};
