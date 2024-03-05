import { BoxProps } from "./TopBox";

export const BottomBox = ({ children, className }: BoxProps) => {
    return (
        <div className={`block bg-white px-0 py-0.5 w-72 ${className} `}>
            {children}
        </div>
    );
};
