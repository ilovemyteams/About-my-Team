import Image from "next/image";

interface BackgroundCirclesProps {
    className?: string;
}

export const BackgroundCircles = ({ className }: BackgroundCirclesProps) => {
    return (
        <div
            className={`hidden pc:block h-[100vh] absolute w-screen blur-[100px] overflow-hidden z-[-10] ${className}`}
        >
            <Image
                src="/images/bgImages/leftBottom1.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute left-0 bottom-0 w-[363px] h-[333px] z-[-10]"
            />
            <Image
                src="/images/bgImages/rightBottom1.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute right-[0px] bottom-0 w-[970px] h-[427px] z-[-10]"
            />
            <Image
                src="/images/bgImages/rightTop1.svg"
                width="0"
                height="0"
                alt="background image circle"
                className={`absolute right-0 top-0 w-[314px] h-[253px] z-[-10]`}
            />
        </div>
    );
};
