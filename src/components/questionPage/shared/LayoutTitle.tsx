import { PropsWithChildren } from "react";

interface LayoutTitleProps {
    className?: string;
}

export const LayoutTitle = ({
    children,
    className,
}: PropsWithChildren<LayoutTitleProps>) => {
    return (
        <h2
            className={`font-caviar text-purple-200 dark:text-grey text-2xl tab:text-4xl pc:text-5xl desk:text-6xl font-bold ${className}`}
        >
            {children}
        </h2>
    );
};
