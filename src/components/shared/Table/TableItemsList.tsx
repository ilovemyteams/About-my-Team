import { OneTableItemInfo } from "./OneTableItemInfo";

interface Items {
    title: string;
    text: string;
    itemNumber?: number;
}

interface TableItemsProps {
    className: string;
    items: Items[];
    isIconShown?: boolean;
}

export const TableItemsList = ({
    className,
    items,
    isIconShown,
}: TableItemsProps) => {
    return (
        <>
            {items.map((item, index) => (
                <li key={index} className={className}>
                    <OneTableItemInfo
                        title={item.title}
                        isIconShown={isIconShown}
                        itemNumber={item?.itemNumber}
                    >
                        {item.text}
                    </OneTableItemInfo>
                </li>
            ))}
        </>
    );
};
