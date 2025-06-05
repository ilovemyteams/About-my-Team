import { PortableText } from "next-sanity";

import { myPortableTextComponents } from "@/sanity/utils/portableTexts";
import { PortableColorTitle } from "@/types/sanity.types";

import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";

export const TitleQA = ({
    title,
    subtitle,
}: {
    title: PortableColorTitle | null;
    subtitle: string | null;
}) => {
    return (
        <TitleWrapper className="flex flex-col pc:justify-start pc:items-center">
            <div className="flex flex-col tab:flex-row justify-between items-start pc:flex-row">
                <SmallPageTitle className="ml-1 mr-[10px] mt-2 pc:mt-[14px] tab:mr-3 flex  ">
                    {subtitle || "You forgot a subtitle"}
                </SmallPageTitle>
                {title && (
                    <div className="w-[202px] tab:w-auto tab:max-w-[600px] pc:max-w-[700px] desk:max-w-[900px]">
                        {title[0] && (
                            <PortableText
                                value={title[0]}
                                components={myPortableTextComponents}
                            />
                        )}
                    </div>
                )}
            </div>
        </TitleWrapper>
    );
};
