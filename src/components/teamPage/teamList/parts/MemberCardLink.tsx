"use client";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { Link } from "@/src/i18n/routing";

interface MemberCardLinkProps {
    id: string;
    isActive: boolean;
}

export const MemberCardLink = ({
    id,
    isActive,
    children,
}: PropsWithChildren<MemberCardLinkProps>) => {
    return (
        <Link
            href={`/member/${id}`}
            className={twMerge(
                "block mx-auto w-full relative bg-white-200 dark:bg-purple-200 z-5 max-w-[408px] tab:max-w-[350px] pc:min-w-[320px] h-full px-4 tab:px-5 pc:px-4 py-5 isolate border-purple-strokeLight  border-[1px] dark:border-purple-stroke  ",
                isActive
                    ? " hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100 cursor-pointer before:transition-opacity before:duration-500 before:absolute before:z-[-1] before:opacity-0 before:inset-0 before:bg-hoverTeamCardGradientLight before:dark:bg-hoverTeamCardGradientDark"
                    : "cursor-default bg-cardDisabledLight dark:bg-cardDisabledDark pointer-events-none"
            )}
        >
            {children}
        </Link>
    );
};
