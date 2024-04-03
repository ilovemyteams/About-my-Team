import Image from "next/image";
import React from "react";

const copyToClipboard = async (text: string): Promise<void> => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Link copied to clipboard");
    } catch (error) {
        console.error("Failed to copy link: ", error);
    }
};

const CopyLinkButton = ({ link }: { link: string }) => {
    const handleCopyLink = () => {
        copyToClipboard(link);
    };

    return (
        <button onClick={handleCopyLink}>
            <Image
                src="/images/copyIcon.svg"
                alt="Close button"
                width={18}
                height={20}
            />
        </button>
    );
};

export default CopyLinkButton;
