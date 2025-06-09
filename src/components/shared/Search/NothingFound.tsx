import { useTranslations } from "next-intl";

import { Section } from "../Section";

export const NothingFound = ({ searchTerm }: { searchTerm: string }) => {
    const getTranslation = useTranslations("Search");

    return (
        <Section className="flex flex-col gap-3 mt-8">
            <p className="font-caviar text-lg tab:text-xlb pc:text-4xl text-purple-200 dark:text-grey w-auto tab:w-1/2">
                {getTranslation("noAnswerFound", {
                    searchTerm,
                })}
            </p>
        </Section>
    );
};
