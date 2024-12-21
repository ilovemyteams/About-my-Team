import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import React from "react";

import { WishCard } from "@/src/components/christmas/WishModal/WishCard";
import { WishModal } from "@/src/components/christmas/WishModal/WishModal";
import { wishesData } from "@/src/mockedData/wishesData";
import { LocaleType } from "@/types/LocaleType";

interface WishPageProps {
    params: {
        id: string;
        locale: LocaleType;
    };
}

export async function generateMetadata({
    params: { locale, id },
}: {
    params: { locale: string; id: string };
}) {
    const wish = wishesData.find(wish => wish.id === id);
    const wishMessage = wish
        ? wish[locale as LocaleType]
        : "Happy New 2025 Year!";
    const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/images/christmas/${id}.jpg`;
    const getTranslation = await getTranslations({
        locale,
        namespace: "Christmas",
    });

    return {
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: `/events/wish/${id}`,
            languages: {
                en: `/en/events/wish/${id}`,
                pl: `/pl/events/wish/${id}`,
                ua: `/events/wish/${id}`,
            },
        },
        title: `${wishMessage}`,
        description: `${getTranslation("wishDescription")}`,
        openGraph: {
            description: `${getTranslation("wishDescription")}`,
            title: `${wishMessage}`,
            images: [imageUrl],
        },
    };
}

const WishPage: React.FC<WishPageProps> = ({ params }) => {
    const displayedWish = wishesData.find(wish => wish.id === params.id);

    if (!displayedWish) {
        notFound();
    }

    return (
        <WishModal>
            <WishCard
                imageId={displayedWish.id}
                text={displayedWish[params.locale as LocaleType]}
            />
        </WishModal>
    );
};

export default WishPage;
