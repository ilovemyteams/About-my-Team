import { useEffect, useRef, useState } from "react";

interface UseVisibleAvatarsArgs {
    avatarSize: number;
    overlap: number;
    minVisible?: number;
}

export const useVisibleAvatars = ({
    avatarSize,
    overlap,
    minVisible = 1,
}: UseVisibleAvatarsArgs) => {
    const ref = useRef<HTMLUListElement | null>(null);
    const [visibleCount, setVisibleCount] = useState(minVisible);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver(([entry]) => {
            const width = entry.contentRect.width;

            const step = avatarSize - overlap;
            const count = Math.max(
                minVisible,
                Math.floor((width + overlap) / step)
            );

            setVisibleCount(count);
        });

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [avatarSize, overlap, minVisible]);

    return { ref, visibleCount };
};
