"use client";
import { useEffect, useState } from "react";
import { useEggs } from "@/src/utils/EggsContext";
import { SomeEgg } from "./SomeEgg";
import { useEasterCounter } from "@/src/utils/EasterCounterContext";

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
                        <div onClick={() => handleClickEgg(egg.id)}>
                            <SomeEgg
                                key={egg.id}
                                x={egg.x}
                                y={egg.y}
                                kindOfEgg={egg.kindOfEgg}
                            />
                        </div>
                    )
            )}
        </>
    );
};
