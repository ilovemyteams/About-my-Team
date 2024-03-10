import { Section } from "../shared/Section";
import { Title } from "./Title";
import { CategoriesList } from "./CategoriesList";
import { TeamsList } from "./TeamsList";

export const OurTeamSection = () => {
    return (
        <Section id="team">
            <Title />
            <CategoriesList />
            <TeamsList />
        </Section>
    );
};
