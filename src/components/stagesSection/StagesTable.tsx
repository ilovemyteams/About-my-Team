import { Table } from "../shared/Table/Table";
import { TableItemsList } from "../shared/Table/TableItemsList";
import { useTranslations } from "next-intl";

export const StagesTable = () => {
    const getTranslation = useTranslations("Stages");
    const stagesItems = [
        {
            title: getTranslation("firstStepTitle"),
            text: getTranslation("firstStepText"),
            itemNumber: 1,
        },
        {
            title: getTranslation("secondStepTitle"),
            text: getTranslation("secondStepText"),
            itemNumber: 2,
        },
        {
            title: getTranslation("thirdStepTitle"),
            text: getTranslation("thirdStepText"),
            itemNumber: 3,
        },
        {
            title: getTranslation("fourthStepTitle"),
            text: getTranslation("fourthStepText"),
            itemNumber: 4,
        },
        {
            title: "",
            text: "",
        },
        {
            title: getTranslation("fifthStepTitle"),
            text: getTranslation("fifthStepText"),
            itemNumber: 5,
        },

        {
            title: getTranslation("sixthStepTitle"),
            text: getTranslation("sixthStepText"),
            itemNumber: 6,
        },
        {
            title: getTranslation("seventhStepTitle"),
            text: getTranslation("seventhStepText"),
            itemNumber: 7,
        },
    ];

    return (
        <Table>
            <TableItemsList
                items={stagesItems}
                className={`border-purple-stroke border-b-[1px] 
                first-of-type:border-t-[1px] 
                [&:nth-child(5)]:hidden pc:[&:nth-child(5)]:block
                tab:border
                `}
            />
        </Table>
    );
};
