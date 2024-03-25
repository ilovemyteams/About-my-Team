import Image from "next/image";

export const BrokenHeart = () => {
    return (
        <div
            className="flex justify-center pc:w-[625px] animate-pulsationBrokenHeart"
            style={{ animationDelay: "1s" }}
        >
            <Image
                src="/images/heart404left.svg"
                width="0"
                height="0"
                alt="Broken heart icon"
                className="w-[67px]
                translate-x-[29px] translate-y-[-8.5px]
               
                 tab:w-[128px] pc:w-[229px]  h-auto
              animate-brokenHeart
                "
                style={{
                    animationFillMode: "forwards",
                    animationDelay: "1.6s",
                }}
            />
            <Image
                src="/images/heart404right.svg"
                width="0"
                height="0"
                alt="Broken heart icon"
                className="w-[98px] tab:w-[186px] pc:w-[324px] h-auto"
            />
        </div>
    );
};
