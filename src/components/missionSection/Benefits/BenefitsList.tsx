import { useTranslations } from "next-intl";
import { BenefitsItem } from "./BenefitsItem";

export const BenefitsList = () => {
    const getTranslation = useTranslations("Mission");
    const benefitsList = [
        getTranslation("firstBenefit"),
        getTranslation("secondBenefit"),
        getTranslation("thirdBenefit"),
    ];

    return (
        <ul className="flex flex-col justify-center gap-4 pc:gap-[61px] w-full">
            {benefitsList.map((benefit, idx) => (
                <BenefitsItem key={idx}>{benefit}</BenefitsItem>
            ))}
        </ul>
    );
};
