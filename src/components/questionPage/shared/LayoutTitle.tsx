import React from "react";

interface LayoutTitleProps {
    text: string;
}

export const LayoutTitle = ({ text }: LayoutTitleProps) => {
    return (
        <h2 className="font-caviar text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold mb-6 tab:mb-10 pc:mb-16">
            {text}
        </h2>
    );
};
