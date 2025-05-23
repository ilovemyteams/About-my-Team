import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
    return (
        <section
            id={id}
            className={twMerge(
                "container max-w-[540px] tab:max-w-full desk:max-w-[1456px] scroll-mt-[90px] pc:scroll-mt-[30px] pb-[80px] tab:pb-[100px] pc:pb-[160px] desk:pb-[180px]",
                className
            )}
        >
            {children}
        </section>
    );
};
