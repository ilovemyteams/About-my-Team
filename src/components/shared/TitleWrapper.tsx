import { ReactNode } from "react";

interface TitleWrapperProps {
    children: ReactNode;
    className?: string;
}

export const TitleWrapper = ({ children, className }: TitleWrapperProps) => {
    return (
        <h2
            className={`font-caviar text-3xl mb-4 pc:text-5xl pc:mb-16 ${className}`}
        >
            {children}
        </h2>
    );
};
