"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { PropsWithChildren, useLayoutEffect, useRef } from "react";

interface TriggerAnimationProps {
    aspectRatio: number;

    className?: string;
}
export const TriggerAnimation = ({
    children,

    aspectRatio,
    className = "",
}: PropsWithChildren<TriggerAnimationProps>) => {
    const controlsRef = useRef<AnimationPlaybackControls | null>(null);

    const [scope, animate] = useAnimate();

    useLayoutEffect(() => {
        if (!scope.current) return;

        const scopeHeight = scope.current.offsetWidth / aspectRatio;

        const stopAnimationPercent = Math.floor(
            100 - (scopeHeight / scope.current.offsetHeight) * 100
        );

        const animationStep = Math.floor(stopAnimationPercent / 6);

        const controls = animate(
            scope.current,
            {
                y: [
                    0,
                    `-${animationStep}%`,
                    `-${animationStep * 2}%`,
                    `-${animationStep * 3}%`,
                    `-${animationStep * 4}%`,
                    `-${animationStep * 5}%`,
                    `-${stopAnimationPercent}%`,
                    0,
                ],
            },
            {
                duration: 40,
                ease: "linear",
                repeat: Infinity,
            }
        );
        controls.pause();
        controlsRef.current = controls;

        return () => {
            return controls.stop();
        };
    }, [animate, aspectRatio, scope]);

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
