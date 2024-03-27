import Image from "next/image";

export const BrokenHeart = () => {
    return (
        <div className="flex justify-center w-[203px] mx-[auto] tab:justify-end tab:w-[386px] pc:w-[675px] animate-pulsationBrokenHeart  animate-delay-1000">
            <Image
                src="/images/heart404left.svg"
                width="0"
                height="0"
                alt="Broken heart icon"
                className="w-[67px] h-auto
                translate-x-[29px] translate-y-[-8.5px] animate-brokenHeart animate-delay-[1400ms]

                tab:translate-x-[55px] tab:translate-y-[-17.6px]
                tab:w-[128px] 
                tab:animate-brokenHeartTablet
                tab:animate-delay-[1400ms]

                pc:translate-x-[98px] pc:translate-y-[-28px]
                pc:w-[229.17px]  
                pc:animate-brokenHeartPC
                pc:animate-delay-[1400ms]"
            />
            <Image
                src="/images/heart404right.svg"
                width="0"
                height="0"
                alt="Broken heart icon"
                className="w-[98px] tab:w-[186px]  pc:w-[324px] h-auto"
            />
        </div>
    );
};
