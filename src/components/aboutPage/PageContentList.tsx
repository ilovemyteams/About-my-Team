import { useTranslations } from "next-intl";

export const PageContentList = () => {
    const getTranslation = useTranslations("AboutPage");
    const contentList = [
        getTranslation("contentItem1"),
        getTranslation("contentItem2"),
        getTranslation("contentItem3"),
        getTranslation("contentItem4"),
    ];
    return (
        <ul className="flex flex-wrap gap-x-1 gap-y-1 justify-between tab:gap-0 tab:justify-between mt-[40px] tab:mt-[56px] pc:mt-[46px]">
            {contentList.map((content, idx) => (
                <li key={idx}>
                    <span className="text-xs dark:text-purple-50 text-purple-130">
                        {content.toUpperCase()}
                    </span>
                </li>
            ))}
        </ul>
    );
};