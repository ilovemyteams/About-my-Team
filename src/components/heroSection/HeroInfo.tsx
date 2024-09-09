import { useTranslations } from "next-intl";

import { HomePageProps } from "@/types/sanityInterfaces";

import { JoinUsButton } from "../shared/JoinUsButton";
import { WriteUs } from "../shared/WriteUs/WriteUs";

export const HeroInfo = ({ data }: HomePageProps) => {
    const getTranslation = useTranslations();
    return (
        <div className="flex flex-col items-center pt-4 tab:pt-0 pc:block pc:w-[50%] pc:pt-6">
            <h1
                className="text-xl pc:mb-[154px] pc:static
                           tab:absolute tab:left-0 tab:top-0 deskxl:text-2xl text-purple-200 dark:text-grey deskxl:mb-[173px]"
            >
                {data?.hero?.title
                    ? data.hero.title
                    : getTranslation("Hero.heroInfoText")}
            </h1>
            <div className="flex flex-col gap-4 tab:mt-[86px] pc:gap-6 mt-8 pc:mt-[96px]">
                {data?.ctaSectionJoinUs && <WriteUs data={data} />}
                <JoinUsButton />
            </div>
        </div>
    );
};
