import { useTranslations } from "next-intl";
import Image from "next/image";
import { Section } from "../shared/Section";
import { IconHeartWeb } from "../shared/Icons/IconHeartWeb";

const SUSANNASPHOTOLINK =
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
            <div className="tab:flex tab:gap-10 pc:gap-[90px] tab:justify-between tab:mb-6 pc:mb-10">
                <Image
                    src={SUSANNASPHOTOLINK}
                    alt={getTranslation("aboutOwnerPhotoAlt")}
                    width={449}
                    height={503}
                    className="mb-6 mx-auto tab:mx-0 tab:mb-0 tab:min-w-[320px] tab:w-[42vw] h-auto tab:mt-2 object-cover"
                />
                <div className="text-sm tab:text-base mb-6 tab:min-w-[360px] tab:w-[47vw] tab:mb-0 pc:text-xl">
                    <p className="mb-6 pc:mb-10">
                        {getTranslation("aboutOwnerP1")}
                    </p>
                    <p className="mb-6 pc:mb-10">
                        {getTranslation("aboutOwnerP2")}
                    </p>
                    <p className="">{getTranslation("aboutOwnerP3")}</p>
                </div>
            </div>
            <div className="text-sm mb-6 tab:mb-0 tab:text-base tab:min-w-[320px] tab:w-[42vw] pc:text-xl pc:max-w-[585px]">
                <p className="mb-6 pc:mb-10">
                    {getTranslation("aboutOwnerP4")}
                </p>
                <p>{getTranslation("aboutOwnerP5")}</p>
            </div>
            <IconHeartWeb className="dark:text-purple-stroke text-purple-strokeLight ml-auto mr-0 tab:w-[96px] tab:h-[85px] tab:mt-[-85px]" />
        </Section>
    );
};
