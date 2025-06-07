"use client";
import { AskUsModalBase } from "../AskUs/AskUsModalBase";
import { AskUsButton } from "./AskUsButton";

export const CtaAskUsModal = () => {
    return <AskUsModalBase triggerComponent={AskUsButton} />;
};
