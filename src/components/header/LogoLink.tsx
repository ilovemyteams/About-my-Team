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

    return (
        <Link
            href={`/${locale}`}
            onClick={() => setIsHeaderMenuOpened(false)}
            className="group relative flex items-center justify-center pc:w-[79px] pc:h-[71px] cursor-pointer"
        >
            <Image
                src="/images/logo.svg"
                width="0"
                height="0"
                alt="Logo icon"
                className="w-[48px] tab:w-[56px] h-auto"
            />
            <Image
                src="/images/logoHover.svg"
                width="0"
                height="0"
                alt="Logo icon"
                className="absolute top-0 z-[-10] w-full h-auto scale-0 pc:group-hover:scale-[1.41] transition-transform delay-[600ms] ease-in-out"
            />
        </Link>
    );
};
