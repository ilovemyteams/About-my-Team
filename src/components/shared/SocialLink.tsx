import { ReactNode } from "react";

interface SocialLinkProps {
    url: string;
    image: ReactNode;
    className?: string;
}

export const SocialLink = ({ url, image, className }: SocialLinkProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative cursor-pointer flex justify-center items-center w-[48px] h-[48px] p-3 pc:p-2 dark:text-purple-50 text-purple-130
            icon-hover-rounded-purple ${className}`}
        >
            {image}
        </a>
    );
};
