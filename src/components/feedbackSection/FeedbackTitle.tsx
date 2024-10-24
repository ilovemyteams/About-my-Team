import { PortableText } from "next-sanity";

import { myPortableTextComponents } from "@/sanity/utils/portableTexts";
import { PortableColorTitle } from "@/types/sanity.types";

import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const FeedbackTitle = ({
    subtitle,
    title,
}: {
    subtitle: string | null;
    title: PortableColorTitle | null;
}) => {
    return (
        <div>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3  tab:mt-2 tab:mr-[16px] pc:mt-[14px] flex items-center">
                    {subtitle || ""}
                </SmallPageTitle>

                {title && (
                    <div className="tab:w-[70%]">
                        {title[0] && (
                            <PortableText
                                value={title[0]}
                                components={myPortableTextComponents}
                            />
                        )}
                        <div className="tab:-ml-[77px]">
                            {title[1] && (
                                <PortableText
                                    value={title[1]}
                                    components={myPortableTextComponents}
                                />
                            )}
                            {title[2] && (
                                <PortableText
                                    value={title[2]}
                                    components={myPortableTextComponents}
                                />
                            )}
                        </div>
                    </div>
                )}
            </TitleWrapper>
        </div>
    );
};
