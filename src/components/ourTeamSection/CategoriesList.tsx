import { useTranslations } from "next-intl";
import { ListItem } from "./ListItem";
import { categoryNames } from "./data/categoryNames";

export const CategoriesList = () => {
    const getTranslation = useTranslations("OurTeam");

    return (
        <div className="pt-[12px]">
            <span className="font-geist font-normal text-sm text-purple-50 mb-8 pc:mt-[12px]">
                {getTranslation("listTitle").toUpperCase()}
            </span>
            <ul className="[&>*:first-child]:mt-[12px] [&>*:last-child]:mb-[12px]">
                {categoryNames.map(({ ua }, idx) => (
                    <ListItem key={idx}>
                        {ua.charAt(0).toUpperCase() + ua.slice(1)}
                    </ListItem>
                ))}
            </ul>
        </div>
    );
};
