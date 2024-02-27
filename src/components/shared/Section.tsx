import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section className={`container mb-[100px] ${className}`}>
            {children}
        </section>
    );
};
