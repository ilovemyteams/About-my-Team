import Image from "next/image";

const LINKEDIN_URL = "/";
const BEHANCE_URL = "/";
const GITHUB_URL = "/";

export const SocialLinks = () => {
    return (
        <div className="flex flex-col gap-2">
            <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-[48px] h-[48px]"
            >
                <Image
                    src="/images/linkedin.svg"
                    width="0"
                    height="0"
                    alt="Linkedin"
                    className="w-[48px] h-auto"
                />
            </a>
            <a
                href={BEHANCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-[48px] h-[48px]"
            >
                <Image
                    src="/images/behance.svg"
                    width="0"
                    height="0"
                    alt="Behance"
                    className="w-[48px] h-auto"
                />
            </a>
            <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-[48px] h-[48px]"
            >
                <Image
                    src="/images/github.svg"
                    width="0"
                    height="0"
                    alt="GitHub"
                    className="w-[48px] h-auto"
                />
            </a>
        </div>
    );
};
