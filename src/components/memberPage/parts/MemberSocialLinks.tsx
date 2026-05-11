import { IconBehance } from "@/src/components/shared/Icons/IconBehance";
import { IconGithub } from "@/src/components/shared/Icons/IconGithub";
import { IconGoogleDrive } from "@/src/components/shared/Icons/IconGoogleDrive";
import { IconLinkedin } from "@/src/components/shared/Icons/IconLinkedin";
import { IconTelegram } from "@/src/components/shared/Icons/IconTelegram";
import { SocialLink } from "@/src/components/shared/SocialLink";
import { SocialLinks } from "@/src/mockedData/membersData";

export const MemberSocialLinks = ({
    socialLinks,
}: {
    socialLinks: SocialLinks;
}) => (
    <ul
        className={`
                flex justify-between mb-4 tab:mb-5 border border-purple-strokeLight dark:border-purple-stroke 
                [&>li:not(:last-child)]:border-r [&>li:not(:last-child)]:border-purple-strokeLight dark:[&>li:not(:last-child)]:border-purple-stroke
            `}
    >
        {socialLinks.telegram && (
            <li className="flex justify-center items-center w-full">
                <SocialLink
                    url={socialLinks.telegram}
                    image={<IconTelegram className="w-5" />}
                    className="p-0 h-8 tab:h-12"
                />
            </li>
        )}
        {socialLinks.linkedin && (
            <li className="flex justify-center items-center w-full">
                <SocialLink
                    url={socialLinks.linkedin}
                    image={<IconLinkedin className="w-6 h-6" />}
                    className="p-0 h-8 tab:h-12"
                />
            </li>
        )}
        {socialLinks.github && (
            <li className="flex justify-center items-center w-full">
                <SocialLink
                    url={socialLinks.github}
                    image={<IconGithub className="w-6 h-6" />}
                    className="p-0 h-8 tab:h-12"
                />
            </li>
        )}
        {socialLinks.behance && (
            <li className="flex justify-center items-center w-full">
                <SocialLink
                    url={socialLinks.behance}
                    image={<IconBehance className="w-6 h-6" />}
                    className="p-0 h-8 tab:h-12"
                />
            </li>
        )}
        {socialLinks.googleDrive && (
            <li className="flex justify-center items-center w-full">
                <SocialLink
                    url={socialLinks.googleDrive}
                    image={<IconGoogleDrive className="w-6 h-6" />}
                    className="p-0 h-8 tab:h-12"
                />
            </li>
        )}
    </ul>
);
