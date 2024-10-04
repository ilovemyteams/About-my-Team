"use client";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export const GoToAllQuestionButton = () => {
    const getTranslation = useTranslations("SomeFaqPage");

    const router = useRouter();
    const locale = useLocale();

    return (
        <button
            className="h-12 flex items-end"
            onClick={() => router.push(`/${locale}/faq`)}
        >
            <p
                className="text-lg font-caviar first-letter:uppercase underline underline-offset-[5px] leading-none text-center
            dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
            >
                {getTranslation("allQuestionBack")}
            </p>
        </button>
    );
};
