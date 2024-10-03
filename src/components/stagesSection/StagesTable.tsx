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
                shift={true}
                sectionClassName=" pc:[&:nth-child(5)]:border-l-1"
            />
        </Table>
    );
};
