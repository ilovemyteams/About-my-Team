import React from "react";

export const HighlightPurple = ({ title }: { title: string }) => {
    if (!title.includes("<purple>") || !title.includes("</purple>")) {
        return <span>{title}</span>;
    }
    const parts = title.split(/(<purple>|<\/purple>)/);

    return (
        <>
            {parts.map((part, index) =>
                part === "<purple>" || part === "</purple>" ? null : (
                    <span
                        key={index}
                        className={
                            index > 0 && parts[index - 1] === "<purple>"
                                ? "text-purple-100"
                                : ""
                        }
                    >
                        {part}
                    </span>
                )
            )}
        </>
    );
};
