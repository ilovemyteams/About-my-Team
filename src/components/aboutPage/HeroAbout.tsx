import { useTranslations } from "next-intl";
import { Section } from "../shared/Section";

export const HeroAbout = () => {
    const getTranslation = useTranslations("AboutPage");
    return (
        <Section className="pt-8 tab:pt-[100px] pc:pt-8">
            <h1>
                {getTranslation("title")}{" "}
                <span className="text-purple-100">
                    {getTranslation("titleAccent")}
                </span>
            </h1>
            <div>
                <p>
                    <span className="text-purple-100">
                        {getTranslation("missionAccent")}
                    </span>
                    {getTranslation("missionDescription")}
                </p>
                <p>
                    <span className="text-purple-100">
                        {getTranslation("goalAccent")}
                    </span>
                    {getTranslation("goalDescription")}
                </p>
            </div>
        </Section>
    );
};
