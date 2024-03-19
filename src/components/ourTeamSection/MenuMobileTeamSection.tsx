import { useTranslations } from "next-intl";

export const MenuMobileTeamSection = () => {
    const getTranslation = useTranslations("OurTeam");
    return (
        <div className="flex flex-col tab:hidden pc:hidden">
            <ul>
                <li>{getTranslation("listTitle")}</li>
            </ul>
        </div>
    );
};
