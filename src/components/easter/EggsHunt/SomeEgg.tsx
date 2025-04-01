import { IconEggGreen } from "../icons/IconEggGreen";
import { IconEggMulticolored } from "../icons/IconEggMulticolored";
import { IconEggMulticolored2 } from "../icons/IconEggMulticolored2";
import { IconEggMulticolored3 } from "../icons/IconEggMulticolored3";
import { IconEggOrange } from "../icons/IconEggOrange";

interface SomeEggProps {
    x: number;
    y: number;
    kindOfEgg: number;
}
const eggIcons = [
    IconEggMulticolored,
    IconEggMulticolored2,
    IconEggMulticolored3,
    IconEggGreen,
    IconEggOrange,
];

export const SomeEgg = ({ x, y, kindOfEgg }: SomeEggProps) => {
    const EggIcon = eggIcons[kindOfEgg - 1];
    return (
        <div className="absolute z-10" style={{ top: `${y}%`, left: `${x}%` }}>
            <EggIcon className="w-10 tab:w-12 pc:w-[54px] h-auto absolute" />
        </div>
    );
};
