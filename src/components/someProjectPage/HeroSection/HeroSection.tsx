import { useTranslations } from "next-intl";

import { DeadlineType } from "@/src/mockedData/portfolioData";

import { ImageFromCloud } from "../../shared/ImageFromCloud";
import { PageSection } from "../../shared/PageSection";
import { Deadlines } from "./Deadlines";
import { HeroTitle } from "./HeroTitle";

interface HeroSectionProps {
    title: string;
    text: string[];
    behanceLink?: string;
    heroImage: string;
    deadlines?: DeadlineType;
    name: string;
}

export const HeroSection = ({
    title,
    text,
    behanceLink,
    deadlines,
    heroImage,
    name,
}: HeroSectionProps) => {
    const getTranslations = useTranslations("SomeProjectPage");

    const deadlinesText = getTranslations("deadlines");

    return (
        <PageSection className="pb-[80px]">
            <HeroTitle title={title} />
            <div className="flex flex-col gap-3 mb-8">
                <div className="flex flex-col gap-3">
                    <div>
                        <ImageFromCloud
                            src={heroImage}
                            alt={name}
                            width={668}
                            height={408}
                            className="w-full h-auto aspect-[288/176] object-cover"
                        />
                    </div>
                    {behanceLink && (
                        <div>
                            <a
                                href={behanceLink}
                                target="_blank"
                                className="underline text-redLight dark:text-red font-caviar font-bold text-base"
                            >
                                Behance
                            </a>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-4 text-sm20">
                    {text.map((part, index) => (
                        <p key={index} className="text-balance">
                            {part}
                        </p>
                    ))}
                </div>
            </div>
            {deadlines && (
                <div className="flex flex-col gap-4">
                    <p className="font-caviar text-lg">{deadlinesText}</p>
                    <Deadlines deadlines={deadlines} />
                </div>
            )}
        </PageSection>
    );
};
