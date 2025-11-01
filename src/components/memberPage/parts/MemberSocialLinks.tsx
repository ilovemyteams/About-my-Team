import { IconLinkedin } from "@/src/components/shared/Icons/IconLinkedin";
import { IconTelegram } from "@/src/components/shared/Icons/IconTelegram";
import { SocialLink } from "@/src/components/shared/SocialLink";
import { SocialLinks } from "@/src/mockedData/membersData";

export const MemberSocialLinks = ({
    socialLinks,
}: {
    socialLinks: SocialLinks;
}) => {
    return (
        <ul className="flex justify-between border border-purple-strokeLight dark:border-purple-stroke mb-4 tab:mb-5">
            {socialLinks.telegram && (
                <li className="flex justify-center items-center w-full border-r border-purple-strokeLight dark:border-purple-stroke">
                    <SocialLink
                        url={socialLinks.telegram}
                        image={<IconTelegram className="w-5" />}
                        className="p-0 h-8 w-full tab:h-12"
                    />
                </li>
            )}
            {socialLinks.linkedin && (
                <li className="flex justify-center items-center w-full">
                    <SocialLink
                        url={socialLinks.linkedin}
                        image={<IconLinkedin className="w-6 h-6" />}
                        className="p-0 h-8 w-full tab:h-12"
                    />
                </li>
            )}
        </ul>
    );
};
