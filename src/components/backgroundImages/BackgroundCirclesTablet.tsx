import Image from "next/image";

interface BackgroundCirclesProps {
    className?: string;
}

export const BackgroundCirclesTablet = ({
    className,
}: BackgroundCirclesProps) => {
    return (
        <div
            className={`hidden tab:block pc:hidden h-[100vh] absolute w-screen overflow-hidden z-[-10] ${className}`}
        >
            <Image
                src="/images/bgImages/leftBottomTablet.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`absolute left-0 bottom-0 w-[365px] h-[284px] z-[-10]`}
            />
            <Image
                src="/images/bgImages/rightBottomTablet.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`absolute right-0 bottom-0 w-[474px] h-[284px] z-[-10]`}
            />
            <Image
                src="/images/bgImages/rightTopTablet.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`absolute right-0 top-0 w-[388px] h-[328px] z-[-10] `}
            />
        </div>
    );
};
