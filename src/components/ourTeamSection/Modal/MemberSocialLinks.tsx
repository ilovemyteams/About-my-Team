"use client";
import Image from "next/image";
import { useScreenSize } from "@/src/hooks/useScreenSize";
import { SocialLinks } from "@/src/mockedData/membersData";
import { SCREEN_NAMES } from "@/src/constants/screenNames";

export const MemberSocialLinks = ({
    socialLinks,
}: {
    socialLinks: SocialLinks;
}) => {
    const screenSizeName = useScreenSize();
    const { mobileName, tabletName } = SCREEN_NAMES;

    const memberSocialLinksTab = [
        {
            url: socialLinks.telegram,
            image: "/images/telegramIcon.svg",
            alt: "Telegram",
        },
        {
            url: socialLinks.linkedin,
            image: "/images/linkedin.svg",
            alt: "Linkedin",
        },
    ];
    const memberSocialLinksPCGit = [
        {
            url: socialLinks.telegram,
            image: "/images/telegramIcon.svg",
            alt: "Telegram",
        },
        {
            url: socialLinks.github,
            image: "/images/github.svg",
            alt: "GitHub",
        },
        {
            url: socialLinks.linkedin,
            image: "/images/linkedin.svg",
            alt: "Linkedin",
        },
    ];
    const memberSocialLinksPCBeh = [
        {
            url: socialLinks.telegram,
            image: "/images/telegramIcon.svg",
            alt: "Telegram",
        },
        {
            url: socialLinks.behance,
            image: "/images/behance.svg",
            alt: "Behance",
        },
        {
            url: socialLinks.linkedin,
            image: "/images/linkedin.svg",
            alt: "Linkedin",
        },
    ];

    const memberSocialLinks =
        screenSizeName === (tabletName || mobileName)
            ? memberSocialLinksTab
            : socialLinks.github
              ? memberSocialLinksPCGit
              : memberSocialLinksPCBeh;

    return (
        <ul className="flex justify-between ">
            {memberSocialLinks.map(({ url, image, alt }, idx) => (
                <li
                    key={idx}
                    className="flex w-full h-[34px] justify-center items-center 
                    border border-purple-stroke [&:nth-child(2)]:border-l-0 
                    tab:border-0 tab:border-t tab:[&:nth-child(1)]:border-r
                    pc:[&:nth-child(2)]:border-r"
                >
                    <div className="w-6 h-6">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer flex justify-center items-center w-[24px] h-[24px]
icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
icon-hover-rounded-purple:active relative"
                        >
                            <Image
                                src={image}
                                alt={alt}
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
};
