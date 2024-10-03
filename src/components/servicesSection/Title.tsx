import { PortableText } from "next-sanity";

import { myPortableTextComponents } from "@/sanity/utils/portableTexts";
import { PortableColorTitle } from "@/types/sanity.types";

import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = ({
    title,
    subtitle,
}: {
    title: PortableColorTitle | null;
    subtitle: string | null;
}) => {
    return (
        <TitleWrapper className="flex flex-col">
            <div className="flex flex-col tab:flex-row">
                <SmallPageTitle className="min-w-[75px] ml-1 mr-3 flex items-center">
                    {subtitle || "You forgot a subtitle"}
                </SmallPageTitle>
                <div className="w-[262px] tab:w-auto">
                    {title && (
                        <div>
                            {title[0] && (
                                <PortableText
                                    value={title[0]}
                                    components={myPortableTextComponents}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
            {title && (
                <div>
                    {title[1] && (
                        <PortableText
                            value={title[1]}
                            components={myPortableTextComponents}
                        />
                    )}
                </div>
            )}
        </TitleWrapper>
    );
};
