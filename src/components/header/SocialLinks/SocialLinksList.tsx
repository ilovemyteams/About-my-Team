import { IconBehance } from "../../shared/Icons/IconBehance";
import { IconGithub } from "../../shared/Icons/IconGithub";
import { IconLinkedin } from "../../shared/Icons/IconLinkedin";
import { SocialLink } from "./SocialLink";

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
        url: "https://github.com/Ilovemyteam",
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
