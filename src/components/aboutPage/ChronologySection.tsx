import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import { chronologyData } from "@/src/mockedData/chronologyData";
import { ChronologyItem } from "./ChronologyItem";

export const ChronologySection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="chronology" className="tab:pt-5">
            <h2 className="font-caviar text-3xl mb-6 tab:text-4xl tab:mb-9 pc:text-6xl">
                {getTranslation("inceptionTitle")}
                <span className="text-purple-100">
                    {getTranslation("inceptionTitleAccent")}
                </span>
            </h2>
            <ul className="tab:flex tab:flex-wrap tab:justify-center">
                {chronologyData &&
                    chronologyData.map((data, index) => (
                        <li
                            key={index}
                            className="h-[360px] border border-b-0 last:border-b tab:border-b tab:border-r-0 tab:even:border-r-1 tab:last:border-r-1 pc:even:border-r-0 tab:border-t-0 tab:first:border-t-1 tab:[&:nth-child(2)]:border-t pc:[&:nth-child(3)]:border-t  px-4 pb-6 pt-3 flex flex-col justify-between  dark:border-purple-stroke border-purple-strokeLight tab:w-[50%] pc:w-[33%]"
                        >
                            <ChronologyItem data={data} />
                        </li>
                    ))}
            </ul>
        </Section>
    );
};
