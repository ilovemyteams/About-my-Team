"use client";
import { useEffect, useState } from "react";

import { SomeEgg } from "./SomeEgg";

interface Egg {
    id: number;
    x: number;
    y: number;
    kindOfEgg: number;
}

interface EggContainerProps {
    count: number; // Кількість яєць
}

const getRandomPosition = (
    existingEggs: Egg[],
    maxTries = 10
): { x: number; y: number } => {
    let x: number;
    let y: number;
    let isOverlapping: boolean;
    let tries = 0;

    do {
        x = Math.random() * 90;
        y = Math.random() * 90;
        isOverlapping = existingEggs.some(
            egg => Math.abs(egg.x - x) < 10 && Math.abs(egg.y - y) < 10
        );
        tries++;
    } while (isOverlapping && tries < maxTries);

    return { x, y };
};
const getRandomEggType = (): number => Math.floor(Math.random() * 5) + 1;

export const EggContainer = ({ count }: EggContainerProps) => {
    const [eggs, setEggs] = useState<Egg[]>([]);

    useEffect(() => {
        const newEggs: Egg[] = [];
        for (let i = 0; i < count; i++) {
            newEggs.push({
                id: i,
                ...getRandomPosition(newEggs),
                kindOfEgg: getRandomEggType(),
            });
        }
        setEggs(newEggs);
    }, [count]);

    return (
        <>
            {eggs.map(egg => (
                <SomeEgg
                    key={egg.id}
                    x={egg.x}
                    y={egg.y}
                    kindOfEgg={egg.kindOfEgg}
                />
            ))}
        </>
    );
};
