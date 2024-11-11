"use client";
import { useLocale } from "next-intl";
import { createContext, ReactNode, useContext, useState } from "react";

import { DEFAULT_SLIDE_ID } from "../constants/defaultSlideId";

interface PreviousURLContextType {
    previousURL: string;
    setPreviousURL: (url: string) => void;
    slideId: number;
    setSlideId: (id: number) => void;
}
const PreviousURLContext = createContext<PreviousURLContextType | undefined>(
    undefined
);
export const PreviousURLProvider = ({ children }: { children: ReactNode }) => {
    const locale = useLocale();
    const [previousURL, setPreviousURL] = useState<string>(`/${locale}#team`);
    const [slideId, setSlideId] = useState<number>(DEFAULT_SLIDE_ID);

    return (
        <PreviousURLContext.Provider
            value={{ previousURL, setPreviousURL, slideId, setSlideId }}
        >
            {children}
        </PreviousURLContext.Provider>
    );
};

export const usePreviousURL = () => {
    const context = useContext(PreviousURLContext);
    if (context === undefined) {
        throw new Error("Something went wrong");
    }
    return context;
};
