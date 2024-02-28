import { useTranslations } from "next-intl";
import { ListItem } from "./ListItem";
import { SmallPageTitle } from "../shared/SmallPageTitle";

export const TeamsList = () => {
    const getTranslation = useTranslations("OurTeam");
    const teamList = [getTranslation("team1"), getTranslation("team2")];
    return (
        <>
            <ul>
                <div className="mb-5">
                    <SmallPageTitle>
                        {getTranslation("teamsList")}
                    </SmallPageTitle>
                </div>
                {teamList.map((team, idx) => (
                    <ListItem key={idx}>{team}</ListItem>
                ))}
            </ul>
        </>
    );
};
