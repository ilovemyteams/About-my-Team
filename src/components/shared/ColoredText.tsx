import { PropsWithChildren } from "react";

export const ColoredText = ({ children }: PropsWithChildren) => {
    return <span className="text-purple-100">{children}</span>;
};
