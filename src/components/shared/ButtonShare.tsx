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
            className={`h-[25px] flex gap-2 text-grey font-caviar tab:text-lg pc:hover:text-red pc:focus:text-red 
            pc:transition pc:ease-out pc:duration-300 active:text-red ${className}`}
        >
            <p className="hidden pc:block pc:border-b-[1px] pc:border-current">
                {getTranslation("share")}
            </p>
            <IconShare />
        </button>
    );
};
