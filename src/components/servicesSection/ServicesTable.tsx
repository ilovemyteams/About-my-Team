"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "../shared/Button";

// import { Table } from "../shared/Table/Table";
// import { TableItemsList } from "../shared/Table/TableItemsList";

export const ServicesTable = () => {
    const getTranslation = useTranslations();

    // const serviceItems = [
    //     {
    //         title: getTranslation("Services.BATitle"),
    //         text: getTranslation("Services.BAText"),
    //     },
    //     {
    //         title: getTranslation("Services.designTitle"),
    //         text: getTranslation("Services.designText"),
    //     },
    //     {
    //         title: getTranslation("Services.devTitle"),
    //         text: getTranslation("Services.devText"),
    //     },
    //     {
    //         title: getTranslation("Services.QATitle"),
    //         text: getTranslation("Services.QAText"),
    //     },
    //     {
    //         title: getTranslation("Services.supportTitle"),
    //         text: getTranslation("Services.supportText"),
    //     },
    //     {
    //         title: getTranslation("Services.allServicesTitle"),
    //         text: getTranslation("Services.allServicesText"),
    //     },
    // ];
    const locale = useLocale();
    const router = useRouter();
    const handleButtonClick = () => {
        router.push(`/${locale}/services`);
    };

    return (
        <div className="flex flex-col tab:flex-row gap-6 pc:gap-[80px]">
            <Image
                src={
                    "https://drive.google.com/uc?export=view&id=1aBLtZOAvs5TGOZVeOXuKQPBCFx8kur4x"
                }
                width={500}
                height={334}
                alt="services"
                className="w-full tab:w-[40%] h-auto"
            />
            <div className="text-center tab:text-right">
                <p className="w-[80%] mx-auto tab:mr-0  mb-6 tab:mb-10 tab:text-base pc:text-xl line-clamp-5 break-words">
                    Ми пропонуємо широкий спектр рішень для розвитку вашого
                    бізнесу, включаючи дизайн, веб-розробку та тестування.
                </p>
                <Button onClick={handleButtonClick}>
                    {getTranslation("Buttons.learnMore")}
                </Button>
            </div>
        </div>

        // <Table>
        //     {/* <TableItemsList
        //         items={serviceItems}
        //         sectionClassName="pc:[&:nth-child(5)]:border-l-[1px]"
        //     /> */}
        //     <li className="col-span-2 row-span-1 mt-[40px] tab:mt-[56px] pc:px-4 pc:mt-[120px] flex flex-col items-center">
        //         <Button onClick={handleButtonClick}>
        //             {getTranslation("Buttons.learnMore")}
        //         </Button>
        //     </li>
        // </Table>
    );
};
