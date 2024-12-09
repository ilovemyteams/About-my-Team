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
import { FeedbackSection } from "@/src/components/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/heroSection/HeroSection";
import { HireUsSection } from "@/src/components/hireUsSection/HireUsSection";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/JoinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { PortfolioSection } from "@/src/components/portfolioSection/PortfolioSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";
import { PageParamsProps } from "@/types/sanityDataPropsTypes";

export default async function HomePage(props: PageParamsProps) {
    const [hero, about, cta, portfolioSection, services, stages, faq, reviews] =
        await Promise.all([
            await loadHomeHero(props.params.locale),
            await loadHomeAboutUs(props.params.locale),
            await loadCTA(props.params.locale),
            await loadHomeProjects(props.params.locale),
            await loadServices(props.params.locale),
            await loadStages(props.params.locale),
            await loadHomeFaq(props.params.locale),
            await loadHomeReviews(props.params.locale),
        ]);

    console.log(portfolioSection, services, stages, faq, reviews);
    return (
        <>
            <BackgroundFiguresMain />
            <HeroSection data={hero.data} />
            <MissionSection data={about.data} />
            <JoinTheTeamSection data={cta?.data?.ctaSectionJoinUs} />
            <PortfolioSection data={portfolioSection?.data} />
            <FeedbackSection data={reviews.data} />
            <WriteUsSection data={cta?.data?.ctaSectionWriteUs} />
            <ServicesSection data={services.data} />
            <OurTeamSection />
            <JoinTheTeamSection data={cta?.data?.ctaSectionJoinUs} />
            {/* <StagesSection data={stages?.stagesHome} /> */}
            {/* <QaSection data={faq} /> */}
            <HireUsSection data={cta?.data?.ctaSectionOrder} />
        </>
    );
}
