import { ImageFromCloud } from "@/src/components/shared/ImageFromCloud";
import { membersData } from "@/src/mockedData/membersData";

interface TeammatesProps {
    projectId: string[];
}

export const Teammates = ({ projectId }: TeammatesProps) => {
    console.log(projectId);

    const filteredMembers = membersData.filter(m =>
        m.data.projectId.includes("ilovemyteam-online")
    );

    return (
        <>
            <h2>Teammates</h2>
            {filteredMembers.map(({ data }) => {
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
