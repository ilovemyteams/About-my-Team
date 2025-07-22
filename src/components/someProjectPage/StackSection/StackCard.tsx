import { Technology } from "@/src/mockedData/portfolioData";
import { defineStackName } from "@/src/utils/defineStackName";

export const StackCard = ({ technology }: { technology: Technology }) => {
    const name = defineStackName(technology);

    return (
        <div className="flex gap-3 items-center pc:gap-4 group w-full ">
            <div>
                <svg
                    className={` ${!name ? "w-full" : "w-7 pc:w-9"} text-purple-100 h-7  pc:h-9 className="[--bg-color:#FBF8FF] dark:[----bg-color:#1F0033]"`}
                >
                    <use href={`/images/stackSprite.svg#${technology}`} />
                </svg>
            </div>
            <p className="text-sm max-w-[70%] tab:text-base pc:text-lg25 desk:text-xl break-words whitespace-normal text-purple-200 dark:text-grey">
                {name}
            </p>
        </div>
    );
};
