"use client";
import { useEffect, useState } from "react";

import { useEasterCounter } from "@/src/utils/EasterCounterContext";
import { useEggs } from "@/src/utils/EggsContext";

import { SomeEgg } from "./SomeEgg";

interface EggContainerProps {
    count: number;
}

export const EggContainer = ({ count }: EggContainerProps) => {
    const [shouldRender, setShouldRender] = useState(false);
    const { eggs, generateEggs, clickEgg } = useEggs();
    const { totalFoundEggs } = useEasterCounter();

    useEffect(() => {
        const participated =
            localStorage.getItem("easter_participated") === "true";
        setShouldRender(!participated);
    }, []);

    useEffect(() => {
        if (totalFoundEggs === 0) {
            generateEggs(count, true);
        }
    }, [totalFoundEggs]);

    const handleClickEgg = (id: number) => {
        clickEgg(id);
    };

    if (!shouldRender) return null;

    return (
        <>
            {eggs.map(
                egg =>
                    !egg.isClicked && (
                        <SomeEgg
                            x={egg.x}
                            y={egg.y}
                            kindOfEgg={egg.kindOfEgg}
                            key={egg.id}
                            onClick={() => handleClickEgg(egg.id)}
                        />
                    )
            )}
        </>
    );
};
