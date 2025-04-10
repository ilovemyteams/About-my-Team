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

export const EggContainer = ({ count }: EggContainerProps) => {
    const [eggs, setEggs] = useState<Egg[]>([]);
    const [shouldRender, setShouldRender] = useState(false);

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

    useEffect(() => {
        const checkParticipation = async () => {
            const participated =
                localStorage.getItem("easter_participated") === "true";

            if (participated) {
                setShouldRender(false);
            } else {
                setShouldRender(true);
            }
        };

        checkParticipation();
    }, []);
    if (!shouldRender) return null;

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
