"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { PropsWithChildren } from "react";

import { JOIN_US_LINK } from "@/src/constants/joinUsLink";

export const JoinUsLink = ({ children }: PropsWithChildren) => {
    return (
        <a
            href={JOIN_US_LINK}
            onClick={() =>
                sendGTMEvent({
                    event: "join_us_member_page",
                })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0"
        >
            {children}
        </a>
    );
};
