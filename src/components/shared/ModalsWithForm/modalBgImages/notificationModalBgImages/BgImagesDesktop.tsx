import Image from "next/image";

export const BgImagesDesktop = () => {
    return (
        <div>
            <Image
                src="/images/bgImagesNotification/rightTopDesktop.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:pc:block absolute top-0 right-0 z-[-10] w-[298px] h-[319px]"
            />
            <Image
                src="/images/bgImagesNotification/leftBottomDesktop.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden dark:pc:block absolute bottom-0 left-0 z-[-10] w-[365px] h-[314px]"
            />
            <Image
                src="/images/bgImagesNotification/rightTopDesktopLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden pc:block dark:hidden absolute top-0 right-0 z-[-10] w-[260px] h-[329px]"
            />
            <Image
                src="/images/bgImagesNotification/leftBottomDesktopLight.svg"
                alt="background"
                width="0"
                height="0"
                sizes="100%"
                className="hidden pc:block dark:hidden absolute bottom-0 left-0 z-[-10] w-[390px] h-[248px]"
            />
        </div>
    );
};
