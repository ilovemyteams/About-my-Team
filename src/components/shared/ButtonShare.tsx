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
            className={`h-[48px] gap-2 text-grey font-caviar tab:text-lg text-lg hover:text-red focus:text-red transition ease-out duration-300 ${className}`}
        >
            <div className="flex">
                <p className="hidden pc:block pc:border-b-[1px] pc:mr-[5px] pc:border-current">
                    {getTranslation("share")}
                </p>
                <IconShare />
            </div>
            className=
            {`h-[25px] flex gap-2 text-grey font-caviar tab:text-lg hover:text-red focus:text-red transition ease-out duration-300 ${className}`}
            <p className="hidden tab:block tab:border-b-[1px] tab:border-current">
                {getTranslation("share")}
            </p>
            <IconShare />
        </button>
    );
};
