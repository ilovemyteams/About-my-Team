import { useState, useCallback } from "react";

export function useElementWidth<T extends HTMLElement>() {
    const [elementWidth, setelementWidth] = useState<number>(0);

    const elementRef = useCallback((node: T) => {
        if (!node) return;

        const resizeObserver = new ResizeObserver(() => {
            setelementWidth(node ? node.offsetWidth : 0);
        });

        resizeObserver.observe(node);
    }, []);

    return { elementRef, elementWidth };
}
