import { Technology } from "@/src/mockedData/portfolioData";
import { defineStackName } from "@/src/utils/defineStackName";

export const StackCard = ({ technology }: { technology: Technology }) => {
    const name = defineStackName(technology);

    return (
        <div className="flex gap-3 items-center pc:gap-4 group ">
            <div>
                <svg className="w-7 h-7 pc:w-9 pc:h-9">
                    <use href={`/images/stackSprite.svg#${technology}`} />
                </svg>
            </div>
            <p className="text-sm tab:text-base pc:text-lg25 desk:text-xl text-purple-200 dark:text-grey">
                {name}
            </p>
        </div>
    );
};
