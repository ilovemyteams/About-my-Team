import { useTranslations } from "next-intl";

import { LikesTypes } from "@/src/utils/likeDataHandler";

import { GoToAll } from "../shared/GoToAll";
import LikeButton from "../shared/LikeButton";
import { PageSection } from "../shared/PageSection";
import { SharePopover } from "../shared/SharePopover";

interface HelpfullAnswerSectionProps {
    questionLikes: LikesTypes[];
    questionSlug: string;
}

export const HelpfullAnswerSection = ({
    questionLikes,
    questionSlug,
}: HelpfullAnswerSectionProps) => {
    const getTranslation = useTranslations("SomeFaqPage");

    return (
        <PageSection className="pb-[109px] tab:pb-[100px] desk:pb-[120px]">
            <div className="tab:max-w-[534px] pc:max-w-[910px] mx-auto">
                <p className="font-caviar text-xlb mb-4 pc:mb-6 pc:text-4xl pc:leading-[42px]">
                    {getTranslation.rich("HelpfullAnswerSection", {
                        purple: chunk => (
                            <span className="text-purple-100">{chunk}</span>
                        ),
                        br: () => <br />,
                    })}
                </p>
                <div className="flex justify-between pb-6 tab:pb-0 pc:mb-10 border-b tab:border-b-0 border-purple-strokeLight dark:border-purple-stroke tab:gap-6 tab:justify-start">
                    <LikeButton
                        questionSlug={questionSlug}
                        likes={questionLikes}
                    />

                    <SharePopover className="" trigerShowShareText={false} />
                </div>
            </div>
            <GoToAll href="/faq" title={getTranslation("allQuestionBack")} />
        </PageSection>
    );
};
