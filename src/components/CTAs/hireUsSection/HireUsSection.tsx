import { useTranslations } from "next-intl";

import { SectionCTA } from "../../shared/SectionCTA";
import { TitleCTAWrapper } from "../../shared/TitleCTAWrapper";
import { WriteUs } from "../../shared/WriteUs/WriteUs";

export const HireUsSection = ({
    data,
}: {
    data:
        | {
              title: string | null;
              description: string | null;
          }
        | null
        | undefined;
}) => {
    const getTranslation = useTranslations("HireUs");

    const mail = data?.description
        ? data.description.toString()
        : getTranslation("email");

    return (
        <SectionCTA>
            <TitleCTAWrapper className="pc:w-[70%]">
                {data?.title ? data.title.toString() : getTranslation("title")}
            </TitleCTAWrapper>
            <div className="flex flex-col gap-y-8 tab:flex-row pc:gap-0 justify-between items-center mt-6 pc:mt-[100px]">
                <div className="text-base deskxl:text-2xl text-purple-200 dark:text-grey">
                    <a
                        href={`mailto:${mail}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="outline-none dark:pc:hover:text-red pc:hover:text-redLight dark:pc:focus:text-red pc:focus:text-redLight 
                        dark:active:text-red active:text-redLight transition-color ease-out duration-[300ms]"
                    >
                        {mail}
                    </a>
                </div>
                <WriteUs />
            </div>
        </SectionCTA>
    );
};
