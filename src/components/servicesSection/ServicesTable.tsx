import { Table } from "../shared/Table/Table";
import { TableItemsList } from "../shared/Table/TableItemsList";
import { WriteUs } from "../shared/WriteUs/WriteUs";

export const ServicesTable = ({
    description,
    servicesListText,
    servicesListTitle,
}: {
    description: string | null;
    servicesListTitle: Array<string | null> | null;
    servicesListText: Array<string | null> | null;
}) => {
    return (
        <Table>
            <TableItemsList
                textList={servicesListText || []}
                titleList={servicesListTitle || []}
                sectionClassName="pc:[&:nth-child(5)]:border-l-[1px]"
            />
            <li className="col-span-2 row-span-1 py-[40px] tab:h-[210px] pc:h-[270px] pc:px-4 pc:py-[65px] flex flex-col items-center">
                <p className="mb-6 max-w-[361px] deskxl:text-lg">
                    {description || "You forgot a description"}
                </p>
                <WriteUs />
            </li>
        </Table>
    );
};
