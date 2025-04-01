// import { EggContainer } from "../../easter/EggsHunt/EggContainer";
import { Section } from "../../shared/Section";
import { ServicesTable } from "./ServicesTable";
import { Title } from "./Title";

export const ServicesSection = () => {
    return (
        <Section id="services" className="relative">
            {/* <EggContainer count={4} /> */}
            <Title />
            <ServicesTable />
        </Section>
    );
};
