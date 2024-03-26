import { useTranslations } from "next-intl";
import { IconShare } from "./Icons/IconShare";

interface ButtonShareProps {
    className?: string;
}

export const ButtonShare = ({ className }: ButtonShareProps) => {
    const getTranslation = useTranslations("Buttons");
    return (
        <div className={` ${className}`}>
            <p className="hidden tab:block tab:border-b-[1px] tab:border-current">
                {getTranslation("share")}
            </p>
            <IconShare />
        </div>
    );
};
