import { useLocale, useTranslations } from "next-intl";
import { Section } from "../shared/Section";
import { LinkGoBack } from "../shared/LinkGoBack";
import { localeInURL } from "@/src/utils/localeInURL";
import { PageContentList } from "./PageContentList";

export const HeroAbout = () => {
    const getTranslation = useTranslations("AboutPage");
    const locale = useLocale();
    return (
        <Section className="pt-8 tab:pt-[100px] pc:pt-8">
            <div className="flex justify-end">
                <LinkGoBack linkBack={`/${localeInURL(locale)}#mission`} />
            </div>
            <h1>
                {getTranslation("title")}{" "}
                <span className="text-purple-100">
                    {getTranslation("titleAccent")}
                </span>
            </h1>
            <PageContentList />
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
