import { useTranslations } from "next-intl";

import { ColoredText } from "../../shared/ColoredText";

export const TitleFooter = () => {
    const getTranslation = useTranslations("Footer");

    const firstLine = getTranslation.rich("titleFirstLine", {
        purple: chunk => <ColoredText>{chunk}</ColoredText>,
    });

    const secondLine = getTranslation.rich("titleSecondLine", {
        purple: chunk => <ColoredText>{chunk}</ColoredText>,
    });

    const title = [firstLine, secondLine];
    return (
        <h2 className="font-caviar text-3xl tab:text-4xl pc:text-6xl desk:text-7xl w-[87%] max-w-[330px] tab:w-full tab:max-w-fit">
            {title.map((item, index) => (
                <span
                    className="tab:block [&:not(:last-child)]:mr-[5px] tab:[&:not(:last-child)]:mr-0 tab:[&:nth-of-type(2)]:pl-[133px] pc:[&:nth-of-type(2)]:pl-[165px]"
                    key={index}
                >
                    {item}
                </span>
            ))}
        </h2>
    );
};
