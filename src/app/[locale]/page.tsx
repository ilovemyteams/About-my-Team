// import HomeTest from "@/src/components/Home";
import { loadHomePage } from "@/sanity/utils/loadQuery";
import { BackgroundFigures } from "@/src/components/backgroundImages/BackgroundFigures";
import { FeedbackSection } from "@/src/components/feedbackSection/FeedbackSection";
import { HeroSection } from "@/src/components/heroSection/HeroSection";
import { HireUsSection } from "@/src/components/hireUsSection/HireUsSection";
import { JoinTheTeamSection } from "@/src/components/joinTheTeamSection/JoinTheTeamSection";
import { MissionSection } from "@/src/components/missionSection/MissionSection";
import { OurTeamSection } from "@/src/components/ourTeamSection/OurTeamSection";
import { PortfolioSection } from "@/src/components/portfolioSection/PortfolioSection";
import { QaSection } from "@/src/components/qAsection/QaSection";
import { ServicesSection } from "@/src/components/servicesSection/ServicesSection";
import { StagesSection } from "@/src/components/stagesSection/StagesSection";
import { WriteUsSection } from "@/src/components/writeUsSection/WriteUsSection";

export default async function HomePage() {
    const initial = await loadHomePage();

    return (
        <div className="pt-[80px] pc:pt-[0px] pc:ml-[80px] deskxl:ml-[120px]">
            <BackgroundFigures />
            <HeroSection data={initial.data} />
            <MissionSection />
            <JoinTheTeamSection />
            <PortfolioSection />
            <FeedbackSection />
            <WriteUsSection />
            <ServicesSection />
            <OurTeamSection />
            <JoinTheTeamSection />
            <StagesSection />
            <QaSection />
            <HireUsSection />
            {/* <HomeTest /> */}
        </div>
    );
}
