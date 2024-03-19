import { ReactNode } from "react";

interface SectionCTAProps {
    children: ReactNode;
    className?: string;
}

export const SectionCTA = ({ children, className }: SectionCTAProps) => {
    return (
        <div className="bg-CTAGradient">
            <section
                className={`container max-w-[540px] tab:max-w-full py-[48px] pc:p-[60px] mb-[80px] pc:mb-[100px] ${className}`}
            >
                {children}
            </section>
        </div>
    );
};
