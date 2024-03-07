import Image from "next/image";
import Link from "next/link";

const HOME_URL = "/";

export const LogoLink = () => {
    return (
        <Link
            href={HOME_URL}
            target="_blank"
            rel="noopener noreferrer"
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
