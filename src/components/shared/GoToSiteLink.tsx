import { addProtocol } from "@/src/utils/addProtocol";
import { IconGoToSite } from "./Icons/IconGoToSite";

export const GoToSiteLink = ({ siteLink }: { siteLink: string }) => {
    return (
        <a
            target="_blank"
            href={addProtocol(siteLink)}
            rel="noopener noreferrer"
            className="flex items-center gap-2 group dark:pc:hover:text-red 
 pc:hover:text-redLight dark:active:text-red active:text-redLight 
 dark:pc:focus:text-red pc:focus:text-redLight font-caviar text-lg outline-none
 transition-color ease-out duration-300"
        >
            <p className=" hidden pc:block underline ">{siteLink}</p>
            <IconGoToSite
                className="text-purple-130 dark:text-purple-50  dark:pc:group-hover:text-red 
 pc:group-hover:text-redLight dark:group-active:text-red group-active:text-redLight 
 dark:pc:group-focus:text-red pc:group-focus:text-redLight "
            />
        </a>
    );
};
