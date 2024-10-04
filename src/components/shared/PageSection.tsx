import { ReactNode } from "react";

interface PageSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const PageSection = ({ children, className, id }: PageSectionProps) => {
    return (
        <section
            id={id}
            className={`container max-w-[540px] tab:max-w-full desk:max-w-[1456px] scroll-mt-[90px] pc:scroll-mt-[30px] ${className}`}
        >
            {children}
        </section>
    );
};
