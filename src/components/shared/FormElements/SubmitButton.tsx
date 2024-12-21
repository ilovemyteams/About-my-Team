import React from "react";

import { Button } from "../Button";
import { IconLoader } from "../Icons/IconLoader";

interface SubmitButtonProps {
    title: string;
    id?: string;
    isActiveLoader: boolean;
    isDisabled: boolean;
}

export const SubmitButton = ({
    title,
    id,
    isActiveLoader,
    isDisabled,
}: SubmitButtonProps) => {
    return (
        <div className="relative">
            <Button
                id={id}
                type="submit"
                color="grey"
                className="mx-auto"
                disabled={isDisabled}
            >
                {title}
            </Button>
            <IconLoader
                className={`${isActiveLoader ? "block" : "hidden"} absolute top-[4px] left-[4px] tab:top-[8px]
                             tab:left-[8px] w-[40px] h-[40px] animate-rotation`}
            />
        </div>
    );
};
