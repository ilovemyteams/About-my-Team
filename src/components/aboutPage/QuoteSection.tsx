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
        <Section className="pt-8">
            <Image
                src="https://drive.google.com/uc?export=view&id=1yibIolW0n7egI63XAnJ68u4HnNw-TRNh"
                alt={getTranslation("authorPhotoAlt")}
                width={538}
                height={356}
                className="mb-10"
            />
            <div className="w-[208px] mx-auto mb-10 text-sm">
                <IconQuote
                    className={
                        "w-[48px] h-[32px] pc:w-[60px] pc:h-[40px] dark:text-red text-redLight mb-4"
                    }
                />
                <p className="mb-4">{getTranslation("quoteP1")}</p>
                <p>{getTranslation("quoteP2")}</p>
            </div>
            <div className="flex justify-between items-center border-y dark:border-purple-stroke border-purple-strokeLight py-2">
                <div>
                    <p className="font-caviar text-baseb">
                        {getTranslation("author")}
                    </p>
                    <p className="text-xs">{getTranslation("authorsRole")}</p>
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
