import { useTranslations } from "next-intl";

import { loadButtonsSettingsQuery } from "@/sanity/utils/loadQuery";

import { Button } from "./Button";

const JOIN_US_LINK = "https://forms.gle/nhbFek3qZYQgo9V19";

export default async function JoinUsButton({ locale }: { locale: string }) {
    const getTranslation = useTranslations();
    const { data } = await loadButtonsSettingsQuery(locale);

    console.log(data?.buttonJoinUS?.buttonName);

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
