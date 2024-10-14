import { PortableText } from "next-sanity";

import { myPortableTextComponents } from "@/sanity/utils/portableTexts";
import { PortableColorTitle } from "@/types/sanity.types";

import { SmallPageTitle } from "../shared/SmallPageTitle";
import { TitleWrapper } from "../shared/TitleWrapper";

export const Title = ({
    title,
    subtitle,
}: {
    subtitle: string | null;
    title: PortableColorTitle | null;
}) => {
    return (
        <TitleWrapper className="flex flex-col tab:flex-row pc:justify-start pc:items-center">
            <SmallPageTitle className="flex flex-col ml-1 mb-[8px] tab:mt-[6px] pc:mt-0 pc:min-w-[75px] mr-3 pc:h-[21px] pc:flex-row">
                {subtitle ? subtitle : ""}
            </SmallPageTitle>
            <p className="tab:max-w-[300px] pc:max-w-[none]">
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
            </p>
        </TitleWrapper>
    );
};
