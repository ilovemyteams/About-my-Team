import { useTranslations } from "next-intl";

import { GoToAll } from "../shared/GoToAll";
import { PageSection } from "../shared/PageSection";

export const GoToAllService = () => {
    const getTranslation = useTranslations("ServicesPage");
    return (
        <PageSection className="pb-[109px] tab:pb-[100px] desk:pb-[120px] ">
            <GoToAll href="/services" title={getTranslation("allService")} />
        </PageSection>
    );
};
