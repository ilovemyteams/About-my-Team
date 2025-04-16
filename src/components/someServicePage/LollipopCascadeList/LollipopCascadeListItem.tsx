import { DescriptionType } from "@/src/mockedData/servicesData";

import { LayoutSubtitle } from "../shared/LayoutSubtitle";
import { LayoutText } from "../shared/LayoutText";
import { LollipopCascadeAnimateItem } from "./LollipopCascadeAnimateItem";
import { LollipopDecorator } from "./LollipopDecorator";

interface LollipopCascadeListItemProps {
    content: DescriptionType;
    index: number;
}
export const LollipopCascadeListItem = ({
    content,
    index,
}: LollipopCascadeListItemProps) => {
    const { title, text: paragraph } = content;
    const text = typeof paragraph === "string" ? paragraph : paragraph.join("");

    return (
        <LollipopCascadeAnimateItem>
            <LollipopDecorator indexNumber={index} />
            <div>
                {title && (
                    <LayoutSubtitle text={title} className="pc:text-2xlb" />
                )}
                <LayoutText text={text} />
            </div>
        </LollipopCascadeAnimateItem>
    );
};
