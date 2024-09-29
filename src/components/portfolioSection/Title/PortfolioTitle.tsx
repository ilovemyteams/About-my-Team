import { useTranslations } from "next-intl";
import { PortableText } from "next-sanity";

import { myPortableTextComponents } from "@/sanity/utils/portableTexts";
import { PortfolioTitleProps } from "@/types/sanityDataPropsTypes";

import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";

export const PortfolioTitle = ({
    subtitle,
    title,
}: {
    subtitle: string | undefined;
    title: PortfolioTitleProps[] | undefined;
}) => {
    const getTranslation = useTranslations("Portfolio");
    title ? console.log("title[0]", title[0]) : "";

    return (
        <div>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mb-[10px] tab:mt-2 tab:mr-4 pc:mt-[14px] flex items-center">
                    {subtitle ? subtitle : getTranslation("pageTitle")}
                </SmallPageTitle>
                {title && (
                    <div className="tab:w-[70%]">
                        <PortableText
                            value={title[0]}
                            components={myPortableTextComponents}
                        />
                        <div className="tab:-ml-[100px]">
                            <PortableText
                                value={title[1]}
                                components={myPortableTextComponents}
                            />
                        </div>
                    </div>
                )}
            </TitleWrapper>
        </div>
    );
};
