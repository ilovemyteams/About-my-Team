import { PolicyContent } from "@/src/mockedData/privacyPolicy";

import { HighlightedText } from "./HighlightedText";
import { PolicyText } from "./PolicyText";

interface PolicyItemProps extends PolicyContent {
    index: number;
}

export const PolicyItem = ({ title, content, index }: PolicyItemProps) => {
    const orderNumber = index + 1;
    return (
        <li className=" last:pb-0 pb-4 border-b-[1px] last:border-b-0 border-purple-stroke tab:flex tab:flex-row tab:gap-10 tab:pb-6 pc:gap-[60px] pc:pb-10 desk:pb-[64px]">
            <div>
                <p className="font-caviar text-[48px] tab:text-[70px] pc:text-[115px] desk:text-[130px] leading-none font-bold text-purple-strokeLight dark:text-purple-dark float-left pr-2 tab:float-none tab:sticky tab:top-[15%] tab:pr-0 ">
                    {orderNumber < 10 ? `0${orderNumber}` : orderNumber}
                </p>
            </div>

            <div>
                <h2 className="font-caviar font-bold text-2xl24 tab:text-3xl28 dark:text-white-200 pc:text-4xl desk:text-6xlt min-h-[48px] mb-5 tab:min-h-[auto] tab:mb-6 pc:mb-10 desk:mb-[64px]">
                    <HighlightedText text={title} />
                </h2>

                <ul className="">
                    {content.map((item, i) => (
                        <PolicyText {...item} key={i} />
                    ))}
                </ul>
            </div>
        </li>
    );
};
