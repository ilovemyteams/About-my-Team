import { OneServiceInfo } from "./OneServiceInfo";
import { useTranslations } from "next-intl";

export const ServicesList = () => {
    const getTranslation = useTranslations("Services");

    const serviceItems = [
        {
            title: getTranslation("BATitle"),
            text: getTranslation("BAText"),
            borderClasses:
                "border-purple-stroke border-b-[1px] pc:border-t-0 tab:border-r-[1px]",
        },
        {
            title: getTranslation("devTitle"),
            text: getTranslation("devText"),
            borderClasses:
                "border-purple-stroke border-b-[1px] pc:border-r-[1px]",
        },
        {
            title: getTranslation("designTitle"),
            text: getTranslation("designText"),
            borderClasses:
                "border-purple-stroke border-b-[1px] tab:border-r-[1px]",
        },
        {
            title: getTranslation("QATitle"),
            text: getTranslation("QAText"),
            borderClasses: "border-purple-stroke border-b-[1px]",
        },
        {
            title: getTranslation("consultationTitle"),
            text: getTranslation("consultationText"),
            borderClasses:
                "border-purple-stroke border-b-[1px] pc:border-b-0 tab:border-r-[1px]",
        },
        {
            title: getTranslation("allServicesTitle"),
            text: getTranslation("allServicesText"),
            borderClasses:
                "border-purple-stroke border-b-[1px] pc:border-b-0 pc:border-r-[1px]",
        },
    ];

    return (
        <>
            {serviceItems.map((item, index) => (
                <li key={index} className={item.borderClasses}>
                    <OneServiceInfo title={item.title}>
                        {item.text}
                    </OneServiceInfo>
                </li>
            ))}
        </>
    );
};
