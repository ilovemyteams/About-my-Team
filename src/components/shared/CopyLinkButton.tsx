import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

const CopyLinkButton = ({
    link,
    children,
}: {
    link: string;
    children: ReactNode;
}) => {
    const [copied, setCopied] = useState(false);
    const [notCopied, setNotCopied] = useState(false);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 3000);
        } catch (error) {
            setNotCopied(true);
            setTimeout(() => setNotCopied(false), 3000);
        }
    };
    const getTranslation = useTranslations("Notifications");

    return (
        <button
            aria-label="copy share link button"
            onClick={handleCopyLink}
            className="relative"
        >
            {children}
            {copied && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 flex gap-4 h-12 w-[242px] border border-purple-stroke">
                    <div className="flex justify-center items-center w-12 h-full border-r border-purple-stroke">
                        <Image
                            src="/images/logo.svg"
                            width="24"
                            height="24"
                            alt="logo icon"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <p>{getTranslation("linkIsCopied")}</p>
                    </div>
                </div>
            )}
            {notCopied && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                    <p>{getTranslation("somethingWrong")}</p>
                </div>
            )}
        </button>
    );
};

export default CopyLinkButton;
