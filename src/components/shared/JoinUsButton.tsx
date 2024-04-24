import { useTranslations } from "next-intl";
import { Button } from "./Button";

const JOIN_US_LINK = "https://forms.gle/nhbFek3qZYQgo9V19";

export const JoinUsButton = () => {
    const getTranslation = useTranslations();

    return (
        <a
            href={JOIN_US_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none"
        >
            <Button color="grey">{getTranslation("Buttons.joinUs")}</Button>
        </a>
    );
};
