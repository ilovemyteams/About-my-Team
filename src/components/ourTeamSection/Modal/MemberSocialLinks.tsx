import { SocialLinks } from "@/src/mockedData/membersData";
import { IconLinkedin } from "../../shared/Icons/IconLinkedin";
import { IconBehance } from "../../shared/Icons/IconBehance";
import { IconGithub } from "../../shared/Icons/IconGithub";
import { IconTelegram } from "../../shared/Icons/IconTelegram";
import { SocialLink } from "../../header/SocialLinks/SocialLink";

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
        "flex w-full h-[34px] justify-center items-center border border-purple-stroke [&:nth-child(2)]:border-l-0 tab:border-0 tab:border-t tab:[&:nth-child(1)]:border-r pc:[&:nth-child(2)]:border-r";

    return (
        <ul className="flex justify-between ">
            <li className={`${classLiSocialLink} `}>
                <div className="flex w-8 h-8 justify-center items-center">
                    {socialLinks.telegram ? (
                        <SocialLink
                            url={socialLinks.telegram}
                            image={iconTelegram}
                            classname="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    ) : (
                        <IconTelegram className="dark:text-purple-50 text-purple-130 " />
                    )}
                </div>
            </li>
            {socialLinks.github ? (
                <li className={`${classLiSocialLink} hidden pc:flex `}>
                    <div className="flex w-8 h-8 justify-center items-center">
                        {socialLinks.github && (
                            <SocialLink
                                url={socialLinks.github}
                                image={iconGithub}
                                classname="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                            />
                        )}
                    </div>
                </li>
            ) : (
                <li className={`${classLiSocialLink} hidden pc:flex`}>
                    <div className="w-8 h-8">
                        {socialLinks.behance && (
                            <SocialLink
                                url={socialLinks.behance}
                                image={iconBehance}
                                classname="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                            />
                        )}
                    </div>
                </li>
            )}
            <li className={`${classLiSocialLink} border-l-0`}>
                <div className="w-8 h-8">
                    {socialLinks.linkedin && (
                        <SocialLink
                            url={socialLinks.linkedin}
                            image={iconLinkedin}
                            classname="max-w-8 max-h-8 px-0 py-0 pc:px-0 pc:py-0"
                        />
                    )}
                </div>
            </li>
        </ul>
    );
};

// "use client";
// import { useScreenSize } from "@/src/hooks/useScreenSize";
// import { SocialLinks } from "@/src/mockedData/membersData";
// import { SCREEN_NAMES } from "@/src/constants/screenNames";
// import { IconLinkedin } from "../../shared/Icons/IconLinkedin";
// import { IconBehance } from "../../shared/Icons/IconBehance";
// import { IconGithub } from "../../shared/Icons/IconGithub";
// import { IconTelegram } from "../../shared/Icons/IconTelegram";

// export const MemberSocialLinks = ({
//     socialLinks,
// }: {
//     socialLinks: SocialLinks;
// }) => {
//     const screenSizeName = useScreenSize();
//     const { mobileName, tabletName } = SCREEN_NAMES;

//     const memberSocialLinksTab = [
//         {
//             url: socialLinks.telegram,
//             image: <IconTelegram />,
//         },
//         {
//             url: socialLinks.linkedin,
//             image: <IconLinkedin className="w-6 h-6" />,
//         },
//     ];
//     const memberSocialLinksPCGit = [
//         {
//             url: socialLinks.telegram,
//             image: <IconTelegram />,
//         },
//         {
//             url: socialLinks.github,
//             image: <IconGithub className="w-6 h-6" />,
//         },
//         {
//             url: socialLinks.linkedin,
//             image: <IconLinkedin className="w-6 h-6" />,
//         },
//     ];
//     const memberSocialLinksPCBeh = [
//         {
//             url: socialLinks.telegram,
//             image: <IconTelegram />,
//         },
//         {
//             url: socialLinks.behance,
//             image: <IconBehance className="w-6 h-6" />,
//         },
//         {
//             url: socialLinks.linkedin,
//             image: <IconLinkedin className="w-6 h-6" />,
//         },
//     ];

//     const memberSocialLinks =
//         screenSizeName === mobileName || screenSizeName === tabletName
//             ? memberSocialLinksTab
//             : socialLinks.github
//               ? memberSocialLinksPCGit
//               : memberSocialLinksPCBeh;

//     return (
//         <ul className="flex justify-between ">
//             {memberSocialLinks.map(({ url, image }, idx) => (
//                 <li
//                     key={idx}
//                     className="flex w-full h-[34px] justify-center items-center
//                     border border-purple-stroke [&:nth-child(2)]:border-l-0
//                     tab:border-0 tab:border-t tab:[&:nth-child(1)]:border-r
//                     pc:[&:nth-child(2)]:border-r"
//                 >
//                     <div className="w-8 h-8">
//                         <a
//                             href={url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="cursor-pointer flex justify-center items-center w-[32px] h-[32px]
// icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
// icon-hover-rounded-purple:active relative"
//                         >
//                             {image}
//                         </a>
//                     </div>
//                 </li>
//             ))}
//         </ul>
//     );
// };
