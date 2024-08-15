import Image from "next/image";
import { useTranslations } from "next-intl";

import { IconHeartWeb } from "../shared/Icons/IconHeartWeb";
import { Section } from "../shared/Section";

const SUSANNAS_PHOTO_LINK =
    "https://drive.google.com/uc?export=view&id=1j2sHd4yuBnbgXsl-lZsZypeu-mKlruVI";

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
            <div className="tab:flex tab:gap-10 pc:gap-[90px] tab:mb-6 pc:mb-10 tab:items-stretch">
                <Image
                    src={SUSANNAS_PHOTO_LINK}
                    alt={getTranslation("aboutOwnerPhotoAlt")}
                    width={449}
                    height={503}
                    className="mb-6 mx-auto tab:aspect-[322/364] tab:mx-0 tab:mb-0"
                />
                <div>
                    <div className="border-y dark:border-purple-stroke border-purple-strokeLight text-sm tab:text-base tab:min-w-[360px] tab:w-[47vw] pc:text-xl tab:h-[364px] tab:overflow-scroll">
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
                    </div>
                </div>
            </div>
        </Section>
    );
};
