import { OneTableItemInfo } from "./OneTableItemInfo";

interface Items {
    title: string;
    text: string;
    itemNumber?: number;
}

interface TableItemsProps {
    className?: string;
    items: Items[];
    isIconShown?: boolean;
    textClassName?: string;
    isShowMoreButton?: boolean;
    stagesClassName?: string;
}

export const TableItemsList = ({
    className,
    items,
    isIconShown,
    textClassName,
    isShowMoreButton,
    stagesClassName,
}: TableItemsProps) => {
    return (
        <>
            {items.map((item, index) => (
                <li key={index} className={stagesClassName}>
                    <OneTableItemInfo
                        title={item.title}
                        isIconShown={isIconShown}
                        itemNumber={item?.itemNumber}
                        textClassName={textClassName}
                        isShowMoreButton={isShowMoreButton}
                        className={className}
                    >
                        {item.text}
                    </OneTableItemInfo>
                </li>
            ))}
        </>
    );
};
