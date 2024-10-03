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
            <p className="text-lg first-letter:uppercase underline underline-offset-2 leading-none text-center">
                {getTranslation("allQuestionBack")}
            </p>
        </button>
    );
};
