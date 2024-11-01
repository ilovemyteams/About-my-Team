"use client";
import { AskUsModalBase } from "../../shared/AskUs/AskUsModalBase";
import { AskUsButton } from "./AskUsButton";

export const CtaAskUsModal = () => {
    return <AskUsModalBase triggerComponent={AskUsButton} />;
};
