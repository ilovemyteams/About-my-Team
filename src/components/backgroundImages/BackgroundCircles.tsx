import Image from "next/image";

export const BackgroundCircles = () => {
    return (
        <div className="hidden pc:block h-[100vh] absolute w-screen overflow-hidden z-[-10]">
            <Image
                src="/images/bgImages/leftBottom1.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute left-[32px] bottom-0 w-[483px] h-[483px] z-[-10]"
            />
            <Image
                src="/images/bgImages/rightBottom1.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute right-[240px] bottom-0 w-[970px] h-[427px] z-[-10]"
            />
            <Image
                src="/images/bgImages/rightTop1.svg"
                width="0"
                height="0"
                alt="background image circle"
                className="absolute right-0 top-0 w-[520px] h-[440px] z-[-10]"
            />
        </div>
    );
};
