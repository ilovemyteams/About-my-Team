"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { useTranslations } from "next-intl";

import { JOIN_US_LINK } from "@/src/constants/joinUsLink";

import { Button } from "./Button";

interface JoinUsButtonProps {
    btnSize?: "small" | "big";
    className?: string;
}

export const JoinUsButton = ({
    btnSize = "big",
    className = "",
}: JoinUsButtonProps) => {
    const getTranslation = useTranslations();

    return (
        <a
            href={JOIN_US_LINK}
            onClick={() =>
                sendGTMEvent({
                    event: "join_us_form_click",
                })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="outline-none"
        >
            <Button color="grey" size={btnSize} className={className}>
                {getTranslation("Buttons.joinUs")}
            </Button>
        </a>
    );
};
