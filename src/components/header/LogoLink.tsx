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
            className="cursor-pointer w-[48px] h-[42px] tab:w-[56px] tab:h-[49px]"
        >
            <Image
                src="/images/logo.svg"
                width="0"
                height="0"
                alt="Logo icon"
                className="w-[48px] tab:w-[56px] h-auto"
            />
        </Link>
    );
};
