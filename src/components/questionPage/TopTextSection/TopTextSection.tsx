import Image from "next/image";

import { PageSection } from "../../shared/PageSection";
import { HighlightText } from "../../shared/Search/HighlightText";
import { AnswerTextIParagraph } from "./AnswerTextIParagraph";

interface TopTextSectionProps {
    shortAnswer: string[];
    fullAnswerText?: string[];
    searchTerm: string;
}

export const TopTextSection = ({
    shortAnswer,
    fullAnswerText,
    searchTerm,
}: TopTextSectionProps) => {
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <div className="pb-4 border-y pt-6 tab:pt-8 pc:pt-10 desk:pt-[60px] border-purple-strokeLight dark:border-purple-stroke">
                <div className="desk:h-[365px] flex flex-col tab:flex-row gap-5 pc:gap-10 desk:gap-[60px] mb-5 tab:mb-10 pc:mb-[60px] text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34">
                    <div className="basis-1/2 flex flex-col gap-4 pc:gap-6">
                        <div>
                            {shortAnswer.map((text, i) => (
                                <AnswerTextIParagraph
                                    key={i}
                                    indx={i}
                                    text={text}
                                    searchTerm={searchTerm}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="basis-[47%] pc:basis-1/2">
                        {fullAnswerText && (
                            <>
                                {fullAnswerText.map((text, i) => (
                                    <p key={i}>
                                        <HighlightText
                                            text={text}
                                            toBeHighlighted={searchTerm}
                                        />
                                    </p>
                                ))}
                            </>
                        )}
                    </div>
                </div>
                <Image
                    src="/images/pumpkin.png"
                    alt="pumpkin"
                    width={60}
                    height={60}
                    className="ml-auto mr-0 tab:w-[96px] tab:h-auto opacity-[0.5]"
                />
            </div>
        </PageSection>
    );
};
