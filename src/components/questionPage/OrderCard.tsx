import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button } from "../shared/Button";
import { Section } from "../shared/Section";

interface OrderCardProps {
    imageLink: string;
}

export const OrderCard = ({ imageLink }: OrderCardProps) => {
    const getTranslations = useTranslations("SomeFaqPage");
    return (
        <Section
            className={`flex flex-col gap-6 tab:flex-row tab:gap-8 pc:gap-[104px]`}
        >
            <div className="tab:w-1/2 h-auto">
                <Image
                    src={imageLink}
                    width={630}
                    height={362}
                    alt={getTranslations("orderCardImgAlt")}
                />
            </div>

            <div className=" flex flex-col gap-6 tab:justify-between tab:w-[45%] pc:w-1/3">
                <p>{getTranslations("orderCardText")}</p>
                <Button className="w-full">
                    {getTranslations("orderCardButton")}
                </Button>
            </div>
        </Section>
    );
};
