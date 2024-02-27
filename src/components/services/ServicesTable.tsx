import { Button } from "../shared/Button";
import { OneServiceInfo } from "./OneServiceInfo";
import { useTranslations } from "next-intl";

export const ServicesTable = () => {
    const getTranslation = useTranslations("Services");
    return (
        <div className="pc:grid pc:grid-cols-4 pc:grid-rows-2 pc:gap-x-0 pc:gap-y-0">
            <div className="border-purple-stroke border-b-[1px] border-t-[1px] pc:border-t-0 pc:border-r-[1px]">
                <OneServiceInfo title={getTranslation("BATitle")}>
                    {getTranslation("BAText")}
                </OneServiceInfo>
            </div>
            <div className="border-purple-stroke border-b-[1px] pc:border-r-[1px]">
                <OneServiceInfo title={getTranslation("devTitle")}>
                    {getTranslation("devText")}
                </OneServiceInfo>
            </div>
            <div className="border-purple-stroke border-b-[1px] pc:border-r-[1px]">
                <OneServiceInfo title={getTranslation("designTitle")}>
                    {getTranslation("designText")}
                </OneServiceInfo>
            </div>
            <div className=" border-purple-stroke border-b-[1px] ">
                <OneServiceInfo title={getTranslation("QATitle")}>
                    {getTranslation("QAText")}
                </OneServiceInfo>{" "}
            </div>
            <div className=" border-purple-stroke border-b-[1px] pc:border-b-0 pc:border-r-[1px]">
                <OneServiceInfo title={getTranslation("consultationTitle")}>
                    {getTranslation("consultationText")}
                </OneServiceInfo>
            </div>
            <div className=" border-purple-stroke border-b-[1px] pc:border-b-0 pc:border-r-[1px]">
                <OneServiceInfo title={getTranslation("allServicesTitle")}>
                    {getTranslation("allServicesText")}
                </OneServiceInfo>{" "}
            </div>

            <div className="col-span-2 row-span-1 px-4 py-[65px] flex flex-col items-center">
                <p className="mb-6">{getTranslation("contactUs")}</p>
                {/* TODO: Update button text and styles when design is ready */}
                <Button>Button</Button>
            </div>
        </div>
    );
};
