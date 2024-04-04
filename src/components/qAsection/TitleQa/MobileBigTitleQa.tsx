import { useTranslations } from "next-intl";

export const MobileBigTitleQa = () => {
    const getTranslation = useTranslations("Q&A");
    return (
        <div className="tab:hidden">
            <p>{getTranslation("mobileBigTitlePart1")}</p>
            <p>{getTranslation("mobileBigTitlePart2")}</p>
        </div>
    );
};
