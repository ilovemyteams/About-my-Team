import { useTranslations } from "next-intl";

const POLICY_URL =
    "https://docs.google.com/document/d/15HKGntO49g31dABMHtYPvmoMHeIjAvZyzIcSR9HQ-lA/edit";

export const PrivacyPolicy = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <a
            href={POLICY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-[20px] tab:mb-0 text-sm outline-none dark:pc:hover:text-red pc:hover:text-redLight 
            dark:pc:focus:text-red pc:focus:text-redLight dark:active:text-red 
            active:text-redLight transition ease-out duration-300 deskxl:text-base"
        >
            {getTranslation("privacyPolicy").toUpperCase()}
        </a>
    );
};
