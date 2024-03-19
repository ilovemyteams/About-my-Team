import { useTranslations } from "next-intl";
import { ListItem } from "./ListItem";

export const CategoriesList = () => {
    const getTranslation = useTranslations("OurTeam");
    const categoriesList = [
        getTranslation("listItemDes"),
        getTranslation("listItemDev"),
        getTranslation("listItemQA"),
        getTranslation("listItemBA"),
        getTranslation("listItemPM"),
    ];

    return (
        <div className="tab:pt-[12px]">
            <span className="font-geist font-normal text-sm text-purple-50 mb-8 pc:mt-[12px]">
                {getTranslation("listTitle").toUpperCase()}
            </span>
            <ul className="[&>*:first-child]:mt-[12px] [&>*:last-child]:mb-[12px]">
                {categoriesList.map((category, idx) => (
                    <ListItem key={idx}>{category}</ListItem>
                ))}
            </ul>
        </div>
    );
};
