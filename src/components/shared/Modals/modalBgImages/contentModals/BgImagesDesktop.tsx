import Image from "next/image";

export const BgImagesDesktop = () => {
    return (
        <div>
            <Image
                src="/images/bgImagesModalWriteUs/rightTopDesktop.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:pc:block absolute top-0 right-0 z-[-10] w-[372px] h-[314px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/leftBottomDesktop.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:pc:block absolute bottom-0 left-0 z-[-10] w-[253px] h-[232px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/rightBottomDesktop.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:pc:block absolute bottom-0 right-0 z-[-10] w-[474px] h-[284px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/rightTopDesktopLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden pc:block dark:hidden absolute top-0 right-0 z-[-10] w-[407px] h-[445px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/leftBottomDesktopLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden pc:block dark:hidden absolute bottom-0 left-0 z-[-10] w-[454px] h-[333px]"
            />
        </div>
    );
};
