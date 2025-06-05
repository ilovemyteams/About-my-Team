import { Section } from "../../shared/Section";
import { ServiceDecoration } from "./ServiceDecoration";
import { ServiceList } from "./ServiceList";
import { Title } from "./Title";

export const ServicesSection = () => {
    return (
        <Section id="services" className="relative">
            <Title />

            <div className="pc:grid pc:grid-cols-[270px_auto] pc:gap-[88px] desk:grid-cols-[367px_auto] desk:gap-[180px]">
                <ServiceDecoration />
                <ServiceList />
            </div>
        </Section>
    );
};
