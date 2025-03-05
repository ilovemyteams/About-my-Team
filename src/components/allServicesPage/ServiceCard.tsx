import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/src/i18n/routing";
import { ServiceType } from "@/src/mockedData/servicesData";
import { defineServiceIcon } from "@/src/utils/defineServiceIcon";
import { LocaleType } from "@/types/LocaleType";

interface ServiceCardProps {
    service: ServiceType;
    servicesCount: number;
}

export const ServiceCard = ({ service, servicesCount }: ServiceCardProps) => {
    const locale = useLocale();
    const getTranslate = useTranslations("ServicesPage");
    const { icon, slug } = service;
    const { name, shortDescription } = service[locale as LocaleType];

    const lastChildTabStyling =
        servicesCount % 2 === 1
            ? "last:tab:col-end-[-2] last:pc:col-end-auto last:border-t-[1px] last:mt-[-1px]"
            : "";

    const lastLinePcStyling =
        servicesCount % 3 === 2
            ? `pc:[&:nth-last-child(2)]:col-end-[-4] pc:last:col-end-[-2] `
            : servicesCount % 3 === 1
              ? "pc:last:col-end-[-3] "
              : "";

    const Icon = defineServiceIcon(icon);

    return (
        <div
            className={`relative py-6 tab:px-4 flex flex-col gap-4 pc:gap-10 desk:gap-[60px] border-b-[1px] pc:border-r-[1px]
                 border-purple-strokeLight dark:border-purple-stroke tab:col-span-2 
                
                 first:border-t-[1px] pc:first:border-t-[0px] tab:[&:nth-child(2)]:border-t-[1px] pc:[&:nth-child(2)]:border-t-[0px]
                 pc:first:border-l-[1px] pc:[&:nth-child(n+3)]:border-l-[1px] pc:first:ml-[-1px] pc:[&:nth-child(n+3)]:ml-[-1px] ${lastChildTabStyling} ${lastLinePcStyling}`}
        >
            <div className="flex gap-4 pc:gap-6 items-center">
                <Icon className="text-purple-130 dark:text-purple-100 w-8 h-8 pc:w-10 pc:h-10" />
                <Link
                    href={`/services/${slug}`}
                    className="text-purple-200 dark:text-white-200 tab:hover:text-redLight tab:dark:hover:text-red  tab:focus:text-redLight dark:tab:focus:text-red focus:outline-none  dark:active:text-red active:text-redLight"
                >
                    <h2 className=" lowercase first-letter:uppercase font-caviar text-xlb">
                        {name}
                    </h2>
                </Link>
            </div>
            <p>{shortDescription}</p>
            <div className="mt-auto">
                <Link
                    aria-label={getTranslate("details")}
                    href={`/services/${slug}`}
                    className=" peer absolute cursor-pointer top-0 left-0 tab:w-full tab:h-full before:absolute before:top-0 before:left-0 before:tab:bottom-0 
                    before:tab:right-0 before:z-[-1] before:bg-serviceCardGradientLight dark:before:bg-serviceCardGradient before:bg-size-200 before:bg-pos-100 
                    before:hover:bg-pos-0 next-hover:bg-red before:transition-all before:duration-500
                    before: peer-[:last-of-type_&]:peer-hover:bg-red"
                ></Link>
                <Link
                    href={`/services/${slug}`}
                    className=" pc:hidden text-base text-purple-130 dark:text-purple-100 tab:hover:text-redLight dark:tab:hover:text-red
                    tab:focus:text-redLight dark:tab:focus:text-red focus:outline-none  dark:active:text-red active:text-redLight transition 
                    ease-out duration-300 relative tab:z-[-1] before:absolute before:bottom-[1px] before:w-full before:border-b before:border-current
                    tab:peer-hover:text-redLight dark:tab:peer-hover:text-red tab:peer-focus:text-redLight dark:tab:peer-focus:text-red 
                    dark:peer-active:text-red peer-active:text-redLight"
                >
                    {getTranslate("details")}
                </Link>
            </div>
        </div>
    );
};
