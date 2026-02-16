import { getTranslations } from "next-intl/server";

import { Institution } from "@/types/Education";

import { Title } from "../shared/Title";

interface EducationType {
    education: Institution[];
    certificates?: boolean;
}

export const Education = async ({ education, certificates }: EducationType) => {
    const t = await getTranslations("MemberPage");

    return (
        <section>
            {certificates ? (
                <Title>{t("certificates")}</Title>
            ) : (
                <Title>{t("education")}</Title>
            )}
            <ul className="grid grid-cols-1 gap-2 desk:gap-4 p-4 tab:px-0 pc:px-4 [&>li:not(:last-child)]:mb-4">
                {education.map((i, idx) => {
                    return (
                        <li
                            key={idx}
                            className="text-sm pc:text-base desk:text-[18px] font-normal"
                        >
                            <p className="flex justify-between mb-2 text-purple-130 dark:text-purple-50">
                                <span className="pr-5">{i.institution}</span>
                                <span>{i.yearEnd}</span>
                            </p>
                            <p className="flex">
                                <span className="px-2">&bull;</span>
                                <span>{i.degree}</span>
                            </p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
