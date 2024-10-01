import { OneTableItemInfo } from "./OneTableItemInfo";

interface TableItemsProps {
    className?: string;
    titleList: Array<string | null> | null;
    textList: Array<string | null> | null;
    isIconShown?: boolean;
    textClassName?: string;
    isShowMoreButton?: boolean;
    sectionClassName?: string;
}

export const TableItemsList = ({
    titleList,
    textList,
    isIconShown,
    textClassName,
    isShowMoreButton,
    sectionClassName,
}: TableItemsProps) => {
    if (!titleList || !textList) return null;

    return (
        <>
            {titleList.map((item, index) => (
                <li
                    key={index}
                    className={`dark:border-purple-stroke border-purple-strokeLight border-b-[1px] first-of-type:border-t-[1px]   
                    tab:[&:nth-child(2)]:border-t-[1px] 
                    pc:border-r-[1px] pc:[&:nth-child(1)]:border-l-[1px] pc:[&:nth-child(3)]:border-t-[1px]
                    pc:[&:nth-child(4)]:border-t-[1px]
                    ${sectionClassName}`}
                >
                    <OneTableItemInfo
                        title={item || "You forgot the title"}
                        isIconShown={isIconShown}
                        itemNumber={index + 1}
                        textClassName={textClassName}
                        isShowMoreButton={isShowMoreButton}
                    >
                        {textList[index] || "You forgot a text"}
                    </OneTableItemInfo>
                </li>
            ))}
        </>
    );
};
