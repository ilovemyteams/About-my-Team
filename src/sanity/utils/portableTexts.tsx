import React from "react";

export const myPortableTextComponents = {
    marks: {
        purple: ({ children }: { children: React.ReactNode }) => (
            <span className="text-purple-100">{children}</span>
        ),
    },
};
