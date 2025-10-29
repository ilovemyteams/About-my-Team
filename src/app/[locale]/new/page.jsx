import { useTranslations } from "next-intl";
import { PageTopSection } from "../../../components/shared/PageTopSection.tsx";
import { Section } from "../../../components/shared/Section.tsx";

const Test = () => {
    const getTranslationBreadcrumbs = useTranslations("Breadcrumbs");
    const breadcrumbs = [
        { title: getTranslationBreadcrumbs("breadcrumbItemMember"), url: "" },
    ];
    return (
        <Section className="pt-8 tab:pt-[100px] pc:pt-8">
            <PageTopSection breadcrumbsList={breadcrumbs} />
            <h1>Text</h1>
        </Section>
    );
};

export default Test;
