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
    const behanceLinkTitle = getTranslations("behanceLink");

    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <HeroTitle title={title} />
            <div className="flex flex-col gap-3 mb-8 tab:grid tab:grid-cols-2 tab:gap-10 tab:mb-[60px] pc:gap-0 pc:mb-[72px]">
                <div className="flex flex-col gap-3 tab:gap-5 relative">
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
                        <div className="pc:absolute pc:top-[-50px] pc:left-0">
                            <a
                                href={behanceLink}
                                target="_blank"
                                className="underline text-redLight dark:text-red font-caviar font-bold text-base tab:text-lg desk:text-2xl"
                            >
                                {behanceLinkTitle}
                            </a>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-4 text-sm20 text-pretty tab:text-base pc:ml-[60px] pc:text-xl desk:text-2xl">
                    {text.map((part, index) => (
                        <p key={index}>{part}</p>
                    ))}
                </div>
            </div>
            {deadlines && (
                <div className="flex flex-col gap-4 tab:gap-5 pc:flex-row pc:gap-[52px] pc:pb-[60px] desk:gap-[90px]">
                    <p className="font-caviar text-purple-200 dark:text-grey text-lg tab:text-2xlb pc:text-3xl desk:text-4xl">
                        {deadlinesText}
                    </p>
                    <Deadlines deadlines={deadlines} />
                </div>
            )}
        </PageSection>
    );
};
