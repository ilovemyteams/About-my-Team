import Image from "next/image";

export const BrokenHeart = () => {
    return (
        <div
            className="flex justify-end w-[203px] mx-[auto] tab:w-[386px]  pc:w-[675px] animate-pulsationBrokenHeart"
            style={{ animationDelay: "1s" }}
        >
            <Image
                src="/images/heart404left.svg"
                width="0"
                height="0"
                alt="Broken heart icon"
                className="w-[67px] h-auto
                translate-x-[29px] translate-y-[-8.5px] animate-brokenHeart
               
                tab:translate-x-[56px] tab:translate-y-[-15.5px]
                tab:w-[128px] 
                tab:animate-brokenHeartTablet
                
                pc:translate-x-[98px] pc:translate-y-[-26px]
                pc:w-[229px]  
                pc:animate-brokenHeartPC"
                style={{
                    animationFillMode: "forwards",
                    animationDelay: "1.4s",
                }}
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
