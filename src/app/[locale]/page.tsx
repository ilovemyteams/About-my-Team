import { client } from "@/sanity/lib/client";
import { homeHeroQuery } from "@/sanity/lib/queries";
import {
    loadCTA,
    loadHomeAboutUs,
    loadHomeFaq,
    loadHomeHero,
    loadHomeProjects,
    loadHomeReviews,
    loadServices,
    loadStages,
} from "@/sanity/utils/loadQuery";
import { BackgroundFiguresMain } from "@/src/components/backgroundImages/BackgroundFiguresMain";
// import { FeedbackSection } from "@/src/components/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/heroSection/HeroSection";
import { HireUsSection } from "@/src/components/hireUsSection/HireUsSection";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/JoinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
// import { PortfolioSection } from "@/src/components/portfolioSection/PortfolioSection";
// import { QaSection } from "@/src/components/qAsection/QaSection";
// import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
// import { StagesSection } from "@/src/components/stagesSection/StagesSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";
import { PageParamsProps } from "@/types/sanityDataPropsTypes";

export default async function HomePage(props: PageParamsProps) {
    const [
        heroAnother,
        hero,
        about,
        cta,
        portfolioSection,
        services,
        stages,
        faq,
        reviews,
    ] = await Promise.all([
        await client.fetch(homeHeroQuery, {
            language: props.params.locale,
        }),
        await loadHomeHero(props.params.locale),
        await loadHomeAboutUs(props.params.locale),
        await loadCTA(props.params.locale),
        await loadHomeProjects(props.params.locale),
        await loadServices(props.params.locale),
        await loadStages(props.params.locale),
        await loadHomeFaq(props.params.locale),
        await loadHomeReviews(props.params.locale),
    ]);

    console.log(
        "heroAnother",
        heroAnother,
        hero,
        portfolioSection,
        services,
        stages,
        faq,
        reviews
    );
    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection data={heroAnother} />
            <MissionSection data={about} />
            <JoinTheTeamSection data={cta?.ctaSectionJoinUs} />
            {/* <PortfolioSection data={portfolioSection?.portfolioHome} />
            <FeedbackSection data={reviews} /> */}
            <WriteUsSection data={cta?.ctaSectionWriteUs} />
            {/* <ServicesSection data={services?.servicesHome} /> */}
            <OurTeamSection />
            <JoinTheTeamSection data={cta?.ctaSectionJoinUs} />
            {/* <StagesSection data={stages?.stagesHome} /> */}
            {/* <QaSection data={faq} /> */}
            <HireUsSection data={cta?.ctaSectionOrder} />
        </>
    );
}
