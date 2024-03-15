import React from "react";
interface CircleHoverWrapperProps {
    children: React.ReactNode;
    className?: string;
}
export const CircleHoverWrapper = ({
    children,
    className,
}: CircleHoverWrapperProps) => {
    return (
        <div
            className={`group pointer relative  flex justify-center items-center after:z-[-1]
                        after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full after:bg-purple-stroke03 
                        after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
                        hover:after:scale-100 hover:after:blur-[2px] hover:after:w-full hover:after:h-full
                        focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-full focus-visible:after:h-full 
                        focus-visible:outline-none focus-within:outline-none ${className}`}
        >
            {children}
        </div>
    );
};
