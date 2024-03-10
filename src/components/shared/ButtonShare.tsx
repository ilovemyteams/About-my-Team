import Image from "next/image";
import { useTranslations } from "next-intl";

interface ButtonShareProps {
    className?: string;
}

export const ButtonShare = ({ className }: ButtonShareProps) => {
    const getTranslation = useTranslations("Buttons");
    return (
        <button
            type="button"
            className={`h-[25px] justify-end items-end mr-[5px] ${className}`}
        >
            <div className="group flex hover:text-red focus:text-red">
                <p className="border-b-[1px] mr-[5px] group-hover:border-red group-focus:border-red">
                    {getTranslation("share")}
                </p>
                <Image
                    src="/images/solarShareLinear.svg"
                    width="0"
                    height="0"
                    alt="Share icon"
                    className="w-[24px] h-auto hover:fill-red group-hover:text-red group-focus:fill-red"
                />
            </div>
        </button>
    );
};
