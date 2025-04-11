"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export interface Egg {
    id: number;
    x: number;
    y: number;
    kindOfEgg: number;
    isClicked: boolean;
}

interface EggsContextType {
    eggs: Egg[];
    generateEggs: (count: number, reset?: boolean) => void;
    clickEgg: (id: number) => void;
}

const EggsContext = createContext<EggsContextType | undefined>(undefined);

export const EggsProvider = ({ children }: { children: ReactNode }) => {
    const [eggs, setEggs] = useState<Egg[]>([]);

    const getRandomPosition = (
        existingEggs: Egg[],
        maxTries = 10
    ): { x: number; y: number } => {
        let x: number;
        let y: number;
        let isOverlapping: boolean;
        let tries = 0;

        do {
            x = Math.random() * 80;
            y = Math.random() * 80;
            isOverlapping = existingEggs.some(
                egg => Math.abs(egg.x - x) < 10 && Math.abs(egg.y - y) < 10
            );
            tries++;
        } while (isOverlapping && tries < maxTries);

        return { x, y };
    };

    const getRandomEggType = (): number => Math.floor(Math.random() * 5) + 1;

    const generateEggs = (count: number, reset: boolean = false) => {
        if (eggs.length > 0 && !reset) return;

        const newEggs: Egg[] = [];
        for (let i = 0; i < count; i++) {
            newEggs.push({
                id: i,
                ...getRandomPosition(newEggs),
                kindOfEgg: getRandomEggType(),
                isClicked: false,
            });
        }
        setEggs(newEggs);
    };

    const clickEgg = (id: number) => {
        setEggs(prevEggs =>
            prevEggs.map(egg =>
                egg.id === id ? { ...egg, isClicked: true } : egg
            )
        );
    };

    return (
        <EggsContext.Provider value={{ eggs, generateEggs, clickEgg }}>
            {children}
        </EggsContext.Provider>
    );
};

export const useEggs = () => {
    const context = useContext(EggsContext);
    if (context === undefined) {
        throw new Error("useEggs must be used within an EggsProvider");
    }
    return context;
};
