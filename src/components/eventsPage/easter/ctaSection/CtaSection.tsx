import { useTranslations } from "next-intl";

import { IconCorner } from "@/src/components/shared/Icons/IconCorner";
import { PageSection } from "@/src/components/shared/PageSection";

import { CtaBasket } from "./CtaBasket";

export const CtaSection = () => {
    const getTranslation = useTranslations("EasterEvent");

    const title = getTranslation.rich("ctaText", {
        purple: chunk => <span className="text-purple-100">{chunk}</span>,
    });

    const cornersStyles = "w-[62px] h-auto pc:w-[91px]";
    return (
        <PageSection className="pb-[80px] relative overflow-x-clip">
            <div className="relative py-7 tab:px-10 pc:px-[72px] desk:px-[76px] tab:flex tab:justify-between tab:items-center tab:gap-6 tab:pt-9 tab:pb-10 pc:pt-[65px] pc:pb-[55px]">
                <IconCorner
                    className={`absolute  top-0 left-0  ${cornersStyles}`}
                />
                <IconCorner
                    className={`absolute top-0 right-0 scale-x-[-1] ${cornersStyles}`}
                />
                <IconCorner
                    className={`absolute bottom-0 left-0 scale-y-[-1]  ${cornersStyles}`}
                />
                <IconCorner
                    className={`absolute bottom-0 right-0 scale-[-1] ${cornersStyles}`}
                />
                <div className="px-3 w-[95%] grow-0 shrink-0 mx-auto text-center tab:text-left tab:mx-0  tab:px-0 tab:w-[60%] desk:w-[52%]">
                    <p className="font-caviar text-purple-200 dark:text-white-200 font-bold text-2xl24 tab:text-3xl28 pc:text-5xl40 desk:text-6xln mb-10 tab:mb-0 whitespace-pre-wrap">
                        {title}
                    </p>
                </div>

                <CtaBasket />
            </div>
        </PageSection>
    );
};
