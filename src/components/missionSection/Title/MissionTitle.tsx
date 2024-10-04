import { SmallPageTitle } from "../../shared/SmallPageTitle";
import { TitleWrapper } from "../../shared/TitleWrapper";
import { PortableColorTitle } from "@/types/sanity.types";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "@/sanity/utils/portableTexts";

export const MissionTitle = ({
    subtitle,
    title,
}: {
    subtitle: string | null;
    title: PortableColorTitle | null;
}) => {
    return (
        <>
            <TitleWrapper className="flex flex-col tab:flex-row items-start">
                <SmallPageTitle className="ml-1 mr-3 tab:mt-2 pc:mt-4 flex items-center">
                    {subtitle || "You forgot a subtitle"}
                </SmallPageTitle>
                <div>
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
                    {title && (
                        <div className="tab:-ml-[74px]">
                            {title[2] && (
                                <PortableText
                                    value={title[2]}
                                    components={myPortableTextComponents}
                                />
                            )}
                        </div>
                    )}
                </div>
            </TitleWrapper>
        </>
    );
};
