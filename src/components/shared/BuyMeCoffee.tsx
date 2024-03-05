import Link from "next/link";
import Image from "next/image";

export const BuyMeCoffee = () => {
    return (
        <Link href="#" target="_blank" className="pointer">
            <Image
                src="/images/CoffeeCup.svg"
                width={31}
                height={45}
                alt="Buy me a coffe logo"
            />
        </Link>
    );
};
