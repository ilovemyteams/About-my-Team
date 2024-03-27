import Image from "next/image";
import { useTranslations } from "next-intl";

interface BuyMeCoffeeLinkProps {
    className?: string;
    textClassName?: string;
}

const BUY_ME_COFFEE = "https://www.buymeacoffee.com/susanna.salata";

export const BuyMeCoffeeLink = ({
    className,
    textClassName = "right-[56px]",
}: BuyMeCoffeeLinkProps) => {
    const getTranslation = useTranslations("Buttons");
    return (
        <a
            href={BUY_ME_COFFEE}
            target="_blank"
            rel="noopener noreferrer"
            className={`pointer relative group  w-[56px] h-[56px]  flex justify-center items-center     
                        icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
                        icon-hover-rounded-purple:active ${className}`}
        >
            <Image
                src="/images/coffeeCup.svg"
                width="0"
                height="0"
                alt="Buy me a coffe logo"
                className="w-12 h-12"
            />
            <p
                className={`hidden pc:block absolute font-caviar text-2xlb top-0  translate-y-1/2 w-max opacity-0 
                    invisible group-hover:visible  group-hover:opacity-100 duration-[600ms] group-hover:ease-in  transition-opacity transition-visibility ${textClassName}`}
            >
                {getTranslation("buyMeACoffe")}
            </p>
        </a>
    );
};
