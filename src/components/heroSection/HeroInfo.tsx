import { useTranslations } from "next-intl";
import { WriteUs } from "../shared/WriteUs/WriteUs";
import { JoinUsButton } from "../shared/JoinUsButton";

export const HeroInfo = ({hero}) => {
    const getTranslation = useTranslations();
    return (
        <div className="flex flex-col items-center pt-4 tab:pt-0 pc:block pc:w-[50%] pc:pt-6">
            <h1
                className="text-xl pc:mb-[154px] pc:static
                           tab:absolute tab:left-0 tab:top-0 deskxl:text-2xl text-purple-200 dark:text-grey deskxl:mb-[173px]"
            >
                {hero?.title ? hero.title : getTranslation("Hero.heroInfoText")}
            </h1>
            <div className="flex flex-col gap-4 tab:mt-[86px] pc:gap-6 mt-8 pc:mt-[96px]">
                <WriteUs />
                <JoinUsButton />
            </div>
        </div>
    );
};
