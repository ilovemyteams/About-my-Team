import { notFound } from "next/navigation";
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
