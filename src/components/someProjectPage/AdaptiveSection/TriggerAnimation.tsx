"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { PropsWithChildren, useEffect, useRef } from "react";

interface TriggerAnimationProps {
    className?: string;
}
export const TriggerAnimation = ({
    children,
    className = "",
}: PropsWithChildren<TriggerAnimationProps>) => {
    const controlsRef = useRef<AnimationPlaybackControls | null>(null);

    const [scope, animate] = useAnimate();

    useEffect(() => {
        const controls = animate(
            scope.current,
            { y: [0, "-20%", "-40%", "-80%", "-40%", "-20%", 0] },
            {
                duration: 120,
                ease: "linear",
                repeat: Infinity,
            }
        );
        controls.pause();
        controlsRef.current = controls;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <motion.div
            className={className}
            ref={scope}
            onViewportLeave={() => {
                if (controlsRef.current) {
                    controlsRef.current.pause();
                }
            }}
            onViewportEnter={() => {
                if (controlsRef.current) {
                    controlsRef.current.play();
                }
            }}
        >
            {children}
        </motion.div>
    );
};
