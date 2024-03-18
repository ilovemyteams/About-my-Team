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
            className={`container max-w-[540px] tab:max-w-full pc:pb-[60px] scroll-mt-[90px] pc:scroll-mt-[30px] mb-[80px] pc:mb-[100px] ${className}`}
        >
            {children}
        </section>
    );
};
