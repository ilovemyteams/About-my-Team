import Image from "next/image";

export const BurgerMenuButton = () => {
    return (
        <button type="button">
            <Image
                src="/images/burger.svg"
                width="0"
                height="0"
                alt="Burger menu"
                className="w-[48px] h-auto"
            />
        </button>
    );
};
