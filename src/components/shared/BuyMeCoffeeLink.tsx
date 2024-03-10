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
            className={`pointer relative w-[48px] h-[48px] flex justify-center items-center
            after:content-[''] after:absolute after:w-[48px] after:h-[48px] after:top-0 after:left-0 
            hover:after:transition-opacity hover:after:duration-500 hover:after:ease-out
            after:opacity-0 after:bg-purple-stroke03 
            hover:after:opacity-100 hover:after:blur-[2px] hover:after:rounded-full
            focus:after:opacity-100 focus:after:blur-[2px] focus:after:rounded-full focus:outline-none focus-within:outline-none ${className}`}
        >
            <Image
                src="/images/coffeeCup.svg"
                width={31}
                height={45}
                alt="Buy me a coffe logo"
            />
        </a>
    );
};
