import { useLocale } from "next-intl";

import { questionsData } from "@/src/mockedData/questionsData";
import { LocaleType } from "@/types/LocaleType";

import { Accordion } from "./Accordion";

export const QuestionsList = () => {
    const locale = useLocale();
    const questionsList = questionsData.slice(0, 5);

    return (
        <div className="mb-[40px] pc:ml-[270px] tab:mb-[48px]">
            <ul>
                {questionsList.map((item, idx) => {
                    return (
                        <Accordion
                            key={idx}
                            item={item[locale as LocaleType]}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
