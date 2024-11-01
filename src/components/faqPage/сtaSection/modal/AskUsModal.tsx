"use client";

import { AskUsModalBase } from "@/src/components/shared/AskUs/AskUsModalBase";

import { AskUsBtn } from "./AskUsBtn";

export const AskUsModal = () => {
    return <AskUsModalBase triggerComponent={AskUsBtn} />;
};
