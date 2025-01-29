"use client";

import { IconCloseX } from "../../../shared/Icons/IconCloseX";

interface GreetingModalProps {
    onCloseModal: () => void;
    onCloseModalView: () => void;
}
//pass onCloseModalView
export const GreetingModal = ({ onCloseModal }: GreetingModalProps) => {
    return (
        <div className="overflow-hidden h-auto mx-auto mt-[99px] tab:mt-[98px] pc:mt-[83px] desk:mt-[51px]">
            {/* <Decoration /> */}
            {/* <Background /> */}
            <button
                type="button"
                onClick={onCloseModal}
                aria-label="close button"
                className="cursor-pointer flex justify-center items-center absolute top-2 right-4 pc:top-3 pc:right-3 p-3 disabled:text-purple-strokeLight
                         dark:disabled:text-purple-stroke bg-transparent enabled:icon-hover-rounded-purple "
            >
                <IconCloseX className="text-white-100 " />
            </button>
            {/* <Content /> */}
        </div>
    );
};
