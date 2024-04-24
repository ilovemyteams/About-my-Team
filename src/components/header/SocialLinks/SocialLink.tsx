import { ReactNode } from "react";

interface SocialLinkProps {
    url: string;
    image: ReactNode;
}

export const SocialLink = ({ url, image }: SocialLinkProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer flex justify-center items-center w-[48px] h-[48px] p-3 pc:p-2 dark:text-purple-50 text-purple-130
            icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            icon-hover-rounded-purple:active"
        >
            {image}
        </a>
    );
};
