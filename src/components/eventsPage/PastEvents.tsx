import { useTranslations } from "next-intl";

import { pastEventsData } from "@/src/mockedData/pastEventsData";

import { PageSection } from "../shared/PageSection";
import { EventCard } from "./EventCard";

export const PastEvents = () => {
    const getTranslation = useTranslations();
    return (
        <PageSection className="pb-15 tab:pb-10 pc:pb-[40px] desk:pb-12">
            <div className="mb-[21px] tab:mb-12 pc:mb-[56px]">
                <h1 className="font-caviar text-purple-200 dark:text-grey text-3xl tab:text-4xl pc:text-6xl desk:text-7xl">
                    {getTranslation("PastEvents.pageBigTitle")}
                </h1>
            </div>
            {pastEventsData.map(item => {
                return <EventCard key={item.event} content={item} />;
            })}
        </PageSection>
    );
};
