import { CtaServicesSection } from "@/src/components/allServicesPage/CtaServicesSection";
import { HeaderServices } from "@/src/components/allServicesPage/HeaderServices";
import { ServicesSection } from "@/src/components/allServicesPage/ServicesSection";
import { generatePageMetadata } from "@/src/utils/generateMetaData";

export async function generateMetadata() {
    return generatePageMetadata({
        namespace: "ServicesPage",
        canonical: "/services",
    });
}

export default function Services() {
    return (
        <>
            <HeaderServices />
            <ServicesSection />
            <CtaServicesSection />
        </>
    );
}
