import { useTranslations } from "next-intl";

import { loadButtonsSettingsQuery } from "@/sanity/utils/loadQuery";

import { Button } from "./Button";

export default async function JoinUsButton({ locale }: { locale: string }) {
    const getTranslation = useTranslations();
    const { data } = await loadButtonsSettingsQuery(locale);
    const JOIN_US_LINK = data?.buttonJoinUS?.linkExternal?.url
        ? data.buttonJoinUS.linkExternal.url
        : "https://forms.gle/nhbFek3qZYQgo9V19";

    console.log(data?.buttonJoinUS?.linkExternal?.url);

    const buttonName = data?.buttonJoinUS?.buttonName
        ? String(data.buttonJoinUS.buttonName)
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
}
