import type { DescriptionType } from "@/src/mockedData/servicesData";

import { IconCheckmarkWithinSquare } from "../../shared/Icons/IconCheckmarkWithinSquare";

interface GridWithCheckmarkIconsItemProps {
    content: DescriptionType;
    className?: string;
}

export const GridWithCheckmarkIconsItem = ({
    content,
    className,
}: GridWithCheckmarkIconsItemProps) => {
    const { title, text } = content;

    return (
        <li className={className}>
            <IconCheckmarkWithinSquare className="mb-2 text-redLight dark:text-red" />
            <hr className="mb-8 border-purple-strokeLight dark:border-purple-stroke" />
            <h3 className="mb-6 font-caviar text-lg tab:text-xlb pc:text-2xlb desk:text-3xl text-purple-200 dark:text-white-200">
                {title}
            </h3>
            <p className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34 text-greyLight dark:text-grey">
                {text as string}
            </p>
        </li>
    );
};
