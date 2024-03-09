import { Section } from "../shared/Section";
import { ServicesTable } from "./ServicesTable";
import { Title } from "./Title";

export const ServicesSection = () => {
    return (
        <Section id="services">
            <Title />
            <ServicesTable />
        </Section>
    );
};
