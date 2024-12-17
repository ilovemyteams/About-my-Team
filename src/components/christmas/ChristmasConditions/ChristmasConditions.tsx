import { useLocale } from "next-intl";

import { christmasData } from "@/src/mockedData/christmasData";
import { LocaleType } from "@/types/LocaleType";

import { IconBaubles } from "../../shared/Icons/IconBaubles";
import { IconFireworkBig } from "../../shared/Icons/IconFireworkBig";
import { PageSection } from "../../shared/PageSection";
import { ChristmasConditionItem } from "./ChristmasConditionItem";

export const ChristmasConditions = () => {
    const locale = useLocale();

    const {
        conditions: { title, description },
    } = christmasData[locale as LocaleType];

    const titleToArray = title.split(" ");

    return (
        <div className="relative overflow-hidden">
            <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
                <div>
                    <h2
                        className={`relative flex gap-x-[6px] pc:gap-x-[10px] flex-wrap font-caviar text-purple-200 dark:text-white-200 
                            text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl mb-[50px] tab:mb-[64px] pc:mb-[80px]`}
                    >
                        {titleToArray.map(item => (
                            <span key={item} className="group relative">
                                {item}
                                <span className="group-last:visible invisible max-h-[60px] tab:max-h-[85px] absolute top-[100%] right-0 z-[-1] w-[30px] tab:w-[52px] pc:w-[58px] desk:w-[67px] translate-x-[30%] translate-y-[-15%] tab:translate-x-[35%] pc:translate-x-[30%] tab:translate-y-[-10%] pc:translate-y-[-15%] overflow-hidden pc:overflow-visible">
                                    <IconBaubles className="w-full h-auto translate-y-[-12px] tab:translate-y-[-45px] pc:translate-y-0 text-purple-100 dark:text-purple-50" />
                                </span>
                            </span>
                        ))}
                    </h2>
                </div>

                <ul className="pc:pb-[60px] ">
                    {description.map((desc, index) => (
                        <ChristmasConditionItem key={index} content={desc} />
                    ))}
                </ul>
            </PageSection>
            <div className="relative">
                <div className="absolute right-[2%] tab:right-[60%] bottom-0 tab:bottom-[80px] translate-y-[20%] w-[195px] tab:w-[298px] pc:w-[350px] desk:w-[450px]">
                    <IconFireworkBig className="w-full h-auto rotate-[280deg] tab:rotate-[300deg]" />
                </div>
            </div>
        </div>
    );
};
