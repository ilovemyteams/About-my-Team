import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "../shared/Button";
import { Section } from "../shared/Section";

interface OrderCardProps {
    imageLink: string;
    altText: string;
    text: string;
}

export const OrderCard = ({ imageLink, altText, text }: OrderCardProps) => {
    const getTranslations = useTranslations("Buttons");
    return (
        <Section
            className={`flex flex-col gap-6 tab:flex-row tab:gap-8 pc:gap-[104px]`}
        >
            <div className="tab:w-1/2 h-auto">
                <Image src={imageLink} width={630} height={362} alt={altText} />
            </div>

            <div className=" flex flex-col gap-6 tab:justify-between tab:w-[45%] pc:w-1/3">
                <p>{text}</p>
                <Button className="w-full">{getTranslations("order")}</Button>
            </div>
        </Section>
    );
};
