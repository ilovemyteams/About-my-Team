import { useTranslations } from "next-intl";
import { IconShare } from "./Icons/IconShare";

interface ButtonShareProps {
    className?: string;
}

export const ButtonShare = ({ className }: ButtonShareProps) => {
    const getTranslation = useTranslations("Buttons");
    return (
        <button
            type="button"
            className={`h-[25px] flex gap-2 text-grey font-caviar tab:text-lg hover:text-red focus:text-red transition ease-out duration-300 ${className}`}
        >
            <p className="hidden tab:block tab:border-b-[1px] tab:border-current">
                {getTranslation("share")}
            </p>
            <IconShare />
        </button>
    );
};
