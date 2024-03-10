import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const HOME_URL = "/";

export const LogoLink = () => {
    const locale = useLocale();

    return (
        <Link
            href={`${HOME_URL}${locale}`}
            className="cursor-pointer w-[68px] h-[62px]"
        >
            <Image
                src="/images/logo.svg"
                width="0"
                height="0"
                alt="Logo icon"
                className="w-[68px] h-auto"
            />
        </Link>
    );
};
