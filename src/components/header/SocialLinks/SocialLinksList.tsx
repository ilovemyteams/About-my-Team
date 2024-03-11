import { SocialLink } from "./SocialLink";

const socialLinksData = [
    { url: "/", image: "linkedin.svg", alt: "Linkedin" },
    { url: "/", image: "behance.svg", alt: "Behance" },
    { url: "/", image: "github.svg", alt: "GitHub" },
];

export const SocialLinksList = () => {
    return (
        <ul className="flex flex-col gap-2">
            {socialLinksData.map(({ url, image, alt }, idx) => (
                <li key={idx}>
                    <SocialLink url={url} image={image} alt={alt} />
                </li>
            ))}
        </ul>
    );
};
