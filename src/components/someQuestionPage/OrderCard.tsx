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
    // const splitedOrderText = orderText.split("/n");
    return (
        <PageSection className="flex flex-col gap-6 tab:flex-row tab:gap-8 tab:justify-between pc:gap-[104px] desk:gap-[100px] pb-[80px] tab:pb-[100px] desk:pb-[180px]">
            <SanityImage
                src={image.url}
                alt={image.caption}
                blurUrl={image.lqip}
                width={630}
                height={362}
                className="tab:w-[50%] pc:min-w-[630px] pc:w-[58%] desk:w-[54.6%] mt-0 mb-auto aspect-[1.75]"
            />

            <div className="flex flex-col gap-6 tab:justify-between tab:w-[45%] pc:w-[32%] desk:w-[37%]">
                {orderText && (
                    <div className="flex flex-col gap-6 pc:gap-10">
                        <LayoutPortableTextBlock
                            searchTerm={searchTerm}
                            value={orderText}
                        />
                        {/* {splitedOrderText.map((text, index) => (
                            <p
                                key={index}
                                className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34"
                            >
                                <HighlightText
                                    text={text}
                                    toBeHighlighted={searchTerm}
                                />
                            </p>
                        ))} */}
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
