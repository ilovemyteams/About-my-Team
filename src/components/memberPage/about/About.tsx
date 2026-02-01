import { getTranslations } from "next-intl/server";

import { TitleBig } from "../parts/shared/TitleBig";
import { ReadMoreText } from "./parts/ReadMoreText";

interface AboutProps {
    text: string[];
    services?: string[];
}

export const About = async ({ text, services }: AboutProps) => {
    const t = await getTranslations("MemberPage");

    return (
        <section className="flex flex-col gap-4 tab:gap-5 pc:gap-8 desk:gap-10">
            <div className="text-greyLight dark:text-grey text-sm tab:text-base23 desk:text-lg25 leading-[23px] font-normal">
                <TitleBig>{t("about")}</TitleBig>
                <ReadMoreText paragraphs={text} limit={495} />
            </div>
            {services && (
                <div className="p-4 border border-purple-strokeLight dark:border-purple-stroke text-greyLight dark:text-grey">
                    <h3 className="font-caviar text-baseb tab:text-lg pc:text-xlb text-purple-200 dark:text-white-200 mb-2">
                        {t("services")}
                    </h3>
                    <p className="text-sm tab:text-base23 desk:text-lg25 text-greyLight dark:text-grey font-normal whitespace-pre-wrap">
                        {services.join("  •  ")}
                    </p>
                </div>
            )}
        </section>
    );
};
