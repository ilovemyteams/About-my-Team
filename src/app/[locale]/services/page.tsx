import { CtaServicesSection } from "@/src/components/allServicesPage/CtaServicesSection";
import { HeaderServices } from "@/src/components/allServicesPage/HeaderServices";
import { ServicesSection } from "@/src/components/allServicesPage/ServicesSection";

export default function Services() {
    return (
        <>
            <HeaderServices />
            <ServicesSection />
            <CtaServicesSection />
        </>
    );
}
