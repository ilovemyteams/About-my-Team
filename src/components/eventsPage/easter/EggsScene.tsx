import { useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

import { IconBigEgg } from "./IconBigEgg";
import { IconSmallEgg } from "./IconSmallEgg";
import { IconWillows } from "./IconWillows";

interface EggsSceneProps {
    startAnimation: boolean;
    onEndAnimation: () => void;
    onBrokenEgg: () => void;
    isEggBroken: boolean;
}

export const EggsScene = ({
    onEndAnimation,
    startAnimation,
    isEggBroken,
    onBrokenEgg,
}: EggsSceneProps) => {
    const smallEggRef = useRef<SVGSVGElement>(null);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (startAnimation) {
            startEggsAnimation();
            onEndAnimation();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [startAnimation]);

    const startEggsAnimation = async () => {
        if (!smallEggRef.current) {
            return;
        }

        const smallEgg = smallEggRef.current;

        const width = Math.floor(smallEgg.scrollWidth * 0.2);
        await animate(
            smallEgg,
            { y: "-80%", x: `${width}px` },
            { duration: 1 }
        );

        await animate(
            smallEgg,
            { rotate: "-10deg" },
            { duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }
        );

        setTimeout(onBrokenEgg, 500);
        await animate(
            smallEgg,
            {
                x: `-${width}px`,
                y: ["-85%", "-79%"],
            },
            {
                type: "spring",
                stiffness: 600,
                damping: 15,
                velocity: 2,
                duration: 1,
            }
        );

        await animate(
            smallEgg,
            { y: "-80%", x: `${width}px` },
            { duration: 0.5 }
        );

        await animate(smallEgg, { y: 0, x: 0, rotate: 0 }, { duration: 1 });
    };

    return (
        <div
            className="relative z-[1] w-full h-full inline-flex items-end justify-center pc:ml-[9%]"
            ref={scope}
        >
            <IconBigEgg
                className="h-full w-auto max-w-[80%] max-h-auto"
                isAnimated={isEggBroken}
            />

            <IconSmallEgg
                className="h-[55%] w-auto max-w-[35%] max-h-auto ml-[-15px] tab:ml-[-25px] dark:text-white-100 text-purple-400"
                ref={smallEggRef}
            />

            <IconWillows className="absolute bottom-0 left-0 w-[130%] h-auto translate-x-[-13%] translate-y-[20%]" />
        </div>
    );
};
