import { DescriptionType } from "@/src/mockedData/servicesData";

import { IconQADecoration } from "../shared/Icons/IconQADecoration";
import { ListWithRedSquareBullets } from "../shared/ListWithRedSquareBullets";
import { LayoutTitle } from "./shared/LayoutTitle";
import { PageSection } from "../shared/PageSection";

export const ListWithArrowIconLayout = ({
    description,
    title,
}: {
    description: DescriptionType[];
    title?: string;
}) => {
    return (
        <PageSection className="pb-8 tab:pb-[100px] pc:pb-[160px] desk:pb-[180px]">
            {title && <LayoutTitle text={title} />}
            <div className="tab:flex">
                <ListWithRedSquareBullets description={description} />
                <div className="w-[76px] pc:w-[110px] mx-auto text-redLight dark:text-red">
                    <IconQADecoration className="tab:sticky tab:top-[88px] pc:top-2" />
                </div>
            </div>
        </PageSection>
    );
};
