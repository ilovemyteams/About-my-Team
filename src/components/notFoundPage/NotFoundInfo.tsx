import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "../shared/Button";

export const NotFoundInfo = () => {
    const getTranslation = useTranslations("NotFound");
    const locale = useLocale();

    return (
        <div className="flex flex-col gap-8 items-center mt-8 tab:max-w-[309px] tab:gap-4 pc:max-w-[376px]">
            <p className="font-caviar font-bold leading-none dark:text-purple-stroke text-purple-strokeLight text-[113px] tab:text-[156px] pc:text-[209px]">
                404
            </p>
            <div className="text-center">
                <p className="font-caviar text-purple-200 dark:text-white-200 text-2xlb mb-4 tab:text-3xl pc:text-4xl">
                    {getTranslation("title")}
                </p>
                <p className="pc:text-xl pc:max-w-[356px] pc:text-start">
                    {getTranslation("info")}
                </p>
            </div>
            <Link href={`/${locale}`} className="tab:mt-6">
                <Button>{getTranslation("button")}</Button>
            </Link>
        </div>
    );
};
