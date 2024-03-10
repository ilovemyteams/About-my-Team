import { useTranslations } from "next-intl";
import { IconShare } from "./IconShare";

interface ButtonShareProps {
    className?: string;
}

export const ButtonShare = ({ className }: ButtonShareProps) => {
    const getTranslation = useTranslations("Buttons");
    return (
        <button type="button" className={`h-[25px] mr-[5px] ${className}`}>
            <div className="flex text-grey hover:text-red focus:text-red transition ease-in-out duration-300 ">
                <p className="border-b-[1px] mr-[5px] border-current">
                    {getTranslation("share")}
                </p>
                <IconShare />
            </div>
        </button>
    );
};
