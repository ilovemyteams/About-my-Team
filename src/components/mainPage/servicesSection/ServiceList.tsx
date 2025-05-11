"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { ServiceItem } from "./ServiceItem";

export const ServiceList = () => {
    const [openSection, setOpenSection] = useState<string>("business");
    const getTranslation = useTranslations("Services");
    const servicesList = [
        {
            id: "business",
            title: getTranslation("BATitle"),
            text: getTranslation("BAText"),
        },
        {
            id: "design",
            title: getTranslation("designTitle"),
            text: getTranslation("designText"),
        },
        {
            id: "development",
            title: getTranslation("devTitle"),
            text: getTranslation("devText"),
        },
        {
            id: "qa",
            title: getTranslation("QATitle"),
            text: getTranslation("QAText"),
        },
    ];

    const onChangeSection = (id: string) => {
        setOpenSection(id);
    };

    return (
        <ul>
            {servicesList.map((item, index) => (
                <ServiceItem
                    key={index}
                    {...item}
                    onChangeSection={onChangeSection}
                    isOpen={openSection === item.id}
                />
            ))}
        </ul>
    );
};
