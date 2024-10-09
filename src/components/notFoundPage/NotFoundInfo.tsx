import Link from "next/link";
import { useLocale } from "next-intl";

import { useSettingsContext } from "@/src/utils/SettingsSanityContext";

import { Button } from "../shared/Button";

export const NotFoundInfo = () => {
    const locale = useLocale();
    const { data } = useSettingsContext();
    const title = data?.notFoundPage?.titleNotFound
        ? data.notFoundPage.titleNotFound
        : "Write the title";
    const info = data?.notFoundPage?.descriptionNotFound
        ? data.notFoundPage.descriptionNotFound
        : "";
    const buttonName = data?.notFoundPage?.goToHomeButtonName
        ? data.notFoundPage.goToHomeButtonName
        : "";
    const url = data?.notFoundPage?.buttonPageLink
        ? data.notFoundPage.buttonPageLink
        : "";

    return (
        <div className="flex flex-col gap-8 items-center mt-8 tab:max-w-[309px] tab:gap-4 pc:max-w-[376px]">
            <p className="font-caviar font-bold leading-none dark:text-purple-stroke text-purple-strokeLight text-[113px] tab:text-[156px] pc:text-[209px]">
                404
            </p>
            <div className="text-center">
                <p className="font-caviar text-purple-200 dark:text-white-200 text-2xlb mb-4 tab:text-3xl pc:text-4xl">
                    {title}
                </p>
                <p className="pc:text-xl pc:max-w-[356px] pc:text-start">
                    {info}
                </p>
            </div>
            <Link
                href={url.startsWith("http") ? url : `/${locale}/${url}`}
                className="tab:mt-6"
            >
                <Button>{buttonName}</Button>
            </Link>
        </div>
    );
};
