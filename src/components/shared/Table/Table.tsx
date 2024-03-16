import { ReactNode } from "react";

export const Table = ({ children }: { children: ReactNode }) => {
    return (
        <ul className="tab:grid tab:grid-cols-2 tab:gap-x-6 pc:grid-cols-4 pc:grid-rows-2 pc:gap-x-0 pc:gap-y-0">
            {children}
        </ul>
    );
};
