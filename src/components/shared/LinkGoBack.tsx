import { useTranslations } from "next-intl";
import { IconGoBack } from "./Icons/IconGoBack";
import Link from "next/link";

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
            className={`bg-transparent h-12 min-w-12 justify-center items-center focus:outline-none px-0 inline-flex gap-2 font-caviar tab:text-lg dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight ${className}`}
        >
            <IconGoBack />
            <p className="hidden tab:block border-b border-current">
                {getTranslation("goBack")}
            </p>
        </Link>
    );
};
