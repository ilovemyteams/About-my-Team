import { useSettingsContext } from "@/src/utils/SettingsSanityContext";
import { IconBehance } from "../../shared/Icons/IconBehance";
import { IconGithub } from "../../shared/Icons/IconGithub";
import { IconLinkedin } from "../../shared/Icons/IconLinkedin";
import { SocialLink } from "../../shared/SocialLink";
import { IconTelegram } from "../../shared/Icons/IconTelegram";
import { SupportedPlatforms } from "@/types/sanityDataPropsTypes";

export const SocialLinksList = () => {
    const { data } = useSettingsContext();
    const socialLinksIcon = {
        linkedin: <IconLinkedin />,
        behance: <IconBehance />,
        github: <IconGithub />,
        youtube: <IconTelegram />,
    };

    const socialLinksData = data?.header?.socialLinks;
    console.log(socialLinksData);

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
