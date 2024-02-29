import { Table } from "../shared/Table/Table";
import { TableItemsList } from "../shared/Table/TableItemsList";
import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";

export const ServicesTable = () => {
    const getTranslation = useTranslations("Services");

    const serviceItems = [
        {
            title: getTranslation("BATitle"),
            text: getTranslation("BAText"),
        },
        {
            title: getTranslation("devTitle"),
            text: getTranslation("devText"),
        },
        {
            title: getTranslation("designTitle"),
            text: getTranslation("designText"),
        },
        {
            title: getTranslation("QATitle"),
            text: getTranslation("QAText"),
        },
        {
            title: getTranslation("consultationTitle"),
            text: getTranslation("consultationText"),
        },
        {
            title: getTranslation("allServicesTitle"),
            text: getTranslation("allServicesText"),
        },
    ];
    return (
        <Table>
            <TableItemsList
                items={serviceItems}
                className={`border-purple-stroke border-b-[1px] tab:odd:border-r-[1px] 
                first-of-type:border-t-[1px] tab:first-of-type:border-t-0
                tab:[&:nth-child(5)]:border-b-0
                tab:[&:nth-child(6)]:border-b-0
                pc:border-r-[1px]
                pc:[&:nth-last-child(4)]:border-r-0
                `}
            />
            <li className="col-span-2 row-span-1 py-[40px] pc:px-4 pc:py-[65px] flex flex-col items-center">
                <p className="mb-6">{getTranslation("contactUs")}</p>
                {/* TODO: Update button text and styles when design is ready */}
                <Button>Button</Button>
            </li>
        </Table>
    );
};
