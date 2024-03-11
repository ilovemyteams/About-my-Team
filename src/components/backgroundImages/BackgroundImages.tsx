import Image from "next/image";

export const BackgroundImages = () => {
    return (
        <>
            <div className="h-[100vh] absolute w-screen blur-[100px] overflow-hidden z-[-10]">
                <Image
                    src="/images/bgImages/leftBottom.svg"
                    width="0"
                    height="0"
                    alt="background image circle"
                    className="absolute left-[32px] bottom-0 w-[180px] h-[180px] z-[-10]"
                />
                <Image
                    src="/images/bgImages/rightBottom.svg"
                    width="0"
                    height="0"
                    alt="background image circle"
                    className="absolute right-[240px] bottom-0 w-[540px] h-[270px] z-[-10]"
                />
                <Image
                    src="/images/bgImages/rightTop.svg"
                    width="0"
                    height="0"
                    alt="background image circle"
                    className="absolute right-0 top-0 w-[314px] h-[253px] z-[-10]"
                />
            </div>

            <div className="absolute right-0 top-0 flex items-end h-[786px] w-[569px] overflow-hidden z-[-10] ">
                <Image
                    src="/images/bgImages/curve.svg"
                    width="0"
                    height="0"
                    alt="background image curve"
                    className="object-none object-left	top-[-502px] w-[1276px] h-[1288px] z-[-10]"
                />
            </div>

            <div className="absolute left-[100px] bottom-0 h-[230px] w-[357px] overflow-hidden z-[-10]">
                <Image
                    src="/images/bgImages/heart.svg"
                    width="0"
                    height="0"
                    alt="background image heart"
                    className="w-[357px] h-[315px]"
                />
            </div>
        </>
    );
};
