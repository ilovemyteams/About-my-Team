import { useTranslations } from "next-intl";
import { IconShare } from "./IconShare";

interface ButtonShareProps {
    className?: string;
}

export const ButtonShare = ({ className }: ButtonShareProps) => {
    const getTranslation = useTranslations("Buttons");
    return (
        <button
            type="button"
            className={`h-[25px] flex text-grey font-caviar hover:text-red focus:text-red transition ease-out duration-300 ${className}`}
        >
            <p className="hidden pc:block pc:border-b-[1px] pc:mr-[5px] pc:border-current">
                {getTranslation("share")}
            </p>
            <IconShare />
        </button>
    );
};
