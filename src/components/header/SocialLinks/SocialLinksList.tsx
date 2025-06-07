import { IconBehance } from "../../shared/Icons/IconBehance";
import { IconGithub } from "../../shared/Icons/IconGithub";
import { IconLinkedin } from "../../shared/Icons/IconLinkedin";
import { IconYoutube } from "../../shared/Icons/IconYoutube";
import { SocialLink } from "../../shared/SocialLink";

const socialLinksData = [
    {
        url: "https://www.linkedin.com/in/susanna-salata/",
        image: <IconLinkedin />,
    },
    {
        url: "https://www.behance.net/aboutmyteam",
        image: <IconBehance />,
    },
    {
        url: "https://www.youtube.com/channel/UCx95sgknPRI8rVujgpRYO0g",
        image: <IconYoutube />,
    },
    {
        url: "https://github.com/Ilovemyteams",
        image: <IconGithub />,
    },
];

export const SocialLinksList = () => {
    return (
        <ul className="flex pc:flex-col gap-2">
            {socialLinksData.map(({ url, image }, idx) => (
                <li key={idx}>
                    <SocialLink url={url} image={image} />
                </li>
            ))}
        </ul>
    );
};