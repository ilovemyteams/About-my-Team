import Image from "next/image";

interface BackgroundCirclesProps {
    className?: string;
}

export const BackgroundCirclesBigScreens = ({
    className,
}: BackgroundCirclesProps) => {
    return (
        <div
            className={`hidden desk:block h-[100vh] absolute w-screen overflow-hidden z-[-10] ${className}`}
        >
            <Image
                src="/images/bgImages/leftBottom1536screen.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:block absolute left-0 bottom-0 w-[439px] h-[403px] z-[-10]`}
            />

            <Image
                src="/images/bgImages/rightBottom1536screen.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:block deskxl:hidden absolute right-[46px] bottom-0 w-[970px] h-[427px] z-[-10]`}
            />
            <Image
                src="/images/bgImages/rightBottom1920screen.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:deskxl:block absolute right-[20px] bottom-0 w-[1291px] h-[569px] z-[-10]`}
            />
            <Image
                src="/images/bgImages/rightTop1536screen.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:block dark:deskxl:hidden absolute right-0 top-0 w-[649px] h-[550px] z-[-10] `}
            />
            <Image
                src="/images/bgImages/rightTop1920screen.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:deskxl:block absolute right-0 top-0 w-[671px] h-[569px] z-[-10] `}
            />
            <Image
                src="/images/bgImages/rightTop1920screenLight.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`hidden dark:hidden deskxl:block absolute right-0 top-0 w-[871px] h-[779px] z-[-10] `}
            />
        </div>
    );
};
