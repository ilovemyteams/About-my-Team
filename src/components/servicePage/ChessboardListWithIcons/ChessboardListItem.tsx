import { DescriptionType } from "@/src/mockedData/servicesData";
import { defineServiceIcon } from "@/src/utils/defineServiceIcon";

import { IconHexagon } from "../../shared/Icons/IconHexagon";
import { LayoutText } from "../shared/LayoutText";

export const ChessboardListItem = ({
    item,
    isLast,
}: {
    item: DescriptionType;
    isLast: boolean;
}) => {
    const Icon = item.icon && defineServiceIcon(item.icon);
    return (
        <>
            <div className="tab:mt-2 tab:w-[44.5%] pc:w-[41.76%] desk:w-[44.16%] grow tab:grow-0">
                {item.title && (
                    <h4 className="font-caviar font-bold text-purple-200 dark:text-white-200 text-lg tab:text-xl pc:text-2xl desk:text-3xl mb-4 pc:mb-6 desk:mb-5">
                        {item.title}
                    </h4>
                )}
                <LayoutText text={item.text} />
            </div>
            <div className="tab:w-[8.33%] pc:w-[7.4%] desk:w-[7.485%]">
                <div className="relative">
                    <IconHexagon className=" w-[56px] h-[46px] tab:w-[60px] tab:h-[50px] pc:w-[80px] pc:h-[70px] desk:w-[100px] desk:h-[90px] mx-auto dark:text-purple-stroke text-purple-strokeLight" />
                    {item.icon && Icon && (
                        <Icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 pc:w-10 pc:h-10 desk:w-[60px] desk:h-[60px] text-purple-130 dark:text-purple-100" />
                    )}
                </div>
                <div
                    className={`w-[1px] mt-[-1px] desk:mt-[-2px] ${isLast ? "" : "h-lineWithoutHexagonMob tab:h-lineWithoutHexagonTab pc:h-lineWithoutHexagonPC desk:h-lineWithoutHexagonDesk"} dark:bg-purple-stroke bg-purple-strokeLight mx-auto`}
                ></div>
            </div>
        </>
    );
};
