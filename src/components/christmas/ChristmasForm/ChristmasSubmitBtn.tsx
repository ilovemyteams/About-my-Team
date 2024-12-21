import React from "react";

import { IconLoader } from "../../shared/Icons/IconLoader";

interface SubmitButtonProps {
    title: string;
    isActiveLoader: boolean;
    isDisabled: boolean;
}

export const ChristmasSubmitBtn = ({
    title,
    isActiveLoader,
    isDisabled,
}: SubmitButtonProps) => {
    return (
        <div className="relative">
            <button
                aria-label="contact button"
                type="submit"
                disabled={isDisabled}
                className="group relative w-[240px] min-h-[48px] h-[48px] tab:w-[270px] tab:h-[56px] font-caviar text-xlb tab:text-2xl border-solid border-y-[1px]
            pc:hover:after:transition-opacity pc:hover:after:duration-200 pc:hover:after:ease-out pc:hover:before:transition-opacity pc:hover:before:duration-200 pc:hover:before:ease-out after:content-[''] after:absolute after:bottom-[2px] 
             after:left-0 after:h-[0.8px] after:w-full after:opacity-0 before:content-[''] before:absolute before:bottom-[5px] before:left-0 before:h-[0.8px] before:w-full
             before:opacity-0 enabled:pc:hover:after:opacity-100 enabled:pc:hover:before:opacity-100 pc:hover:before:delay-[400ms] pc:focus:before:opacity-100 pc:focus:after:opacity-0 focus:outline-none focus-within:outline-none
             enabled:active:before:opacity-100 disabled:border-disabledLight disabled:text-disabledLight border-redLight text-redLight"
            >
                <span className="inline-block transform enabled:pc:group-hover:translate-y-[-12%] enabled:pc:group-focus:translate-y-[0%] transition duration-[600ms] ease-out">
                    {title.toLowerCase()}
                </span>
            </button>
            <IconLoader
                className={`${isActiveLoader ? "block" : "hidden"} absolute top-[4px] left-[4px] tab:top-[8px]
                             tab:left-[8px] w-[40px] h-[40px] animate-rotation`}
            />
        </div>
    );
};
