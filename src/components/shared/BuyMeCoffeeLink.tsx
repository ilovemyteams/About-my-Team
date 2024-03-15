import Image from "next/image";

interface BuyMeCoffeeLinkProps {
    className?: string;
}

const BUY_ME_COFFEE = "https://www.buymeacoffee.com/susanna.salata";

export const BuyMeCoffeeLink = ({ className }: BuyMeCoffeeLinkProps) => {
    return (
        <a
            href={BUY_ME_COFFEE}
            target="_blank"
            rel="noopener noreferrer"
            className={`pointer relative w-[56px] h-[56px] flex justify-center items-center
            after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-full hover:after:full
            focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-full focus-visible:after:full 
            focus-visible:outline-none focus-within:outline-none
            ${className}`}
        >
            <Image
                src="/images/coffeeCup.svg"
                width="0"
                height="0"
                alt="Buy me a coffe logo"
                className="w-12 h-12"
            />
        </a>
    );
};
