import { useTranslations } from "next-intl";
import { ListItem } from "./ListItem";
import { SmallPageTitle } from "../shared/SmallPageTitle";

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
        <ul>
            <SmallPageTitle>{getTranslation("listTitle")}</SmallPageTitle>
            {categoriesList.map((category, idx) => (
                <ListItem key={idx}>{category}</ListItem>
            ))}
        </ul>
    );
};
