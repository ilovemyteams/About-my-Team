import { SocialLink } from "./SocialLink";

const socialLinksData = [
    {
        url: "https://www.linkedin.com/in/susanna-salata/",
        image: "linkedin.svg",
        alt: "Linkedin",
    },
    {
        url: "https://www.behance.net/aboutmyteam",
        image: "behance.svg",
        alt: "Behance",
    },
    {
        url: "https://github.com/ilovemyteams",
        image: "github.svg",
        alt: "GitHub",
    },
];

export const SocialLinksList = () => {
    return (
        <ul className="flex pc:flex-col gap-2">
            {socialLinksData.map(({ url, image, alt }, idx) => (
                <li key={idx}>
                    <SocialLink url={url} image={image} alt={alt} />
                </li>
            ))}
        </ul>
    );
};
