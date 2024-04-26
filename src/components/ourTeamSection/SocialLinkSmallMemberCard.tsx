import Image from "next/image";

interface SocialLinkProps {
    url: string;
    image: string;
    alt: string;
}

export const SocialLinkSmallMemberCard = ({
    url,
    image,
    alt,
}: SocialLinkProps) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute cursor-pointer flex justify-center items-center w-[48px] h-[48px] p-3 
            icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            icon-hover-rounded-purple:active right-0 bottom-0"
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
