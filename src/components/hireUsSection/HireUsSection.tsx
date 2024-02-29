import { useTranslations } from "next-intl";
import { Button } from "../shared/Button";
import { SectionCTA } from "../shared/SectionCTA";
import { HireUsTitle } from "./HireUsTitle";

export const HireUsSection = () => {
    const getTranslation = useTranslations("HireUs");
    return (
        <SectionCTA className="">
            <HireUsTitle />
            <div className="flex justify-between items-center mt-[100px]">
                <div className="text-base">
                    <p className="mb-4">{getTranslation("workingHours")}</p>
                    <a
                        href={`mailto:${getTranslation("email")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {getTranslation("email")}
                    </a>
                </div>
                <Button>Button</Button>
            </div>
        </SectionCTA>
    );
};
