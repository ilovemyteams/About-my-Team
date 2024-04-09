import { JoinUsCard } from "./JoinUsCard";
import { MemberCard } from "./MemberCard";
import { membersData } from "./data/membersData";

export const MemberCardsList = () => {
    return (
        <ul className="flex flex-wrap">
            <>
                {membersData.map(data => (
                    <li key={data.data.id} className="list-none w-full">
                        <MemberCard data={data} />
                    </li>
                ))}
                <li className="w-full">
                    <JoinUsCard />
                </li>
            </>
        </ul>
    );
};
