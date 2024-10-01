import { Table } from "../shared/Table/Table";
import { TableItemsList } from "../shared/Table/TableItemsList";

export const StagesTable = ({
    stagesListTitle,
    stagesListText,
}: {
    stagesListTitle: Array<string | null> | null;
    stagesListText: Array<string | null> | null;
}) => {
    return (
        <Table>
            <TableItemsList
                textList={stagesListText || []}
                titleList={stagesListTitle || []}
                isIconShown={false}
                isNumberShown={true}
                isShowMoreButton={false}
                textClassName="line-clamp-none max-h-full"
                sectionClassName="[&:nth-child(5)]:hidden pc:[&:nth-child(5)]:block pc:[&:nth-child(5)]:border-b-0"
            />
        </Table>
    );
};
