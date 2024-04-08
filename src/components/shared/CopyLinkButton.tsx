import React, { ReactNode } from "react";

const copyToClipboard = async (text: string): Promise<void> => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Link copied to clipboard");
    } catch (error) {
        console.error("Failed to copy link: ", error);
    }
};

const CopyLinkButton = ({
    link,
    children,
}: {
    link: string;
    children: ReactNode;
}) => {
    const handleCopyLink = () => {
        copyToClipboard(link);
    };

    return (
        <button aria-label="copy share link button" onClick={handleCopyLink}>
            {children}
        </button>
    );
};

export default CopyLinkButton;
