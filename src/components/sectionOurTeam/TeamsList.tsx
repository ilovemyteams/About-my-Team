import { useTranslations } from "next-intl";
import { ListItem } from "./ListItem";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const TeamsList = () => {
    const getTranslation = useTranslations("OurTeam");
    const teamList = [getTranslation("team1"), getTranslation("team2")];
    return (
        <ul>
            <SmallPageTitle>{getTranslation("teamsList")}</SmallPageTitle>
            {teamList.map((team, idx) => (
                <ListItem key={idx}>{team}</ListItem>
            ))}    
        </ul>
    );
};
