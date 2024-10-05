import { PortableColorTitle } from "@/types/sanity.types";
import { TitleWrapper } from "../shared/TitleWrapper";
import { PortableText } from "next-sanity";
import { myPortableTextComponents } from "@/sanity/utils/portableTexts";

export const TitleFooter = ({
    title,
}: {
    title: PortableColorTitle | null;
}) => {
    return (
        <TitleWrapper className="flex flex-col pb-0 mb-9 mt-5  pc:flex-row flex-start tab:pb-0 tab:mb-[98px] pc:mb-[121px] pc:mt-[46px] tab:mt-[40px] deskxl:mb-[156px]">
            {title && (
                <div className="w-[87%]">
                    <div>
                        {title[0] && (
                            <PortableText
                                value={title[0]}
                                components={myPortableTextComponents}
                            />
                        )}
                    </div>
                    <div className="tab:ml-[133px] pc:ml-[180px]">
                        {title[1] && (
                            <PortableText
                                value={title[1]}
                                components={myPortableTextComponents}
                            />
                        )}
                    </div>
                </div>
            )}
        </TitleWrapper>
    );
};
