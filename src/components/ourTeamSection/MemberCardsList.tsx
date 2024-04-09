import { JoinUsCard } from "./JoinUsCard";
import { MemberCard } from "./MemberCard";
import { membersData } from "./data/membersData";

export const MemberCardsList = () => {
    return (
        <ul className="flex flex-wrap tab:hidden">
            <>
                {membersData.map(data => (
                    <li
                        key={data.data.id}
                        className="list-none w-full tab:w-[250px]"
                    >
                        <MemberCard data={data} />
                    </li>
                ))}
            </>
            <li className="w-full max-w-[540] tab:hidden">
                <JoinUsCard />
            </li>
        </ul>
    );
};
