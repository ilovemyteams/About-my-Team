import { OneServiceInfo } from "./OneServiceInfo";
import { useTranslations } from "next-intl";

export const ServicesList = () => {
    const getTranslation = useTranslations("Services");

    const serviceItems = [
        {
            title: getTranslation("BATitle"),
            text: getTranslation("BAText"),
        },
        {
            title: getTranslation("devTitle"),
            text: getTranslation("devText"),
        },
        {
            title: getTranslation("designTitle"),
            text: getTranslation("designText"),
        },
        {
            title: getTranslation("QATitle"),
            text: getTranslation("QAText"),
        },
        {
            title: getTranslation("consultationTitle"),
            text: getTranslation("consultationText"),
        },
        {
            title: getTranslation("allServicesTitle"),
            text: getTranslation("allServicesText"),
        },
    ];

    return (
        <>
            {serviceItems.map((item, index) => (
                <li
                    key={index}
                    className={`border-purple-stroke border-b-[1px] tab:odd:border-r-[1px] 
                    first-of-type:border-t-[1px] tab:first-of-type:border-t-0
                    ${(index === 4 || index === 5) && "tab:border-b-0"}
                    ${index !== 3 ? "pc:border-r-[1px]" : "pc:border-r-0"}
                    `}
                >
                    <OneServiceInfo title={item.title}>
                        {item.text}
                    </OneServiceInfo>
                </li>
            ))}
        </>
    );
};
