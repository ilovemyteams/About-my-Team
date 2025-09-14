"use client";
import { MouseEvent, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { Link, useRouter } from "@/src/i18n/routing";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

interface MemberCardLinkProps {
    id: string;
    isActive: boolean;
}

export const MemberCardLink = ({
    id,
    isActive,
    children,
}: PropsWithChildren<MemberCardLinkProps>) => {
    const router = useRouter();
    const { setPreviousURL } = usePreviousURL();

    const setBackToPage = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        if (isActive) {
            router.push(`/member/${id}`);
            setPreviousURL(`back`);
        }
    };
    return (
        <Link
            href={`/member/${id}`}
            onClick={setBackToPage}
            className={twMerge(
                "block mx-auto w-full relative bg-white-200 dark:bg-purple-200 z-5 max-w-[408px] tab:max-w-[350px] pc:min-w-[320px] h-full px-4 tab:px-5 pc:px-4 py-5 isolate border-purple-strokeLight  border-[1px] dark:border-purple-stroke  ",
                isActive
                    ? " hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100 cursor-pointer before:transition-opacity before:duration-500 before:absolute before:z-[-1] before:opacity-0 before:inset-0 before:bg-hoverTeamCardGradientLight before:dark:bg-hoverTeamCardGradientDark"
                    : "cursor-default bg-cardDisabledLight dark:bg-cardDisabledDark"
            )}
        >
            {children}
        </Link>
    );
};
