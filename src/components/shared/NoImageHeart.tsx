import Image from "next/image";

export const NoImageHeart = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/images/heartHeaderMenu.svg"
            width={240}
            height="0"
            alt="logo heart"
            className={`min-w-[102px] max-w-[240px] h-auto ${className}`}
        />
    );
};
