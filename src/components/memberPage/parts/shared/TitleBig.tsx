import { ReactNode } from "react";

interface TitleBigProps {
    children: ReactNode;
}

export const TitleBig = ({ children }: TitleBigProps) => {
    return (
        <h2 className="flex items-center font-caviar text-baseb tab:text-2xlb pc:text-3xl desk:text-4xl mb-4 text-purple-200 dark:text-white-200 before:mr-3 before:content-[''] before:border-[2px] before:border-redLight dark:before:border-red before:w-2 before:h-2">
            {children}
        </h2>
    );
};
