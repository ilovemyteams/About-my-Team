import Image from "next/image";
import { useTheme } from "next-themes";

function ThemedImage({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className: string;
}) {
    const { resolvedTheme } = useTheme();
    console.log(resolvedTheme);
    let blurDataURLMob;

    switch (resolvedTheme) {
        case "light":
            blurDataURLMob = "/images/plugMemberMob.webp";

            break;
        case "dark":
            blurDataURLMob = "/images/plugMemberMobDark.webp";
            break;
        default:
            blurDataURLMob = "/images/plugMemberModal.webp";
            break;
    }

    return (
        <Image
            loading="lazy"
            placeholder="blur"
            blurDataURL={blurDataURLMob}
            src={src}
            alt={alt}
            width={128}
            height={150}
            className={className}
        />
    );
}

export default ThemedImage;
