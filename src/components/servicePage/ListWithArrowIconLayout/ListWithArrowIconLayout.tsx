import { DescriptionType } from "@/src/mockedData/servicesData";

import { IconQADecoration } from "../../shared/Icons/IconQADecoration";
import { ListWithRedSquareBullets } from "../../shared/ListWithRedSquareBullets";
import { PageSection } from "../../shared/PageSection";
import { LayoutTitle } from "../shared/LayoutTitle";
import { CheckIconList } from "./CheckIconList";

export const ListWithArrowIconLayout = ({
    description,
    title,
    icon = "square",
}: {
    description: DescriptionType[];
    title?: string;
    icon?: "square" | "check";
}) => {
    return (
        <PageSection className="pb-8 tab:pb-[100px] pc:pb-[160px] desk:pb-[180px]">
            {title && <LayoutTitle text={title} />}
            <div className="tab:flex">
                {icon === "square" && (
                    <ListWithRedSquareBullets description={description} />
                )}
                {icon === "check" && (
                    <CheckIconList description={description} />
                )}
                <div className="w-[76px] pc:w-[110px] mx-auto text-redLight dark:text-red">
                    <IconQADecoration className="tab:sticky tab:top-[88px] pc:top-2" />
                </div>
            </div>
        </PageSection>
    );
};
