import { Section } from "../shared/Section";
import { Title } from "./Title";
import { CategoriesList } from "./CategoriesList";
import { TeamsList } from "./TeamsList";

export const SectionOurTeam = () => {
    return (
        <Section>
            <Title />
            <CategoriesList />
            <TeamsList />
        </Section>
    );
};
