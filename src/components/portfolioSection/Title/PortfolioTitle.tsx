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

    return (
        <div>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mb-[10px] tab:mt-2 tab:mr-4 pc:mt-[14px] flex items-center">
                    {subtitle ? subtitle : getTranslation("pageTitle")}
                </SmallPageTitle>
                {title && (
                    <div className="tab:w-[70%]">
                        <PortableText
                            value={title}
                            components={myPortableTextComponents}
                        />
                    </div>
                )}
            </TitleWrapper>
        </div>
    );
};
