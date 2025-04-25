import { YouTubeEmbed } from "@next/third-parties/google";

import { SectionWithVideoType } from "@/src/mockedData/portfolioData";

import { HighlightTitleFromMockedData } from "../HighlightTitleFromMockedData";
import { Section } from "../Section";

export const TitleVideoDotslistItem = ({
    data,
}: {
    data: SectionWithVideoType;
}) => {
    const { title, description, video } = data;

    return (
        <Section>
            <HighlightTitleFromMockedData text={title} />
            <div className="flex flex-col gap-3 tab:flex-col-reverse tab:gap-10 pc:gap-[64px]">
                <div className="border dark:border-purple-stroke border-purple-100 p-2 pc:p-3 desk:p-4 w-full mx-auto tab:w-[75%] pc:w-[69%] max-w-[752px] tab:ml-auto tab:mr-0">
                    <YouTubeEmbed
                        videoid={video}
                        params="rel=0"
                        style="margin-left:auto; margin-right:auto;"
                    />
                </div>
                {description && (
                    <ul className="list-disc pl-5 tab:pl-6 pc:pl-7 desk:pl-8 space-y-3 pc:space-y-4">
                        {description.map((text, i) => (
                            <li
                                key={i}
                                className="max-w-full text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 text-greyLight dark:text-grey"
                            >
                                {text}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Section>
    );
};
