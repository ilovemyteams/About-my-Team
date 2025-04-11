import { motion } from "framer-motion";
import { useState } from "react";

import { useEasterCounter } from "@/src/utils/EasterCounterContext";

import { IconEggGreen } from "../icons/IconEggGreen";
import { IconEggMulticolored } from "../icons/IconEggMulticolored";
import { IconEggMulticolored2 } from "../icons/IconEggMulticolored2";
import { IconEggMulticolored3 } from "../icons/IconEggMulticolored3";
import { IconEggOrange } from "../icons/IconEggOrange";

interface SomeEggProps {
    x: number;
    y: number;
    kindOfEgg: number;
    onClick: () => void;
}

const eggIcons = [
    IconEggMulticolored,
    IconEggMulticolored2,
    IconEggMulticolored3,
    IconEggGreen,
    IconEggOrange,
];

export const SomeEgg = ({ x, y, kindOfEgg, onClick }: SomeEggProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const EggIcon = eggIcons[kindOfEgg - 1];

    const { incrementEggs } = useEasterCounter();

    const handleClick = () => {
        incrementEggs();
        setIsClicked(true);
        setTimeout(() => {
            onClick(); // викликаємо функцію кліку
        }, 500);
    };

    return (
        <motion.div
            className={`absolute z-[11] w-[60px] h-[60px] tab:w-[90px] tab:h-[90px] flex justify-center items-center ${
                isClicked ? "pointer-events-none" : ""
            }`}
            style={{ top: `${y}%`, left: `${x}%` }}
            onClick={handleClick}
            initial={{ scale: 1, opacity: 1 }}
            animate={
                isClicked
                    ? { scale: 0, opacity: 0, rotate: 720 }
                    : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <EggIcon className="w-10 tab:w-12 pc:w-[54px] h-auto cursor-pointer" />
        </motion.div>
    );
};
