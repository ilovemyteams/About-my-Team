import Link from "next/link";
import React from "react";

export const Modal = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Link
                href="/"
                className="w-full h-full bg-[rgba(3,3,3,0.8)] fixed top-0 left-0 z-[99]"
            />
            {children}
        </div>
    );
};
