import { PortableText } from "next-sanity";

import { myPortableTextComponents } from "@/sanity/utils/portableTexts";
import { PortableColorTitle } from "@/types/sanity.types";

import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const StagesTitle = ({
    title,
    subtitle,
}: {
    title: PortableColorTitle | null;
    subtitle: string | null;
}) => {
    return (
        <TitleWrapper className="tab:flex">
            <SmallPageTitle className="min-w-[67px] ml-1 mr-3 flex items-center">
                {subtitle || "You forgot a subtitle"}
            </SmallPageTitle>
            <div className="w-[280px] tab:w-auto">
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
            </div>
        </TitleWrapper>
    );
};
