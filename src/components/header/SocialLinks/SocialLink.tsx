import Image from "next/image";

interface SocialLinkProps {
    url: string;
    image: string;
    alt: string;
}

export const SocialLink = ({ url, image, alt }: SocialLinkProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer flex justify-center items-center w-[48px] h-[48px] p-3 pc:p-2
            icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            icon-hover-rounded-purple:active"
        >
            <Image
                src={`/images/${image}`}
                width="0"
                height="0"
                alt={alt}
                className="w-full h-auto"
            />
        </a>
    );
};
