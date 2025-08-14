import { useTranslations } from "next-intl";

import { ColoredTitle } from "../../shared/ColoredTitle";
import { PageSection } from "../../shared/PageSection";
import { PageTopSection } from "../../shared/PageTopSection";

export const TeamHeader = () => {
    const getTranslation = useTranslations("Breadcrumbs");
    const teamTranslations = useTranslations("MemberPage");

    const breadcrumbsName = getTranslation("breadcrumbItemTeam");

    const breadcrumbs = [{ title: breadcrumbsName, url: "" }];

    const description = teamTranslations("description");

    return (
        <PageSection className="pt-4 tab:pt-[44px] pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <div className="mb-6 tab:mb-[36px] pc:mb-10 desk:mb-[60px]">
                <h1 className="font-caviar font-bold text-3xl28 tab:text-4xl pc:text-6xl desk:text-7xl mb-6 tab:mb-10 pc:mb-6 desk:mb-[60px]">
                    <ColoredTitle
                        categoryName="MemberPage"
                        propName={["title"]}
                    />
                </h1>
                <p className="text-sm tab:text-base pc:text-xl desk:text-2xl tab:w-[74%] pc:w-[55%]">
                    {description}
                </p>
            </div>
        </PageSection>
    );
};
