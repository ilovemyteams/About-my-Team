import { useTranslations } from "next-intl";
import { ListItem } from "./ListItem";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const TeamsList = () => {
    const getTranslation = useTranslations("OurTeam");
    const teamList = [getTranslation("team1"), getTranslation("team2")];
    return (
        <>
            <SmallPageTitle>{getTranslation("teamsList")}</SmallPageTitle>
            <ul className="mt-5">
                {teamList.map((team, idx) => (
                    <ListItem key={idx}>{team}</ListItem>
                ))}
            </ul>
        </>
    );
};
