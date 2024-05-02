import { SocialLinks } from "@/src/mockedData/membersData";
import { IconLinkedin } from "../../shared/Icons/IconLinkedin";
import { IconBehance } from "../../shared/Icons/IconBehance";
import { IconGithub } from "../../shared/Icons/IconGithub";
import { IconTelegram } from "../../shared/Icons/IconTelegram";
import { SocialLink } from "../../shared/SocialLink";

export const MemberSocialLinks = ({
    socialLinks,
}: {
    socialLinks: SocialLinks;
}) => {
    const iconTelegram = <IconTelegram className=" " />;
    const iconLinkedin = <IconLinkedin className="w-6 h-6 " />;
    const iconGithub = <IconGithub className="w-5 h-5" />;
    const iconBehance = <IconBehance className="w-6 h-6" />;
    const classLiSocialLink =
        "flex w-full h-[34px] justify-center items-center border border-purple-stroke [&:nth-child(2)]:border-l-0 tab:border-0 tab:border-t ";

    return (
        <ul className="flex justify-between ">
            {socialLinks.telegram && (
                <li className={`${classLiSocialLink} tab:border-r`}>
                    <div className="flex w-8 h-8 justify-center items-center">
                        <SocialLink
                            url={socialLinks.telegram}
                            image={iconTelegram}
                            classname="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
            {socialLinks.github && (
                <li
                    className={`${classLiSocialLink} hidden pc:flex pc:border-r`}
                >
                    <div className="flex w-8 h-8 justify-center items-center">
                        <SocialLink
                            url={socialLinks.github}
                            image={iconGithub}
                            classname="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
            {socialLinks.behance && (
                <li
                    className={`${classLiSocialLink} hidden pc:flex pc:border-r`}
                >
                    <div className="w-8 h-8">
                        <SocialLink
                            url={socialLinks.behance}
                            image={iconBehance}
                            classname="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
            {socialLinks.linkedin && (
                <li className={`${classLiSocialLink} border-l-0 pc:border-r-0`}>
                    <div className="w-8 h-8">
                        <SocialLink
                            url={socialLinks.linkedin}
                            image={iconLinkedin}
                            classname="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    </div>
                </li>
            )}
        </ul>
    );
};
