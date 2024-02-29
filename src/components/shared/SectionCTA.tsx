import { ReactNode } from "react";

interface SectionCTAProps {
    children: ReactNode;
    className?: string;
}

export const SectionCTA = ({ children, className }: SectionCTAProps) => {
    return (
        <div className=" bg-purple-300">
            <section
                className={`container py-[48px] pc:py-[60px] mb-[80px] pc:mb-[100px] ${className}`}
            >
                {children}
            </section>
        </div>
    );
};
