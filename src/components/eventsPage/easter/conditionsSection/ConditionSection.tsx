import { useLocale } from "next-intl";

import { IconDecorEgg } from "@/src/components/easter/icons/IconDecorEgg";
import { IconEggRope } from "@/src/components/easter/icons/IconEggRope";
import { PageSection } from "@/src/components/shared/PageSection";
import { LocaleType } from "@/types/LocaleType";

import { IconWillows } from "../icons/IconWillows";
import { conditionsData } from "../mockData/conditionData";
import { ConditionItem } from "./ConditionItem";

export const ConditionSection = () => {
    const locale = useLocale();

    const {
        conditions: { title, description },
    } = conditionsData[locale as LocaleType];

    const titleToArray = title.split(" ");

    return (
        <div className="relative overflow-clip">
            <PageSection
                id="condition"
                className="pb-[80px] tab:pb-[100px] desk:pb-[120px] "
            >
                <div>
                    <h2
                        className={`relative flex gap-x-[6px] pc:gap-x-[10px] flex-wrap font-caviar text-purple-200 dark:text-white-200 
                            text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl mb-[50px] tab:mb-[64px] pc:mb-[80px]`}
                    >
                        {titleToArray.map(item => (
                            <span key={item} className="group relative">
                                {item}
                                <span className="group-last:visible invisible absolute top-[60%] right-0 z-[-1] w-auto aspect-[29/73] h-[73px] tab:h-[131px] pc:h-[148px] flex flex-col justify-center translate-x-[30%] tab:top-[85%] pc:top-[70%] overflow-hidden">
                                    <IconEggRope className="w-auto h-[60%] pc:h-[64%] grow-0 shrink-0 translate-y-[-10px] tab:translate-y-0" />
                                    <IconDecorEgg className="w-auto h-[40%] pc:h-[36%]  tab:mt-[-2px] grow-0 shrink-0 translate-y-[-10px] tab:translate-y-0" />
                                </span>
                            </span>
                        ))}
                    </h2>
                </div>

                <ul className="pc:pb-[60px] ">
                    {description.map((desc, index) => (
                        <ConditionItem key={index} content={desc} />
                    ))}
                </ul>
                <div className="relative">
                    <div className="hidden tab:block absolute tab:left-0 tab:bottom-0 ml-[28px] pc:bottom-[60px] w-[295px] pc:w-[345px] ">
                        <IconWillows className="w-full h-auto  desk:translate-x-[35%]" />
                    </div>
                </div>
            </PageSection>
        </div>
    );
};
