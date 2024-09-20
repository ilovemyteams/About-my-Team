import Image from "next/image";

export const BgImagesTablet = () => {
    return (
        <>
            <Image
                src="/images/bgImagesNotification/rightTopTablet.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:tab:block dark:pc:hidden absolute top-0 right-0 z-[-10] w-[298px] h-[319px]"
            />
            <Image
                src="/images/bgImagesNotification/leftBottomTablet.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:tab:block dark:pc:hidden absolute bottom-0 left-0 z-[-10] w-[353px] h-[317px]"
            />
            <Image
                src="/images/bgImagesNotification/rightTopTabletLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden tab:block pc:hidden dark:hidden absolute top-0 right-0 z-[-10] w-[260px] h-[329px]"
            />
            <Image
                src="/images/bgImagesNotification/leftBottomTabletLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden tab:block pc:hidden dark:hidden absolute bottom-0 left-0 z-[-10] w-[390px] h-[248px]"
            />
        </>
    );
};
