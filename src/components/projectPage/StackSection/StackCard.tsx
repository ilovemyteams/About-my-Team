import { Technology } from "@/src/mockedData/portfolioData";
import { defineStackName } from "@/src/utils/defineStackName";

export const StackCard = ({ technology }: { technology: Technology }) => {
    const name = defineStackName(technology);

    return (
        <div className="flex gap-3 items-center pc:gap-5 w-[270px] mb-4 tab:mb-0 group px-3 py-4 bg-purple-stackCardBG">
            <div>
                <svg className="w-7 h-7 pc:w-9 pc:h-9">
                    <use href={`/images/stackSpite.svg#${technology}`} />
                </svg>
            </div>
            <p className="text-sm pc:text-lg text-purple-200 dark:text-grey">
                {name}
            </p>
        </div>
    );
};
