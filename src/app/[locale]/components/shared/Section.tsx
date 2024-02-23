import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section
            className={`max-w-[67.5rem] pb-[3.75rem] px-[3.75rem] mb-[6.25rem] ${className}`}
        >
            {children}
        </section>
    );
};
