"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface PreviousURLContextType {
    previousURL: string;
    setPreviousURL: (url: string) => void;
}
const PreviousURLContext = createContext<PreviousURLContextType | undefined>(
    undefined
);
export const PreviousURLProvider = ({ children }: { children: ReactNode }) => {
    const [previousURL, setPreviousURL] = useState<string>("");

    return (
        <PreviousURLContext.Provider value={{ previousURL, setPreviousURL }}>
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
