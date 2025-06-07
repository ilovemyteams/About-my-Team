import React from "react";

import { Link } from "@/src/i18n/routing";

interface DocTypeLinkProps {
    title: string;
    url: string;
}

export const DocTypeLink = ({ title, url }: DocTypeLinkProps) => {
    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm outline-none dark:pc:hover:text-red pc:hover:text-redLight 
                dark:pc:focus:text-red pc:focus:text-redLight dark:active:text-red 
                active:text-redLight transition ease-out duration-300"
        >
            {title}
        </Link>
    );
};
