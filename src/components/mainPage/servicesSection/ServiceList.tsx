"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { SERVICE_SECTION_DATA } from "@/src/constants/renderOnMain";
import { useRouter } from "@/src/i18n/routing";

import { Button } from "../../shared/Button";
import { ServiceItem } from "./ServiceItem";

export const ServiceList = () => {
    const [openSection, setOpenSection] = useState<string>(
        SERVICE_SECTION_DATA[0].id
    );
    const [isHoverLoading, setIsHoverLoading] = useState(false);
    const getTranslation = useTranslations("Services");
    const text = getTranslation("subtitleText");
    const btnText = getTranslation("allServices");
    const router = useRouter();

    const onChangeSection = (id: string) => {
        setOpenSection(id);
    };

    const onChangeHoverLoading = (value: boolean) => {
        setIsHoverLoading(value);
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
                {SERVICE_SECTION_DATA.map((item, index) => (
                    <ServiceItem
                        key={index}
                        {...item}
                        onChangeSection={onChangeSection}
                        isOpen={openSection === item.id}
                        onHoverChange={onChangeHoverLoading}
                        isHoverLoading={isHoverLoading}
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
