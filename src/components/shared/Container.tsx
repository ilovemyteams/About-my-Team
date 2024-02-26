import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className={`laptop:max-w-[1200px] laptop:pl-[80px] mx-auto`}>
            {children}
        </div>
    );
};
