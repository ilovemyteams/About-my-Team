import { getTranslations } from "next-intl/server";

import { Language } from "@/types/Language";

import { Title } from "./shared/Title";

interface LanguagesProps {
    languages: Language[];
}

export const Languages = async ({ languages }: LanguagesProps) => {
    const t = await getTranslations("MemberPage");

    return (
        <section>
            <Title>{t("languages")}</Title>
            <ul className="grid grid-cols-1 gap-2 desk:gap-4 p-4 tab:px-0 pc:px-4">
                {languages.map(lang => {
                    return (
                        <li
                            key={lang.name}
                            className="text-sm pc:text-base desk:text-[18px] font-normal"
                        >
                            <span className="after:content-['\2022'] after:px-2">
                                {lang.name}
                            </span>
                            <span>{lang.level}</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
