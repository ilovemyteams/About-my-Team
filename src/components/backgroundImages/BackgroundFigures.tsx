import Image from "next/image";

export const BackgroundFigures = () => {
    return (
        <>
            <div className="hidden absolute pc:flex items-end overflow-hidden z-[-10] pc:right-0 pc:top-0  pc:h-[786px] pc:w-[569px] ">
                <Image
                    src="/images/bgImages/curve.svg"
                    width="0"
                    height="0"
                    alt="background image curve"
                    className="pc:object-none pc:object-left  pc:top-[-502px] pc:w-[1276px] pc:h-[1288px] z-[-10]"
                />
            </div>

            <div className="absolute pc:hidden flex items-end w-[272px] h-[244px] right-0 overflow-hidden z-[-10]">
                <Image
                    src="/images/bgImages/curveMobile.svg"
                    width="0"
                    height="0"
                    alt="background image curve"
                    className="w-[272px] h-[244px] object-cover relative right-[-136px] top-[-25px] z-[-10]"
                />
            </div>

            <div className="absolute left-[6px] bottom-5  w-[206px] h-[182px] overflow-hidden z-[-10] pc:w-[357px] pc:h-[230px] pc:left-[100px] pc:bottom-0 ">
                <Image
                    src="/images/bgImages/heart.svg"
                    width="0"
                    height="0"
                    alt="background image heart"
                    className="w-[206px] h-[182px] pc:w-[357px] pc:h-[315px]"
                />
            </div>
        </>
    );
};
