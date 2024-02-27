import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section
            className={`laptop:min-w-[1080px] laptop:pb-[60px] laptop:px-[60px] laptop:mb-[100px] ${className}`}
        >
            {children}
        </section>
    );
};
