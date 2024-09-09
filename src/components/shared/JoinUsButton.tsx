import { useTranslations } from "next-intl";

import { InternationalizedArrayString } from "@/types/sanity.types";

import { Button } from "./Button";

const JOIN_US_LINK = "https://forms.gle/nhbFek3qZYQgo9V19";

export const JoinUsButton = ({
    buttonName,
}: {
    buttonName: InternationalizedArrayString;
}) => {
    const getTranslation = useTranslations();
    const buttonNameString = String(buttonName);

    return (
        <a
            href={JOIN_US_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none"
        >
            <Button color="grey">
                {buttonNameString
                    ? buttonNameString
                    : getTranslation("Buttons.joinUs")}
            </Button>
        </a>
    );
};
