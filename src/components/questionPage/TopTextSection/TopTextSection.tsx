import { PageSection } from "../../shared/PageSection";
import { AnswerTextIParagraph } from "./AnswerTextIParagraph";
import { ImageComponent } from "./ImageComponent";

interface TopTextSectionProps {
    shortAnswer: string[];
    fullAnswerText?: string[];
    imageUrl?: string;
}

export const TopTextSection = ({
    shortAnswer,
    fullAnswerText,
    imageUrl,
}: TopTextSectionProps) => {
    return (
        <PageSection className="pb-[80px] tab:pb-[100px] pc:pb-[100px]">
            <div className="flex flex-col tab:flex-row gap-5 pc:gap-6 pc:px-[98px] pt-6 tab:pt-6 pc:pt-[34px] text-sm tab:text-base border-t-[1px] border-purple-strokeLight dark:border-purple-stroke">
                <div className="basis-1/2 flex flex-col gap-4 pc:gap-6">
                    <div>
                        {shortAnswer.map((text, i) => (
                            <AnswerTextIParagraph
                                key={i}
                                indx={i}
                                text={text}
                            />
                        ))}
                    </div>

                    {fullAnswerText && <ImageComponent imgUrl={imageUrl} />}
                </div>
                <div className="basis-1/2 self-center">
                    {fullAnswerText && (
                        <>
                            {fullAnswerText.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </PageSection>
    );
};
