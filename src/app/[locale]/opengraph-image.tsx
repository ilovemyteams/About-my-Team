/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { useTranslations } from "next-intl";

export const contentType = "image/jpeg";

export default async function Image({
    params,
}: {
    params: { notFound: string[] | []; locale: string };
}) {
    const getTranslation = useTranslations();
    console.log("notFoiund =", params.notFound);

    const src =
        params.notFound.length > 0
            ? "/images/404.jpeg"
            : "/images/opengraph-image.jpeg";
    const alt =
        params.notFound.length > 0
            ? getTranslation("NotFound.title")
            : getTranslation("Home.title");

    return new ImageResponse(<img src={src} alt={alt} />);
}
