import { Table } from "../shared/Table/Table";
import { TableItemsList } from "../shared/Table/TableItemsList";
import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";

export const ServicesTable = () => {
    const getTranslation = useTranslations();

    const serviceItems = [
        {
            title: getTranslation("Services.BATitle"),
            text: getTranslation("Services.BAText"),
        },
        {
            title: getTranslation("Services.designTitle"),
            text: getTranslation("Services.designText"),
        },
        {
            title: getTranslation("Services.devTitle"),
            text: getTranslation("Services.devText"),
        },
        {
            title: getTranslation("Services.QATitle"),
            text: getTranslation("Services.QAText"),
        },
        {
            title: getTranslation("Services.supportTitle"),
            text: getTranslation("Services.supportText"),
        },
        {
            title: getTranslation("Services.allServicesTitle"),
            text: getTranslation("Services.allServicesText"),
        },
    ];

    return (
        <Table>
            <TableItemsList
                items={serviceItems}
                className="tab:[&:nth-child(odd)]:border-r-0 pc:border-[1px] pc:[&:nth-child(odd)]:border-r-[1px] "
            />
            <li className="col-span-2 row-span-1 py-[40px] tab:h-[210px] pc:h-[270px] pc:px-4 pc:py-[65px] flex flex-col items-center">
                <p className="mb-6 max-w-[361px]">
                    {getTranslation("Services.contactUs")}
                </p>
                <Button>{getTranslation("Buttons.order")}</Button>
            </li>
        </Table>
    );
};
