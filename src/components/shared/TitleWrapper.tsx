import { ReactNode } from "react";

interface TitleWrapperProps {
    children: ReactNode;
    className?: string;
}

export const TitleWrapper = ({ children, className }: TitleWrapperProps) => {
    return (
        <h2
            className={`font-caviar text-3xl mb-6 tab:text-4xl tab:mb-8 pc:text-6xl desk:text-7xl pc:mb-16 text-purple-200 dark:text-grey ${className}`}
        >
            {children}
        </h2>
    );
};
