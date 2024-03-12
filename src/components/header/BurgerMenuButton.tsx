interface BurgerMenuButtonProps {
    isHeaderMenuOpened: boolean;
    toggleHeaderMenuOpen: () => void;
}
const firstLineBaseStyles = "top-[6px] left-0 opacity-100";
const firstLineTransformStyles = "top-[-3px] left-[6px] opacity-0";
const secondLineBaseStyles = "top-[18px]";
const secondLineTransformStyles = "rotate-[-45deg] top-[18px]";
const thirdLineBaseStyles = "top-[30px]";
const thirdLineTransformStyles = "rotate-45 top-[18px]";

export const BurgerMenuButton = ({
    isHeaderMenuOpened,
    toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) => {
    return (
        <button
            type="button"
            onClick={toggleHeaderMenuOpen}
            className="w-[48px] h-[48px] p-1  flex justify-center items-center
            after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-[48px] hover:after:h-[48px]
            focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-[48px] focus-visible:after:h-[48px] 
            focus-visible:outline-none focus-within:outline-none"
        >
            <div className="pointer w-[40px] h-[40px] rotate-0 transition-all duration-[600ms] ease-out">
                <span
                    className={`block absolute w-full h-[3px] bg-grey rotate-0 transition-transform-opacity duration-300 ease-out origin-right-center ${isHeaderMenuOpened ? firstLineTransformStyles : firstLineBaseStyles}`}
                ></span>
                <span
                    className={`block absolute left-0 w-full h-[3px] mb-[6px] bg-grey rotate-0 transition-transform duration-300 ease-out origin-right-center ${isHeaderMenuOpened ? secondLineTransformStyles : secondLineBaseStyles}`}
                ></span>
                <span
                    className={`block absolute left-0 w-full h-[3px] bg-grey rotate-0 transition-transform duration-300 ease-out origin-right-center ${isHeaderMenuOpened ? thirdLineTransformStyles : thirdLineBaseStyles}`}
                ></span>
            </div>
        </button>
    );
};
