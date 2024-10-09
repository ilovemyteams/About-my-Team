import Link from "next/link";
import { useLocale } from "next-intl";

import { Button } from "../shared/Button";
import { loadSettings } from "@/sanity/utils/loadQuery";

export default async function NotFoundInfo() {
    const locale = useLocale();
    const data = await loadSettings(locale);
    const notFoundPage = data.data?.notFoundPage
        ? data.data.notFoundPage
        : null;

    const title = notFoundPage?.titleNotFound
        ? notFoundPage.titleNotFound
        : "Write the title";
    const info = notFoundPage?.descriptionNotFound
        ? notFoundPage.descriptionNotFound
        : "";
    const buttonName = notFoundPage?.goToHomeButtonName
        ? notFoundPage.goToHomeButtonName
        : "";
    const url = notFoundPage?.buttonPageLink ? notFoundPage.buttonPageLink : "";

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
}
