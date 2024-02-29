import { ReactNode } from "react";

interface TitleCTAWrapperProps {
    children: ReactNode;
    className?: string;
}

export const TitleCTAWrapper = ({
    children,
    className,
}: TitleCTAWrapperProps) => {
    return (
        <h2 className={`font-caviar text-3xl pc:text-4xl ${className}`}>
            {children}
        </h2>
    );
};
