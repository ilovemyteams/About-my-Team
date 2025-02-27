"use client";

import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { Fragment } from "react";

import { ReturnButton } from "@/src/components/underConstruction/ReturnButton";

interface CountdownProps {
    targetDate: string; //e.g. "2025-02-14T00:00:00" or "2025-02-14T00:00:00+02:00" for Kyiv
    intlTitle?: string; // e.g. "Events.title"
}

export const Countdown = ({
    targetDate,
    intlTitle = "EventsPage.title",
}: CountdownProps) => {
    const getTranslation = useTranslations();
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    const calculateTimeLeft = useCallback(() => {
        const parsedDate = new Date(targetDate);
        const difference = parsedDate.getTime() - new Date().getTime();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }, [targetDate]);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    return (
        <div className="relative bg-construction z-10 before:content-[''] before:absolute before:inset-0 before:bg-underConstructionGradientLight before:dark:bg-underConstructionGradient before:z-[-5] mb-[80px] pc:mb-[100px]">
            <div className="flex flex-col items-center container py-20 tab:py-[100px] pc:pt-[195px] pc:pb-[118px] text-purple-200 dark:text-grey text-center ">
                <h1 className="mb-4 pc:mb-[34px] text-3xl tab:text-4xl pc:text-6xlt font-bold font-caviar text-purple-200 dark:text-white-200">
                    {getTranslation(intlTitle)}
                </h1>
                <div className="flex flex-row  px-4 tab:px-10 py-4 mb-7 pc:mb-[58px] border border-purple-200 dark:border-white-200">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <Fragment key={unit}>
                            <div className="flex flex-col items-center">
                                <p className="text-5xl tab:text-7xl pc:text-8xl font-bold font-caviar text-purple-200 dark:text-white-200">
                                    {value < 10 && unit !== "days"
                                        ? `0${value}`
                                        : value}
                                </p>
                                <p className="capitalize text-sm tab:text-base pc:text-xl text-greyLight dark:text-grey">
                                    {getTranslation(`EventsPage.${unit}`, {
                                        [unit]: value,
                                    })}
                                </p>
                            </div>
                            <span className="mx-2 pc:mx-5 text-5xl tab:text-7xl pc:text-8xl font-bold font-caviar text-purple-200 dark:text-white-200 last:hidden">
                                :
                            </span>
                        </Fragment>
                    ))}
                </div>
                <p className="mb-4 pc:mb-8 text-sm pc:text-base text-greyLight dark:text-grey">
                    {getTranslation("UnderConstruction.text")}
                </p>
                <ReturnButton />
            </div>
        </div>
    );
};
