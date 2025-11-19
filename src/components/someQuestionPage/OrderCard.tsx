import { CurrentFaqQueryResult, PortableTextSimple } from "@/sanity/types";

import { PageSection } from "../shared/PageSection";
import { SanityImage } from "../shared/SanityImage";
import { WriteUs } from "../shared/WriteUs/WriteUs";
import { LayoutPortableTextBlock } from "./shared/LayoutPortableTextBlock";

interface OrderCardProps {
    image: NonNullable<CurrentFaqQueryResult>["orderImage"];
    orderText: PortableTextSimple | null;
    isOrderBtnVisible: boolean | null;
    searchTerm: string;
}

export const OrderCard = ({
    image,
    orderText,
    isOrderBtnVisible,
    searchTerm,
}: OrderCardProps) => {
    return (
        <PageSection className="flex flex-col gap-6 tab:flex-row tab:gap-8 tab:justify-between pc:gap-[104px] desk:gap-[100px] pb-[80px] tab:pb-[100px] desk:pb-[180px]">
            <div className="mt-0 mb-auto tab:w-[50%] pc:min-w-[630px] pc:w-[58%] desk:w-[54.6%] ">
                <SanityImage
                    image={image.image}
                    metadata={image.metadata}
                    alt={image.caption}
                    width={730}
                    height={417}
                    className="w-full"
                />
            </div>

            <div className="flex flex-col gap-6 tab:justify-between tab:w-[45%] pc:w-[32%] desk:w-[37%]">
                {orderText && (
                    <div className="flex flex-col gap-6 pc:gap-10">
                        <LayoutPortableTextBlock
                            searchTerm={searchTerm}
                            value={orderText}
                        />
                    </div>
                )}

                {isOrderBtnVisible && (
                    <div className="mx-auto tab:ml-0 tab:mr-auto">
                        <WriteUs />
                    </div>
                )}
            </div>
        </PageSection>
    );
};
