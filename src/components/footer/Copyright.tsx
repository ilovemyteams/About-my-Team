import { useTranslations } from "next-intl";

export const Copyright = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <p className="pc:mb-0 font-geist text-xs">
            &#169; {getTranslation("copyright")}
        </p>
    );
};
