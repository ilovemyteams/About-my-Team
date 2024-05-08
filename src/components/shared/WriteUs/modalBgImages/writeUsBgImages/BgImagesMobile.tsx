import Image from "next/image";

export const BgImagesMobile = () => {
    return (
        <div>
            <Image
                src="/images/bgImagesModalWriteUs/rightTopMobile.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:block dark:tab:hidden absolute top-0 right-0 z-[-10] w-[320px] h-[319px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/leftBottomMobile.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:block dark:tab:hidden absolute bottom-0 left-0 z-[-10] w-[209px] h-[192px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/rightBottomMobile.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:block dark:tab:hidden absolute bottom-0 right-0 z-[-10] w-[163px] h-[394px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/rightTopMobileLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="block tab:hidden dark:hidden absolute top-0 right-0 z-[-10] w-[320px] h-[370px]"
            />
            <Image
                src="/images/bgImagesModalWriteUs/leftBottomMobileLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="block tab:hidden dark:hidden absolute bottom-0 left-0 z-[-10] w-[287px] h-[281px]"
            />
        </div>
    );
};
