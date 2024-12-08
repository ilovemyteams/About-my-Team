import { useLocale, useTranslations } from "next-intl";

import { TitleWrapper } from "../../shared/TitleWrapper";

export const TitleFooter = () => {
    const getTranslation = useTranslations("Footer");
    const locale = useLocale();

    const pcStyle =
        locale === "pl"
            ? "pc:ml-[160px] pc:indent-[-160px]"
            : "pc:ml-[180px] pc:indent-[-180px]";

    const title = getTranslation.rich("title", {
        purple: chunk => <span className="text-purple-100">{chunk}</span>,
    });
    return (
        <TitleWrapper
            className={`max-w-[320px] tab:max-w-full tab:whitespace-pre-wrap pb-0 tab:pb-0 mb-9 tab:mb-[98px] pc:mb-[121px] desk:mb-[156px] mt-5 tab:mt-[40px]  pc:mt-[46px] tab:ml-[133px] tab:indent-[-133px] ${pcStyle}`}
        >
            {title}
        </TitleWrapper>
    );
};
