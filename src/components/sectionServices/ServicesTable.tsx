import { Button } from "../shared/Button";
import { OneServiceInfo } from "./OneServiceInfo";
import { useTranslations } from "next-intl";

export const ServicesTable = () => {
    const getTranslation = useTranslations("Services");

    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-x-0 gap-y-0">
            <div className="row-span-1 border border-purple-stroke border-t-0 border-l-0">
                <OneServiceInfo title={getTranslation("BATitle")}>
                    {getTranslation("BAText")}
                </OneServiceInfo>
            </div>
            <div className="row-span-1 border border-purple-stroke border-t-0 border-l-0">
                <OneServiceInfo title={getTranslation("devTitle")}>
                    {getTranslation("devText")}
                </OneServiceInfo>
            </div>
            <div className="row-span-1 border border-purple-stroke border-t-0 border-l-0">
                <OneServiceInfo title={getTranslation("designTitle")}>
                    {getTranslation("designText")}
                </OneServiceInfo>
            </div>
            <div className=" row-span-1 border-purple-stroke border-b-[1px] ">
                <OneServiceInfo title={getTranslation("QATitle")}>
                    {getTranslation("QAText")}
                </OneServiceInfo>{" "}
            </div>
            <div className="row-span-1  border-purple-stroke border-r-[1px]">
                <OneServiceInfo title={getTranslation("consultationTitle")}>
                    {getTranslation("consultationText")}
                </OneServiceInfo>
            </div>
            <div className=" row-span-1  border-purple-stroke border-r-[1px]">
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
