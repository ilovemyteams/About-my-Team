import Image from "next/image";

export const BrokenHeart = () => {
    return (
        <div
            className="flex justify-center pc:w-[625px] animate-pulsation "
            style={{ animationDelay: "1s" }}
        >
            <Image
                src="/images/heart404left.svg"
                width="0"
                height="0"
                alt="Broken heart icon"
                className="w-[67px] tab:w-[128px] pc:w-[229px]  h-auto
                animate-brokenHeart"
                style={{
                    animationFillMode: "forwards",
                    transform: "rotate(45deg)",
                    animationDelay: "3s",
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
