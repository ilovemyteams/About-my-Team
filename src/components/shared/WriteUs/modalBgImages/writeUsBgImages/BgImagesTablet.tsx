import Image from "next/image";

export const BgImagesTablet = () => {
    return (
        <div>
            <Image
                src="/images/bgImagesModalWriteUs/rightTopTablet.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:tab:block dark:pc:hidden absolute top-0 right-0 z-[-10] w-[388px] h-[328px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/leftBottomTablet.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:tab:block dark:pc:hidden absolute bottom-0 left-0 z-[-10] w-[365px] h-[284px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/rightBottomTablet.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:tab:block dark:pc:hidden absolute bottom-0 right-0 z-[-10] w-[418px] h-[250px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/rightTopTabletLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden tab:block pc:hidden dark:hidden absolute top-0 right-0 z-[-10] w-[412px] h-[502px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/leftBottomTabletLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden tab:block pc:hidden dark:hidden absolute bottom-0 left-0 z-[-10] w-[388px] h-[263px]"
            />
        </div>
    );
};
