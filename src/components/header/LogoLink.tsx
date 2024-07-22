import { usePreviousURL } from "@/src/utils/PreviousURLContext";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface LogoLinkProps {
    setIsHeaderMenuOpened: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
}

export const LogoLink = ({ setIsHeaderMenuOpened }: LogoLinkProps) => {
    const locale = useLocale();
    const { setSlideId } = usePreviousURL();

    return (
        <Link
            href={`/${locale}`}
            onClick={() => {
                setIsHeaderMenuOpened(false);
                setSlideId(0);
            }}
            className="group relative flex items-center justify-center pc:w-[79px] deskxl:w-[100px] pc:h-[71px] deskxl:h-[90px] cursor-pointer"
        >
            <Image
                src="/images/logo.svg"
                width="0"
                height="0"
                alt="Logo icon"
                className="w-[48px] tab:w-[56px] deskxl:w-[68px] h-auto"
            />
            <Image
                src="/images/logoHover.svg"
                width="0"
                height="0"
                alt="Logo icon"
                className="absolute top-0 z-[-10] w-full h-auto scale-0 pc:group-hover:scale-[1.41] group-active:scale-[1.91] 
                pc:group-active:scale-[1.41] deskxl:group-active:scale-[1.41] pc:transition-transform pc:duration-[600ms] pc:ease-in"
            />
        </Link>
    );
};
