"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface EasterCounterContextType {
    totalFoundEggs: number;
    incrementEggs: () => void;
}

const EasterCounterContext = createContext<
    EasterCounterContextType | undefined
>(undefined);

export const EasterCounterProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [totalFoundEggs, setTotalFoundEggs] = useState<number>(0);

    const incrementEggs = () => {
        setTotalFoundEggs(prev => prev + 1);
    };

    return (
        <EasterCounterContext.Provider
            value={{ totalFoundEggs, incrementEggs }}
        >
            {children}
        </EasterCounterContext.Provider>
    );
};

// Кастомний хук для використання контексту
export const useEasterCounter = () => {
    const context = useContext(EasterCounterContext);
    if (context === undefined) {
        throw new Error(
            "useEasterCounter must be used within an EasterCounterProvider"
        );
    }
    return context;
};
