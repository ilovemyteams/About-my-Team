import { RefObject } from "react";

import { CupidArrowIcon } from "../icons/CupidArrowIcon";
import { CupidIcon } from "../icons/CupidIcon";

interface CupidProps {
    cupidRef: RefObject<HTMLDivElement>;
    arrowRef: RefObject<HTMLDivElement>;
    cupidLineRef: RefObject<HTMLDivElement>;
}

export const Cupid = ({ arrowRef, cupidRef, cupidLineRef }: CupidProps) => {
    return (
        <>
            <div
                aria-label="line for cupid"
                ref={cupidLineRef}
                className="absolute top-0 pc:right-[306px] pc:h-[148px] pc:w-[1px]  bg-textHighlight dark:bg-white-100 
                    desk:h-[270px] desk:right-[465px] origin-top "
            ></div>
            <div
                ref={cupidRef}
                className="absolute left-[50px] top-[10dvh] opacity-0 scale-x-[-1] w-[77px] rotate-[-10deg]
                    tab:left-[120px] tab:top-[150px] tab:w-[135px]  pc:opacity-100
                    pc:rotate-0 pc:scale-x-[unset] pc:w-[105px] pc:left-[unset] pc:top-[124px] 
                    pc:right-[253px] desk:w-[164px] desk:top-[200px] desk:right-[380px]"
            >
                <CupidIcon className="w-full h-auto" />
                <div
                    className="absolute w-full h-auto left-[8%] bottom-[11%] z-[5] scale-[20%] opacity-0 translate-x-[-42%] translate-y-[40%]"
                    ref={arrowRef}
                >
                    <CupidArrowIcon className="w-full h-auto" />
                </div>
            </div>
        </>
    );
};
