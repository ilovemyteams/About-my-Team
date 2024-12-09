import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";
import { LollipopDecorator } from "./LollipopDecorator";

interface LollipopCascadeListItemProps {
    content: DescriptionType;
    index: number;
}
export const LollipopCascadeListItem = ({
    content,
    index,
}: LollipopCascadeListItemProps) => {
    const isFloatingRight = index % 2 === 1;
    const { title, text: paragraph } = content;
    const text = typeof paragraph === "string" ? paragraph : paragraph.join("");

    return (
        <li className="w-auto">
            <div
                className={`flex gap-6 tab:gap-8 desk:gap-12 ${isFloatingRight && "ml-auto"} w-full tab:w-[62.5%] pc:w-[46.8%] desk:w-[41%]`}
            >
                <LollipopDecorator indexNumber={index} />
                <div>
                    {title && <LayoutSubtitle text={title} />}
                    <LayoutText text={text} />
                </div>
            </div>
        </li>
    );
};
