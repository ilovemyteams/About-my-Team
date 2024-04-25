import Image from "next/image";

interface BackgroundCirclesProps {
    className?: string;
}

export const BackgroundCirclesMobile = ({
    className,
}: BackgroundCirclesProps) => {
    return (
        <div
            className={`tab:hidden absolute z-[-10] w-screen h-[100vh] overflow-hidden ${className}`}
        >
            <Image
                src="/images/bgImages/leftBottomMobile.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="hidden dark:block absolute left-0 bottom-0 w-[120px] h-[136px] z-[-10] "
            />

            <Image
                src="/images/bgImages/rightTopMobile.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="hidden dark:block absolute right-0 top-0 w-[320px] h-[319px] z-[-10] "
            />
        </div>
    );
};
