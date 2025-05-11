"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { useRouter } from "@/src/i18n/routing";

import { Button } from "../../shared/Button";
import { ServiceItem } from "./ServiceItem";

export const ServiceList = () => {
    const [openSection, setOpenSection] = useState<string>("business");
    const getTranslation = useTranslations("Services");
    const text = getTranslation("subtitleText");
    const btnText = getTranslation("allServices");
    const router = useRouter();

    const servicesList = [
        {
            id: "business",
            title: getTranslation("BATitle"),
            text: getTranslation("BAText"),
            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742559370/service-ba_ievdfg.jpg",
        },
        {
            id: "design",
            title: getTranslation("designTitle"),
            text: getTranslation("designText"),
            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742559375/services-design_mod90s.jpg",
        },
        {
            id: "development",
            title: getTranslation("devTitle"),
            text: getTranslation("devText"),
            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742559378/services-development_v5tp8u.jpg",
        },
        {
            id: "qa",
            title: getTranslation("QATitle"),
            text: getTranslation("QAText"),
            image: "https://res.cloudinary.com/dvfu5vhjx/image/upload/v1742559533/services-testing_reuzdb.jpg",
        },
    ];

    const onChangeSection = (id: string) => {
        setOpenSection(id);
    };

    const onClickAllServices = () => {
        router.push("/services");
        sendGTMEvent({
            event: "learn_more_services",
        });
    };

    return (
        <div>
            <p className="text-purple-130 dark:text-purple-50 text-sm uppercase  whitespace-pre-wrap mb-6 pc:mb-4 desk:text-base">
                {text}
            </p>
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
            <div className="mt-8 text-center tab:text-left tab:mt-9 desk:mt-[66px]">
                <Button onClick={onClickAllServices} color="grey">
                    {btnText}
                </Button>
            </div>
        </div>
    );
};
