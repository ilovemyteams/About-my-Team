import { DescriptionType } from "@/src/mockedData/servicesData";
import { ListWithRedSquareBullets } from "../shared/ListWithRedSquareBullets";
import { PageSection } from "../shared/PageSection";
import { IconQADecoration } from "../shared/Icons/IconQADecoration";

export const ListWithArrowIconLayout = ({
    description,
    title,
}: {
    description: DescriptionType[];
    title?: string;
}) => {
    return (
        <PageSection className="pb-8 tab:pb-[100px] pc:pb-[160px] desk:pb-[180px]">
            {title && (
                <h2 className="font-caviar text-2xlb tab:text-4xl pc:text-5xl desk:text-6xl dark:text-white-200 text-purple-200 mb-10 tab:mb-[64px] pc:mb-[80px]">
                    {title}
                </h2>
            )}
            <div className="tab:flex">
                <ListWithRedSquareBullets description={description} />
                <div className="w-[76px] pc:w-[110px] mx-auto text-redLight dark:text-red">
                    <IconQADecoration className="tab:sticky tab:top-[88px] pc:top-2" />
                </div>
            </div>
        </PageSection>
    );
};
