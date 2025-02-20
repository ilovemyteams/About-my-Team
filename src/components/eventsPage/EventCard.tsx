import { getLocale } from "next-intl/server";

import { EventData } from "@/src/mockedData/pastEventsData";
import { LocaleType } from "@/types/LocaleType";

import { NoImageHeart } from "../shared/NoImageHeart";

interface EventCardProps {
    content: EventData;
}

export const EventCard = async ({ content }: EventCardProps) => {
    const locale = await getLocale();
    const { title, description, date } = content[locale as LocaleType];
    const componentPartial = content.event.replace(
        content.event[0],
        content.event[0].toUpperCase()
    );
    const Thumbnail = await import(
        `@/src/components/eventsPage/thumbnails/Thumbnail${componentPartial}`
    ).then(
        result => {
            return result.default;
        },
        //if error
        () => {
            return FallbackImage;
        }
    );

    return (
        <div className="flex flex-col tab:flex-row py-4 gap-3 tab:gap-3 border-b-1 border-purple-strokeLight dark:border-purple-stroke mt-3 tab:mt-2.5">
            <div
                className={`w-full tab:w-[300px] desk:w-[375px] shrink-0 grow-0 relative overflow-hidden`}
            >
                <Thumbnail />
            </div>

            <div className="flex flex-col tab:pl-3 pc:px-3 desk:pl-4 justify-between">
                <div>
                    <h2 className="pc:focus:text-redLight dark:pc:focus:text-red focus:outline-none pc:transition pc:ease-out pc:duration-300 font-caviar text-purple-200 dark:text-white-200 text-lg tab:text-xlb desk:text-2xlb line-clamp-2 mb-3">
                        {title}
                    </h2>
                    {description.map((item, index) => {
                        return (
                            <p
                                key={index}
                                className="text-sm tab:text-base text-greyLight dark:text-grey mb-2.5"
                            >
                                {item}
                            </p>
                        );
                    })}
                </div>
                <p className="text-purple-100 dark:text-purple-50">{date}</p>
            </div>
        </div>
    );
};

function FallbackImage() {
    return (
        <div className="w-full max-w-[280px] mx-auto aspect-[280/200] tab:aspect-[300/200] flex">
            <NoImageHeart className="m-auto h-[80%]" />
        </div>
    );
}
