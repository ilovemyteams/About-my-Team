import Image from "next/image";

export const BgImagesMobile = () => {
    return (
        <>
            <Image
                src="/images/bgImagesNotification/rightTopMobile.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:block dark:tab:hidden absolute top-0 right-0 z-[-10] w-[298px] h-[319px]"
            />
            <Image
                src="/images/bgImagesNotification/leftBottomMobile.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:block dark:tab:hidden absolute bottom-0 left-0 z-[-10] w-[320px] h-[331px]"
            />
            <Image
                src="/images/bgImagesNotification/rightTopMobileLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="block tab:hidden dark:hidden absolute top-0 right-0 z-[-10] w-[198px] h-[277px]"
            />
            <Image
                src="/images/bgImagesNotification/leftBottomMobileLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="block tab:hidden dark:hidden absolute bottom-0 left-0 z-[-10] w-[320px] min-h-[232px]"
            />
        </>
    );
};
