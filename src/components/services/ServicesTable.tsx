import { Button } from "../shared/Button";
import { ServicesList } from "./ServicesList";
import { useTranslations } from "next-intl";

export const ServicesTable = () => {
    const getTranslation = useTranslations("Services");

    return (
        <ul className="tab:grid tab:grid-cols-2 pc:grid-cols-4 pc:grid-rows-2 pc:gap-x-0 pc:gap-y-0">
            <ServicesList />
            <li className="col-span-2 row-span-1 py-[40px] pc:px-4 pc:py-[65px] flex flex-col items-center">
                <p className="mb-6">{getTranslation("contactUs")}</p>
                {/* TODO: Update button text and styles when design is ready */}
                <Button>Button</Button>
            </li>
        </ul>
    );
};
