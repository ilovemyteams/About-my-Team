import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section
            id={id}
            className={`container pc:pb-[60px] mb-[80px] pc:mb-[100px] ${className}`}
        >
            {children}
        </section>
    );
};
