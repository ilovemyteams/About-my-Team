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
            className="cursor-pointer w-[48px] h-[48px] flex justify-center items-center
            after:content-[''] after:absolute after:w-[0px] after:h-[0px] after:rounded-full after:bg-purple-stroke03 
            after:scale-0 after:origin-center after:blur-[2px] after:transition-scale after:ease-out after:duration-[600ms]
            hover:after:scale-100 hover:after:blur-[2px] hover:after:w-[48px] hover:after:h-[48px]
            focus-visible:after:scale-100 focus-visible:after:blur-[2px] focus-visible:after:w-[48px] focus-visible:after:h-[48px] 
            focus-visible:outline-none focus-within:outline-none"
        >
            <Image
                src={`/images/${image}`}
                width="0"
                height="0"
                alt={alt}
                className="w-[48px] h-auto"
            />
        </a>
    );
};
