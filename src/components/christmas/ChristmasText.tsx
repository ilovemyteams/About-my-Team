import { PageSection } from "../shared/PageSection";
import { ColoredText } from "./shared/ColoredText";

export const ChristmasText = () => {
    return (
        <PageSection>
            <ColoredText propName={"text"} />

            <ColoredText propName={"greetingText"} />
        </PageSection>
    );
};
