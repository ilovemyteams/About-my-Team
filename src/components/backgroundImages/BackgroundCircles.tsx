import Image from "next/image";

interface BackgroundCirclesProps {
    className?: string;
}

export const BackgroundCircles = ({ className }: BackgroundCirclesProps) => {
    return (
        <div
            className={`hidden pc:block h-[100vh] desk:hidden absolute w-screen overflow-hidden z-[-10] ${className}`}
        >
            <Image
                src="/images/bgImages/leftBottom.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:block absolute left-0 bottom-0 w-[363px] h-[333px] z-[-10]`}
            />
            <Image
                src="/images/bgImages/rightBottom.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:block absolute right-0 bottom-0 w-[970px] h-[427px] z-[-10]`}
            />
            <Image
                src="/images/bgImages/rightTop.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:block absolute right-0 top-0 w-[520px] h-[440px] z-[-10] `}
            />
            <Image
                src="/images/bgImages/rightTopLight.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`block dark:hidden absolute right-0 top-0 w-[542px] h-[592px] z-[-10] `}
            />
        </div>
    );
};
