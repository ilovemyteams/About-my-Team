import { useSettingsContext } from "@/src/utils/SettingsSanityContext";
import { SupportedPlatforms } from "@/types/sanityDataPropsTypes";

import { IconBehance } from "../../shared/Icons/IconBehance";
import { IconGithub } from "../../shared/Icons/IconGithub";
import { IconLinkedin } from "../../shared/Icons/IconLinkedin";
import { SocialLink } from "../../shared/SocialLink";
import { IconYoutube } from "../../shared/Icons/IconYoutube";

export const SocialLinksList = () => {
    const { data } = useSettingsContext();
    const socialLinksIcon = {
        linkedin: <IconLinkedin />,
        behance: <IconBehance />,
        github: <IconGithub />,
        youtube: <IconYoutube />,
    };

    const socialLinksData = data?.header?.socialLinks;
    return (
        <ul className="flex pc:flex-col gap-2">
            {socialLinksData &&
                socialLinksData.map(({ platform, url, newWindow }, idx) => {
                    const icon =
                        platform &&
                        socialLinksIcon[platform as SupportedPlatforms];

                    if (!icon) return null;
                    return (
                        <li key={idx}>
                            <SocialLink
                                url={url || ""}
                                image={icon}
                                newWindow={newWindow || true}
                            />
                        </li>
                    );
                })}
        </ul>
    );
};
