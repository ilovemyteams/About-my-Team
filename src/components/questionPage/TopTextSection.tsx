import Image from "next/image";

import { Section } from "../shared/Section";

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
        <Section className="mb-[80px] tab:mb-[100px] pb-[0px] tab:pb-[0px] pc:pb-[0px] deskxl:pb-[0px]">
            <div className="flex flex-col tab:flex-row gap-5 pc:gap-6 pc:px-[98px] pt-6 tab:pt-6 pc:pt-[34px] text-sm tab:text-base border-t-[1px] border-purple-strokeLight dark:border-purple-stroke">
                <div className="basis-1/2 flex flex-col gap-4 pc:gap-6">
                    <div>
                        {shortAnswer.map((text, i) => (
                            <p key={i} className="custom-letter">
                                {text}
                            </p>
                        ))}
                    </div>

                    {fullAnswerText && (
                        <>
                            {imageUrl ? (
                                <Image
                                    src={imageUrl}
                                    alt=""
                                    width={508}
                                    height={296}
                                />
                            ) : (
                                <div className="w-full aspect-[1.7] bg-greyLight"></div>
                            )}
                        </>
                    )}
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
        </Section>
    );
};
