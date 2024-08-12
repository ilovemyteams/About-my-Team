import Image from "next/image";
import { Section } from "../shared/Section";
import { useTranslations } from "next-intl";
import { IconLinkedin } from "../shared/Icons/IconLinkedin";
import { SocialLink } from "../shared/SocialLink";
import { IconQuote } from "../shared/Icons/IconQuote";

export const QuoteSection = () => {
    const getTranslation = useTranslations("AboutPage");
    const iconLinkedin = <IconLinkedin className="w-6 h-6" />;

    return (
        <Section>
            <Image
                src="https://drive.google.com/uc?export=view&id=1yibIolW0n7egI63XAnJ68u4HnNw-TRNh"
                alt={getTranslation("authorPhotoAlt")}
                width={538}
                height={356}
            />
            <div>
                <IconQuote
                    className={
                        "w-[48px] h-[32px] pc:w-[60px] pc:h-[40px] dark:text-red text-redLight"
                    }
                />
                <p>{getTranslation("quoteP1")}</p>
                <p>{getTranslation("quoteP2")}</p>
            </div>
            <div className="flex justify-between items-center border-y dark:border-purple-stroke border-purple-strokeLight">
                <div>
                    <p>{getTranslation("author")}</p>
                    <p>{getTranslation("authorsRole")}</p>
                </div>
                <div>
                    <SocialLink
                        url="https://www.linkedin.com/in/susanna-salata/"
                        image={iconLinkedin}
                    />
                </div>
            </div>
        </Section>
    );
};
