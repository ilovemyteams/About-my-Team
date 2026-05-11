import { getTranslations } from "next-intl/server";

import { PageSection } from "@/src/components/shared/PageSection";
import { PageTopSection } from "@/src/components/shared/PageTopSection";

export const MemberHeader = async () => {
    const breadcrumbs = await getTranslations("Breadcrumbs");
    const breadcrumbsName = [
        { title: breadcrumbs("breadcrumbItemTeam"), url: "member" },
        { title: breadcrumbs("breadcrumbItemMember"), url: "" },
    ];
    return (
        <PageSection className="pt-4 tab:pt-[44px] pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbsName} />
        </PageSection>
    );
};
