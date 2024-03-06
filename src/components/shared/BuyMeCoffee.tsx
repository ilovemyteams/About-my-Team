import Link from "next/link";
import Image from "next/image";

const BUY_ME_COFFEE = "https://www.buymeacoffee.com/susanna.salata";

export const BuyMeCoffee = () => {
    return (
        <Link href={BUY_ME_COFFEE} target="_blank" className="pointer">
            <Image
                src="/images/CoffeeCup.svg"
                width={31}
                height={45}
                alt="Buy me a coffe logo"
            />
        </Link>
    );
};
