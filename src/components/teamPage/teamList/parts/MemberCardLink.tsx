"use client";
import { PropsWithChildren } from "react";

import { Link } from "@/src/i18n/routing";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

interface MemberCardLinkProps {
    id: string;
}

export const MemberCardLink = ({
    id,
    children,
}: PropsWithChildren<MemberCardLinkProps>) => {
    const { setPreviousURL } = usePreviousURL();
    const setBackToPage = () => {
        setPreviousURL(`back`);
    };
    return (
        <Link
            href={`/member/${id}`}
            onClick={setBackToPage}
            className="block mx-auto w-full relative z-5 max-w-[408px] tab:max-w-[350px] pc:min-w-[320px] h-full px-4 tab:px-5 pc:px-4 py-5 isolate 
            border-purple-strokeLight bg-white-200 dark:bg-purple-200 dark:bg-teamCardGradientDark border-[1px] dark:border-purple-stroke
           hover:before:opacity-100 focus:before:opacity-100 active:before:opacity-100
            cursor-pointer before:transition-opacity before:duration-500
            before:absolute before:z-[-1] before:opacity-0 before:inset-0 before:bg-hoverTeamCardGradientLight before:dark:bg-hoverTeamCardGradientDark"
        >
            {children}
        </Link>
    );
};
