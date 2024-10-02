import { useTranslations } from "next-intl";

import LikeButton from "../shared/LikeButton";
import { Section } from "../shared/Section";
import { SharePopover } from "../shared/SharePopover";
import { GoToAllQuestionButton } from "./GoToAllQuestionButton";

export const HelpfullAnswerSection = () => {
    const getTranslation = useTranslations("SomeFaqPage");

    return (
        <Section className="mb-0 pb-[29px] tab:pb-5">
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
                    <LikeButton likes={1} />
                    <SharePopover className="" trigerShowShareText={false} />
                </div>
            </div>
            <div className="flex justify-center tab:justify-between">
                <div className="hidden tab:block flex-grow mr-[60px] border-b border-purple-strokeLight dark:border-purple-stroke"></div>
                <GoToAllQuestionButton />
            </div>
        </Section>
    );
};
