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

    if (params.notFound.length > 0) {
        return new ImageResponse(
            (
                <div>
                    <img
                        src="/images/404.jpeg"
                        alt={getTranslation("NotFound.title")}
                    />
                </div>
            )
        );
    }

    return new ImageResponse(
        (
            <div>
                <img
                    src="/images/opengraph-image.jpeg"
                    alt={getTranslation("Home.title")}
                />
            </div>
        )
    );
}
