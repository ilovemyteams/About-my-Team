"use client";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

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
    const searchParams = useSearchParams();

    useEffect(() => {
        const slideIdFromParams = searchParams.get("slideId");
        if (slideIdFromParams && Number(slideIdFromParams) !== slideId) {
            setSlideId(Number(slideIdFromParams));
        }
    }, [searchParams, slideId]);

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
