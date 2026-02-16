import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
}

export const Title = ({ children }: TitleProps) => {
    return (
        <h2 className="font-caviar text-baseb tab:text-lg pc:text-xl desk:text-2xl text-purple-200 dark:text-grey">
            {children}
        </h2>
    );
};
