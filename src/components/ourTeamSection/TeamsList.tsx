import { useTranslations, useLocale } from "next-intl";
import { ListItem } from "./ListItem";
import { portfolioData } from "../portfolioSection/portfolioData";
import { LocaleType } from "@/types/LocaleType";

export const TeamsList = () => {
    const getTranslation = useTranslations("OurTeam");
    const locale = useLocale();
    type Locale = LocaleType;

    return (
        <>
            <span className="font-geist text-sm text-purple-50">
                {getTranslation("teamsList").toUpperCase()}
            </span>
            <ul className="[&>*:first-child]:mt-[12px] [&>*:last-child]:mb-[12px] after:absolute after:border-b-[1px] after:border-purple-stroke after:left-[32px] tab:after:left-0 after:w-[169px]">
                {portfolioData.map((project, idx) => (
                    <ListItem key={idx}>
                        {project[locale as Locale].name}
                    </ListItem>
                ))}
            </ul>
        </>
    );
};
