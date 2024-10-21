import Image from "next/image";

import { parseTextWithLink } from "@/src/utils/parseTextWithLink";
import { LocaleType } from "@/types/LocaleType";

import { NoImageHeart } from "../shared/NoImageHeart";
import { PageSection } from "../shared/PageSection";
import { WriteUs } from "../shared/WriteUs/WriteUs";

interface OrderCardProps {
    imageLink?: string;
    fullAnswerBottomText?: string[];
    imageAltText: string;
    locale: LocaleType;
}

export const OrderCard = ({
    imageLink,
    fullAnswerBottomText,
    imageAltText,
    locale,
}: OrderCardProps) => {
    return (
        <PageSection className="flex flex-col gap-6 tab:flex-row tab:gap-8 tab:justify-between pc:gap-[104px] desk:gap-[100px] pb-[80px] tab:pb-[100px] desk:pb-[180px]">
            {imageLink ? (
                <Image
                    src={imageLink}
                    width={630}
                    height={362}
                    alt={imageAltText}
                    className="tab:w-[50%] pc:min-w-[630px] pc:w-[58%] desk:w-[54.6%] object-contain mt-0 mb-auto"
                />
            ) : (
                <div className="bg-CTAGradientLight dark:bg-CTAGradient tab:w-[50%] pc:min-w-[630px] pc:w-[58%] w-full min-h-[166px] tab:min-h-[206px] pc:min-h-[362px]">
                    <NoImageHeart className="ml-auto mr-0 w-[45%] h-auto" />
                </div>
            )}

            <div className=" flex flex-col gap-6 tab:justify-between tab:w-[45%] pc:w-[32%] desk:w-[37%]">
                {fullAnswerBottomText ? (
                    <div>
                        {fullAnswerBottomText.map((text, index) => (
                            <p
                                key={index}
                                className="text-sm20 tab:text-base23 pc:text-xl28 desk:text-2xl34"
                            >
                                {parseTextWithLink(text, locale)}
                            </p>
                        ))}
                    </div>
                ) : (
                    ""
                )}
                <div className="mx-auto tab:ml-0 tab:mr-auto">
                    <WriteUs />
                </div>
            </div>
        </PageSection>
    );
};
