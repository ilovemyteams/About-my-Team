import Link from "next/link";
import { useTranslations } from "next-intl";

import { IconGoBack } from "./Icons/IconGoBack";

export const LinkGoBack = ({
    className,
    linkBack,
}: {
    className?: string;
    linkBack: string;
}) => {
    const getTranslation = useTranslations("Buttons");

    return (
        <Link
            href={linkBack}
            className={`bg-transparent h-12 min-w-12 justify-center items-center focus:outline-none px-0 inline-flex gap-2 font-caviar text-sm font-bold tab:text-lg dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight ${className}`}
        >
            <IconGoBack />
            <p className="border-b border-current h-[17px] tab:h-[22px]">
                {getTranslation("goBack")}
            </p>
        </Link>
    );
};
