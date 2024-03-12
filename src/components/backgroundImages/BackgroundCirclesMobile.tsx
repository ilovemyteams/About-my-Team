import Image from "next/image";

export const BackgroundCirclesMobile = () => {
    return (
        <div className="pc:hidden h-[100vh] absolute w-screen blur-[100px] overflow-hidden z-[-10]">
            <Image
                src="/images/bgImages/leftBottomMobile.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute left-0 bottom-0 w-[120px] h-[136px] z-[-10]"
            />

            <Image
                src="/images/bgImages/rightTopMobile.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute right-0 top-0 w-[189px] h-[269px] z-[-10]"
            />
        </div>
    );
};
