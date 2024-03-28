import { useLocale, useTranslations } from "next-intl";
import { ListItem } from "./ListItem";
import { categoryNames } from "./data/categoryNames";
import { LocaleType } from "@/types/LocaleType";

export const CategoriesList = () => {
    const getTranslation = useTranslations("OurTeam");
    const locale = useLocale();

    return (
        <div className="pt-[12px]">
            <span className="font-geist font-normal text-sm text-purple-50 mb-8 pc:mt-[12px]">
                {getTranslation("listTitle").toUpperCase()}
            </span>
            <ul className="[&>*:first-child]:mt-[12px] [&>*:last-child]:mb-[12px]">
                {categoryNames.map((categoryName, idx) => (
                    <ListItem key={idx}>
                        {categoryName[locale as LocaleType]}
                    </ListItem>
                ))}
            </ul>
        </div>
    );
};
