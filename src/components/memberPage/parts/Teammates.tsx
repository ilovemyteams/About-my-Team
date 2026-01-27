import { ImageFromCloud } from "@/src/components/shared/ImageFromCloud";
import { membersData } from "@/src/mockedData/membersData";
import { getTeammates } from "@/src/utils/getTeammates";
import { Project } from "@/types/Projects";

import { TitleBig } from "./shared/TitleBig";

interface TeammatesProps {
    projects: Project[];
}

export const Teammates = ({ projects }: TeammatesProps) => {
    const teammates = getTeammates(membersData, projects);

    return (
        <>
            <TitleBig>Teammates</TitleBig>
            {teammates.map(({ data }) => {
                return (
                    <ImageFromCloud
                        key={data.id}
                        storage="members"
                        src={data.imageURL || ""}
                        width={256}
                        height={256}
                        alt={data.id}
                        loading="lazy"
                        title={data.id}
                        className={`
                    object-cover
                    w-[100px] h-[100px]
                `}
                    />
                );
            })}
        </>
    );
};
