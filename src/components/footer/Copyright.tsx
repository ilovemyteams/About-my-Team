import { useTranslations } from "next-intl";

export const Copyright = () => {
    const getTranslation = useTranslations("Footer");
    return (
        <p className="font-geist text-xs desk:text-sm">
            &#169; {getTranslation("copyright")}
        </p>
    );
};