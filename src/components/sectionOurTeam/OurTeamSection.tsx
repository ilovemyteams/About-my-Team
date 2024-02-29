import { Section } from "../shared/Section";
import { Title } from "./Title";
import { CategoriesList } from "./CategoriesList";
import { TeamsList } from "./TeamsList";

export const OurTeamSection = () => {
    return (
        <Section>
            <Title />
            <CategoriesList />
            <TeamsList />
        </Section>
    );
};
