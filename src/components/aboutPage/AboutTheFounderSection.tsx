import { ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { IconHeartWeb } from "../shared/Icons/IconHeartWeb";
import { Section } from "../shared/Section";

const SUSANNAS_PHOTO_LINK =
    "https://drive.google.com/uc?export=view&id=1DAo5hUD2benS711OALVoLpos9R1qssTC ";

export const AboutTheFounderSection = () => {
    const getTranslation = useTranslations("AboutPage");

    return (
        <Section id="founder" className="tab:pt-5">
            <h2 className="font-caviar text-3xl mb-6 tab:text-4xl tab:mb-8 pc:text-6xl pc:mb-10 pc:ml-[51%]">
                {getTranslation("aboutOwnerTitle")}
                <span className="text-purple-100">
                    {getTranslation("aboutOwnerTitleAccent")}
                </span>
            </h2>
            <div className="tab:flex tab:gap-10 pc:gap-[90px] tab:mb-6 pc:mb-10 ">
                <div className="tab:min-w-[322px] max-w-[330px] tab:max-w-full tab:w-[44.7%] tab:aspect-[322/364] pc:aspect-[449/503]">
                    <Image
                        src={SUSANNAS_PHOTO_LINK}
                        alt={getTranslation("aboutOwnerPhotoAlt")}
                        width={449}
                        height={503}
                        className="mb-6 mx-auto tab:mx-0 tab:mb-0 object-cover tab:min-w-[322px]  w-full 
                                tab:aspect-[322/364] pc:aspect-[449/503] pc:min-w-[449px]"
                    />
                </div>
                <div className="tab:w-[50%] tab:min-h-[360px] tab:aspect-[360/364] pc:min-h-[503px] pc:aspect-[539/503] tab:object-cover tab:border-y dark:border-purple-stroke border-purple-strokeLight">
                    <ScrollShadow
                        hideScrollBar
                        className="tab:py-4 pc:py-5 tab:min-h-[360px]  tab:aspect-[360/364] pc:min-h-[503px] pc:max-w-[668px] pc:aspect-[539/503] tab:object-cover w-full text-sm tab:text-base tab:min-w-[360px] pc:min-w-[539px]  pc:w-[42vw] pc:text-xl  tab:overflow-scroll"
                    >
                        <p className="mb-6 pc:mb-10">
                            {getTranslation("aboutOwnerP1")}
                        </p>
                        <p className="mb-6 pc:mb-10">
                            {getTranslation("aboutOwnerP2")}
                        </p>
                        <p className="mb-6 pc:mb-10">
                            {getTranslation("aboutOwnerP3")}
                        </p>
                        <p className="mb-6 pc:mb-10">
                            {getTranslation("aboutOwnerP4")}
                        </p>
                        <p className="mb-6 pc:mb-10">
                            {getTranslation("aboutOwnerP5")}
                        </p>
                        <IconHeartWeb className="dark:text-purple-stroke text-purple-strokeLight ml-auto mr-0 tab:w-[96px] tab:h-auto" />
                    </ScrollShadow>
                </div>
            </div>
        </Section>
    );
};
