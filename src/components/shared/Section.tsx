import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section className={`pb-[60px] px-[60px] mb-[100px] ${className}`}>
            {children}
        </section>
    );
};
