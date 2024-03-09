interface BurgerMenuButtonProps {
    isHeaderMenuOpened: boolean;
    toggleHeaderMenuOpen: () => void;
}
const firstLineBaseStyles = "top-[6px] left-0 opacity-100";
const firstLineTransformStyles = "top-[-3px] left-[6px] opacity-0";
const secondLineBaseStyles = "top-[18px]";
const secondLineTransformStyles = "rotate-[-45deg] top-[12px]";
const thirdLineBaseStyles = "top-[30px]";
const thirdLineTransformStyles = "rotate-45 top-[12px]";

export const BurgerMenuButton = ({
    isHeaderMenuOpened,
    toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) => {
    return (
        <button
            type="button"
            onClick={toggleHeaderMenuOpen}
            className="w-[48px] h-[48px] p-1"
        >
            <div className="pointer w-[40px] h-[40px] rotate-0 transition-all duration-[600ms] ease-out">
                <span
                    className={`block absolute w-full h-[3px] bg-grey rotate-0 transition-all duration-500 ease-out origin-right-center ${isHeaderMenuOpened ? firstLineTransformStyles : firstLineBaseStyles}`}
                ></span>
                <span
                    className={`block absolute left-0 w-full h-[3px] mb-[6px] bg-grey rotate-0 transition-transform duration-300 ease-out origin-right-center ${isHeaderMenuOpened ? secondLineTransformStyles : secondLineBaseStyles}`}
                ></span>
                <span
                    className={`block absolute left-0 w-full h-[3px] bg-grey rotate-0 transition-all duration-300 ease-out origin-right-center ${isHeaderMenuOpened ? thirdLineTransformStyles : thirdLineBaseStyles}`}
                ></span>
            </div>
        </button>
    );
};
