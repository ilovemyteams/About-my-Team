import { ReactNode } from "react";

interface TitleWrapperProps {
    children: ReactNode;
    className?: string;
}

export const TitleWrapper = ({ children, className }: TitleWrapperProps) => {
    return (
        <h2 className={`mb-16 font-caviar text-5xl ${className}`}>
            {children}
        </h2>
    );
};
