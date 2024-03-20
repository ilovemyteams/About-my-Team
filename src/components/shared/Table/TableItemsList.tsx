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
    sectionClassName?: string;
}

export const TableItemsList = ({
    items,
    isIconShown,
    textClassName,
    isShowMoreButton,
    sectionClassName,
}: TableItemsProps) => {
    return (
        <>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`border-purple-stroke border-b-[1px] first-of-type:border-t-[1px]   
                    tab:[&:nth-child(2)]:border-t-[1px] 
                    pc:border-r-[1px] pc:[&:nth-child(1)]:border-l-[1px] pc:[&:nth-child(5)]:border-l-[1px] pc:[&:nth-child(3)]:border-t-[1px]
                    pc:[&:nth-child(4)]:border-t-[1px]
                    ${sectionClassName}`}
                >
                    <OneTableItemInfo
                        title={item.title}
                        isIconShown={isIconShown}
                        itemNumber={item?.itemNumber}
                        textClassName={textClassName}
                        isShowMoreButton={isShowMoreButton}
                    >
                        {item.text}
                    </OneTableItemInfo>
                </li>
            ))}
        </>
    );
};
