import Image from "next/image";

import { NoImageHeart } from "../shared/NoImageHeart";
import { PageSection } from "../shared/PageSection";
import { WriteUs } from "../shared/WriteUs/WriteUs";

interface OrderCardProps {
    imageLink?: string;
    fullAnswerBottomText?: string[];
    imageAltText: string;
}

export const OrderCard = ({
    imageLink,
    fullAnswerBottomText,
    imageAltText,
}: OrderCardProps) => {
    return (
        <PageSection className="flex flex-col gap-6 tab:flex-row tab:gap-8 tab:justify-between pc:gap-[104px] pb-[80px] tab:pb-[100px] pc:pb-[100px]">
            {imageLink ? (
                <Image
                    src={imageLink}
                    width={630}
                    height={362}
                    alt={imageAltText}
                    className="tab:w-[50%] pc:min-w-[630px] pc:w-[58%]"
                />
            ) : (
                <div className="bg-CTAGradientLight dark:bg-CTAGradient tab:w-[50%] pc:min-w-[630px] pc:w-[58%] w-full min-h-[166px] tab:min-h-[206px] pc:min-h-[362px]">
                    <NoImageHeart className="ml-auto mr-0 w-[45%] h-auto" />
                </div>
            )}

            <div className=" flex flex-col gap-6 tab:justify-between tab:w-[45%] pc:w-[32%] ">
                {fullAnswerBottomText
                    ? fullAnswerBottomText.map((text, index) => (
                          <p key={index}>{text}</p>
                      ))
                    : ""}
                <WriteUs />
            </div>
        </PageSection>
    );
};
