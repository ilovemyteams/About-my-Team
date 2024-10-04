import { BenefitsItem } from "./BenefitsItem";

export const BenefitsList = ({
    benefits,
}: {
    benefits: Array<string | null> | null;
}) => {
    return (
        <ul className="flex flex-col justify-center gap-4 pc:gap-[61px] w-full">
            {benefits
                ? benefits.map(
                      (benefit, idx) =>
                          benefit && (
                              <BenefitsItem key={idx}>{benefit}</BenefitsItem>
                          )
                  )
                : "You forgot benefits"}
        </ul>
    );
};
