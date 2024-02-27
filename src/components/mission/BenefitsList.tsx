import { useTranslations } from "next-intl";
import { BenefitsItem } from "./BenefitsItem";

export const BenefitsList = () => {
    const getTranslation = useTranslations("Mission");
    const benefitsList = [
        getTranslation("firstBenefit"),
        getTranslation("secondBenefit"),
        getTranslation("thirdBenefit"),
    ];
    console.log(benefitsList);
    return (
        <ul className="flex flex-col justify-center gap-[49px] min-w-[540px] min-h-[298px]">
            {benefitsList.map((item, idx) => (
                <BenefitsItem key={idx}>{item}</BenefitsItem>
            ))}
        </ul>
    );
};
