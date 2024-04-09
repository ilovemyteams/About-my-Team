import { MemberCard } from "./MemberCard";
import { membersData } from "./data/membersData";

export const MemberCardsList = () => {
    return (
        <ul className="block tab:flex-col">
            {membersData.map(data => (
                <li key={data.data.id} className="list-none">
                    <MemberCard data={data} />
                </li>
            ))}
        </ul>
    );
};
