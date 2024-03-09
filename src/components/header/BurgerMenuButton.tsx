import Image from "next/image";

interface BurgerMenuButtonProps {
    toggleHeaderMenuOpen: () => void;
}

export const BurgerMenuButton = ({
    toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) => {
    return (
        <button type="button" onClick={toggleHeaderMenuOpen}>
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
