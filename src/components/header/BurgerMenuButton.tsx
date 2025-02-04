interface BurgerMenuButtonProps {
    isHeaderMenuOpened: boolean;
    toggleHeaderMenuOpen: () => void;
}
const firstLineBaseStyles = "top-[7px] pc:top-[6px] left-0 opacity-100";
const firstLineTransformStyles = "top-[-3px] left-[6px] opacity-0";
const secondLineBaseStyles = "top-[17.4px] pc:top-[18px]";
const secondLineTransformStyles = "rotate-[-45deg] top-[16px] pc:top-[18px]";
const thirdLineBaseStyles = "top-[27px] pc:top-[30px]";
const thirdLineTransformStyles = "rotate-45 top-[16px] pc:top-[18px]";

export const BurgerMenuButton = ({
    isHeaderMenuOpened,
    toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) => {
    return (
        <button
            aria-label="open menu button"
            type="button"
            onClick={toggleHeaderMenuOpen}
            className="relative w-12 pc:mx-auto h-12 p-[7.2px] pc:p-1 flex justify-center items-center icon-hover-rounded-purple"
        >
            <div className="pointer w-full h-full rotate-0 transition-all duration-[600ms] ease-out">
                <span
                    className={`block absolute w-full h-[2.2px] pc:h-[3px] dark:bg-grey bg-greyLight rotate-0 transition-transform-opacity duration-300 ease-out origin-right-center ${isHeaderMenuOpened ? firstLineTransformStyles : firstLineBaseStyles}`}
                ></span>
                <span
                    className={`block absolute left-0 w-full h-[2.3px] pc:h-[3.1px] dark:bg-grey bg-greyLight rotate-0 transition-transform duration-300 ease-out origin-right-center ${isHeaderMenuOpened ? secondLineTransformStyles : secondLineBaseStyles}`}
                ></span>
                <span
                    className={`block absolute left-0 w-full h-[2.3px] pc:h-[3.1px] dark:bg-grey bg-greyLight rotate-0 transition-transform duration-300 ease-out origin-right-center ${isHeaderMenuOpened ? thirdLineTransformStyles : thirdLineBaseStyles}`}
                ></span>
            </div>
        </button>
    );
};
