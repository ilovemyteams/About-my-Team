import { useTranslations } from "next-intl";
import { ListItem } from "./ListItem";

export const TeamsList = () => {
    const getTranslation = useTranslations("OurTeam");
    const teamList = [getTranslation("team1"), getTranslation("team2")];
    return (
        <>
            <span className="font-geist font-normal text-sm text-purple-50">
                {getTranslation("teamsList")}
            </span>
            <ul className="[&>*:first-child]:mt-[12px] [&>*:last-child]:mb-[12px] ">
                {teamList.map((team, idx) => (
                    <ListItem key={idx}>{team}</ListItem>
                ))}
            </ul>
        </>
    );
};
