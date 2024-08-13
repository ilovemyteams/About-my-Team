import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import { chronologyData } from "@/src/mockedData/chronologyData";
import { ChronologyItem } from "./ChronologyItem";

export const ChronologySection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="chronology">
            <h2 className="font-caviar text-3xl mb-6">
                {getTranslation("inceptionTitle")}
                <span className="text-purple-100">
                    {getTranslation("inceptionTitleAccent")}
                </span>
            </h2>
            <ul>
                {chronologyData &&
                    chronologyData.map((data, index) => (
                        <li
                            key={index}
                            className="h-[360px] border border-b-0 px-4 pb-6 pt-3 flex flex-col justify-between last:border-b dark:border-purple-stroke border-purple-strokeLight"
                        >
                            <ChronologyItem data={data} />
                        </li>
                    ))}
            </ul>
        </Section>
    );
};
