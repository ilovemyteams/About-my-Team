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
}) => {
    const iconTelegram = <IconTelegram className=" " />;
    const iconLinkedin = <IconLinkedin className="w-6 h-6 " />;
    const iconGithub = <IconGithub className="w-5 h-5" />;
    const iconBehance = <IconBehance className="w-6 h-6" />;
    const iconGoogleDrive = <IconGoogleDrive className="" />;
    const classLiSocialLink =
        "flex w-full h-[34px] tab:h-10 justify-center items-center border border-purple-strokeLight dark:border-purple-stroke  tab:border-0 tab:border-t ";
    const borderLeft =
        !socialLinks.telegram &&
        !socialLinks.github &&
        !socialLinks.behance &&
        !socialLinks.googleDrive
            ? "border-l"
            : "border-l-0";

    const borderLeftMob =
        !socialLinks.telegram &&
        (socialLinks.github || socialLinks.behance || socialLinks.googleDrive)
            ? "[&:nth-child(2)]:border-l"
            : "border-l-0 [&:nth-child(2)]:border-l-0";
    return (
        <ul className="flex justify-between ">
            {socialLinks.telegram && (
                <li className={`${classLiSocialLink} tab:border-r`}>
                    <div className="flex w-8 h-8 justify-center items-center">
                        <SocialLink
                            url={socialLinks.telegram}
                            image={iconTelegram}
                            className="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
            {socialLinks.github && (
                <li
                    className={`${classLiSocialLink} hidden tab:flex tab:border-r`}
                >
                    <div className="flex w-8 h-8 justify-center items-center">
                        <SocialLink
                            url={socialLinks.github}
                            image={iconGithub}
                            className="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
            {socialLinks.googleDrive && (
                <li
                    className={`${classLiSocialLink} hidden tab:flex tab:border-r`}
                >
                    <div className="flex w-8 h-8 justify-center items-center">
                        <SocialLink
                            url={socialLinks.googleDrive}
                            image={iconGoogleDrive}
                            className="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
            {socialLinks.behance && (
                <li
                    className={`${classLiSocialLink} hidden tab:flex tab:border-r`}
                >
                    <div className="w-8 h-8">
                        <SocialLink
                            url={socialLinks.behance}
                            image={iconBehance}
                            className="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
            {socialLinks.linkedin && (
                <li
                    className={`${classLiSocialLink} tab:hidden ${borderLeft} ${borderLeftMob} pc:border-r-0`}
                >
                    <div className="w-8 h-8">
                        <SocialLink
                            url={socialLinks.linkedin}
                            image={iconLinkedin}
                            className="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
            {socialLinks.linkedin && (
                <li
                    className={`${classLiSocialLink} hidden tab:flex ${borderLeft} pc:border-r-0`}
                >
                    <div className="w-8 h-8">
                        <SocialLink
                            url={socialLinks.linkedin}
                            image={iconLinkedin}
                            className="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
        </ul>
    );
};
