import { useTranslations } from "next-intl";

import { Link } from "@/src/navigation";

import { FlyingEnvelope } from "../eventsPage/valentines/shared/FlyingEnvelope";
import { WriteUs } from "../shared/WriteUs/WriteUs";

export const HeroInfo = () => {
    const getTranslation = useTranslations("Hero");

    return (
        <div className="flex flex-col items-center pc:block pc:w-[35vw] desk:max-w-[535px] ">
            <h1
                className="text-xl mt-6 tab:mt-0 pc:static
                           tab:absolute tab:left-0 tab:top-0 tab:min-w-[381px] tab:max-w-[49vw] desk:text-2xl text-purple-200 dark:text-grey desk:mb-[108px]"
            >
                {getTranslation.rich("heroInfoText", {
                    br: () => <br />,
                })}
            </h1>
            <div className=" relative flex flex-col gap-4 pc:gap-6 mt-6 tab:mt-[196px] pc:mt-[120px]">
                <Link
                    href="/events"
                    className="absolute -top-[2.5rem] tab:top-20 pc:-top-20 desk:-top-12 right-0 tab:right-16 pc:right-12 desk:right-4 w-20 tab:w-24 desk:w-28 rotate-[-4deg] tab:rotate-[35deg] pc:rotate-[30deg]"
                >
                    <FlyingEnvelope envelope="white" />
                </Link>
                <WriteUs />
            </div>
        </div>
    );
};
