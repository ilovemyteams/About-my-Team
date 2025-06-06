"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import Cookies from "js-cookie";

export const ConditionalGTM = () => {
    const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

    const isAccepted = Cookies.get("isAcceptedCookies") === "true";

    if (!isAccepted) return null;

    return <GoogleTagManager gtmId={GTM_ID} />;
};
