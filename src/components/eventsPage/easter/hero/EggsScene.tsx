import { IconBigEgg } from "../icons/IconBigEgg";
import { IconSmallEgg } from "../icons/IconSmallEgg";
import { IconWillows } from "../icons/IconWillows";

export const EggsScene = () => {
    return (
        <div className="relative w-full h-full inline-flex items-end justify-center pc:ml-[9%]">
            <IconBigEgg className="h-full w-auto max-w-[80%] max-h-auto" />
            <IconSmallEgg className="h-[55%] w-auto max-w-[35%] max-h-auto ml-[-15px] tab:ml-[-25px]" />

            <IconWillows className="absolute bottom-0 left-0 w-[130%] h-auto translate-x-[-13%] translate-y-[20%]" />
        </div>
    );
};
