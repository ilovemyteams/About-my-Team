import Image from "next/image";
import { useTranslations } from "next-intl";

import { membersData } from "@/src/mockedData/membersData";

import { IconLinkedin } from "../shared/Icons/IconLinkedin";
import { IconQuote } from "../shared/Icons/IconQuote";
import { Section } from "../shared/Section";
import { SocialLink } from "../shared/SocialLink";

const SUSANNAS_PORTRAIT_LINK =
    "https://drive.google.com/uc?export=view&id=17XmqdX6Hkp5Vf2_MOyBt5jIhEssBKgZp";

export const QuoteSection = () => {
    const getTranslation = useTranslations("AboutPage");
    const iconLinkedin = <IconLinkedin className="w-6 h-6" />;
    const SusannasData = membersData.find(
        member => member.data.id === "SusannaSalataPM"
    );
    const SusannasLi = SusannasData?.data.socialLinks.linkedin;
    return (
        <Section className="pc:pt-0">
            <div className="tab:flex tab:flex-row-reverse tab:justify-between tab:gap-10 pc:gap-[91px] tab:items-stretch">
                <Image
                    src={SUSANNAS_PORTRAIT_LINK}
                    alt={getTranslation("authorPhotoAlt")}
                    width={538}
                    height={356}
                    className="mb-10 tab:mb-0 object-cover"
                />
                <div className="flex flex-col justify-between tab:w-[50%] tab:min-w-[360px] pc:w-[41.7%] pc:min-w-[451px]">
                    <div className=" mx-auto mb-10 text-sm tab:text-base pc:text-xl desk:text-2xl">
                        <IconQuote
                            className={
                                "w-[48px] h-[32px] pc:w-[60px] pc:h-[40px] dark:text-red text-redLight mb-4 tab:mb-6"
                            }
                        />
                        <p className="mb-4">{getTranslation("quoteP1")}</p>
                        <p>{getTranslation("quoteP2")}</p>
                    </div>
                    <div className="flex justify-between items-center border-y dark:border-purple-stroke border-purple-strokeLight py-2">
                        <div>
                            <p className="text-purple-200 dark:text-white-200 font-caviar text-baseb pc:text-3xl">
                                {getTranslation("author")}
                            </p>
                            <p className="text-xs pc:text-base">
                                {getTranslation("authorsRole")}
                            </p>
                        </div>
                        <div>
                            {SusannasLi && (
                                <SocialLink
                                    url={SusannasLi}
                                    image={iconLinkedin}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
