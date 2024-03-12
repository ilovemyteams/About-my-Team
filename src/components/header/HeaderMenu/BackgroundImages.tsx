import Image from "next/image";

export const BackgroundImages = () => {
    return (
        <div className="h-[100vh] fixed w-80 blur-[100px] overflow-hidden z-[10]">
            <Image
                src="/images/bgImages/leftBottom.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute left-[-48px] bottom-0 w-[180px] h-[180px] z-[10]"
            />
            <Image
                src="/images/bgImages/rightBottom.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute right-[320px] bottom-0 w-[540px] h-[270px] z-[10]"
            />
            <Image
                src="/images/bgImages/rightTop.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute right-0 top-0 w-[314px] h-[253px] z-[10]"
            />
        </div>
    );
};
