import { OneTableItemInfo } from "./OneTableItemInfo";

interface TableItemsProps {
    className?: string;
    titleList: Array<string | null> | null;
    textList: Array<string | null> | null;
    isIconShown?: boolean;
    textClassName?: string;
    isShowMoreButton?: boolean;
    isNumberShown?: boolean;
    shift?: boolean;
    sectionClassName?: string;
}

export const TableItemsList = ({
    titleList,
    textList,
    isIconShown,
    textClassName,
    shift,
    isShowMoreButton,
    sectionClassName,
    isNumberShown,
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
                    pc:[&:nth-child(4)]:border-t-[1px]  ${shift && (index === 4 ? "pc:col-start-2" : "")}
                    ${sectionClassName}`}
                >
                    <OneTableItemInfo
                        title={item || "You forgot the title"}
                        isIconShown={isIconShown}
                        itemNumber={index + 1}
                        isNumberShown={isNumberShown}
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
