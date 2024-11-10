import { addProtocol } from "@/src/utils/httpsProtocols";

import { IconGoToSite } from "./Icons/IconGoToSite";

export const GoToSiteLink = ({ siteLink }: { siteLink: string }) => {
    return (
        <a
            target="_blank"
            href={addProtocol(siteLink)}
            rel="noopener noreferrer"
            className="flex items-center gap-2  text-purple-130 dark:text-purple-50  dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight font-caviar text-lg outline-none
 transition-color ease-out duration-300"
        >
            <p className=" hidden pc:block underline ">{siteLink}</p>
            <IconGoToSite />
        </a>
    );
};
