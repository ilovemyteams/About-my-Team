import { useTranslations } from "next-intl";

import { IconCheckmarkWithinSquare } from "../../shared/Icons/IconCheckmarkWithinSquare";

export const HeroClientList = () => {
    const getTranslation = useTranslations("Hero");

    const clientList = [
        `${getTranslation("item1")}`,
        `${getTranslation("item2")}`,
        `${getTranslation("item3")}`,
        `${getTranslation("item4")}`,
    ];

    return (
        <div className="px-2">
            <h3 className="font-caviar font-bold text-xl desk:text-2xl dark:text-white-200 text-purple-200 mb-3 desk:mb-2">
                {getTranslation("titleList")}
            </h3>
            <ul className="flex flex-col gap-2">
                {clientList.map((item, index) => (
                    <li
                        key={index}
                        className="text-greyLight dark:text-grey text-base pc:text-lg desk:text-xl py-[5px] pc:py-[3.5px] desk:py-[2.5px] flex gap-[10px] items-center"
                    >
                        <div className="w-[18px] h-[18px] ">
                            <IconCheckmarkWithinSquare className="text-redLight dark:text-red" />
                        </div>

                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
