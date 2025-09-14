import { useTranslations } from "next-intl";

import { DeadlineType } from "@/src/mockedData/portfolioData";

import { PageSection } from "../../shared/PageSection";
import { Deadlines } from "./Deadlines";
import { HeroMedia } from "./HeroMedia";
import { HeroTitle } from "./HeroTitle";

interface HeroSectionProps {
    title: string;
    text: string[];
    behanceLink?: string;
    heroImage: { url: string; type: "image" | "video" };
    deadlines?: DeadlineType;
    name: string;
    siteLink?: string;
    domains: string[];
}

export const HeroSection = ({
    title,
    text,
    behanceLink,
    deadlines,
    heroImage,
    name,
    siteLink,
    domains,
}: HeroSectionProps) => {
    const getTranslations = useTranslations("SomeProjectPage");

    const deadlinesText = getTranslations("deadlines");
    const behanceLinkTitle = getTranslations("behanceLink");
    const siteLinkTitle = getTranslations("siteLink");

    return (
        <PageSection className="pb-[80px] tab:pb-[100px] desk:pb-[120px]">
            <HeroTitle title={title} />
            <div className="flex flex-col gap-3 mb-8 tab:grid tab:grid-cols-2 tab:gap-10 tab:mb-[60px] pc:gap-0 pc:mb-[72px]">
                <div className="flex flex-col gap-3 pc:gap-4 relative">
                    <HeroMedia name={name} {...heroImage} />

                    {(behanceLink || siteLink) && (
                        <div className="pc:absolute pc:top-[-50px] pc:left-0 flex justify-between tab:justify-start gap-2 text-redLight dark:text-red ">
                            {siteLink && (
                                <a
                                    href={siteLink}
                                    target="_blank"
                                    className="underline font-caviar font-bold text-sm tab:text-lg"
                                >
                                    {siteLinkTitle}
                                </a>
                            )}
                            {behanceLink && (
                                <>
                                    <span className="hidden tab:block">/</span>
                                    <a
                                        href={behanceLink}
                                        target="_blank"
                                        className="underline font-caviar font-bold text-sm tab:text-lg desk:text-lg"
                                    >
                                        {behanceLinkTitle}
                                    </a>
                                </>
                            )}
                        </div>
                    )}
                    <ul className="flex flex-wrap gap-x-4">
                        {domains.map((domain, index) => (
                            <li key={index}>
                                <span className="text-purple-130 dark:text-purple-50 text-sm tab:text-base">
                                    #{domain.toLowerCase()}
                                </span>
                            </li>
                        ))}
                    </ul>
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
