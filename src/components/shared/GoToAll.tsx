"use client";
import React from "react";

import { useRouter } from "@/src/navigation";

interface GoToAllProps {
    title: string;
    href: string;
}

export const GoToAll = ({ href, title }: GoToAllProps) => {
    const router = useRouter();
    return (
        <div className="flex justify-center tab:justify-between">
            <div className="hidden tab:block flex-grow mr-[60px] border-b border-purple-strokeLight dark:border-purple-stroke"></div>
            <button
                className="h-12 flex items-end"
                onClick={() => router.push(href)}
            >
                <p
                    className="text-lg font-caviar first-letter:uppercase underline underline-offset-[5px]  text-center
            dark:pc:hover:text-red pc:hover:text-redLight
                    dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                >
                    {title}
                </p>
            </button>
        </div>
    );
};
