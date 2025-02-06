import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { ValentineModal } from "@/src/components/eventsPage/Modal/ValentineModal";
import { SharePopover } from "@/src/components/shared/SharePopover";
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
    const text = displayedWish[params.locale as LocaleType].title;

    return (
        <ValentineModal
            text={text}
            heartPink={displayedWish.pinkHeart}
            gradientPink={displayedWish.pinkBG}
        >
            <div className="mx-auto mt-5 w-full">
                <Image
                    src={displayedWish.image}
                    alt={displayedWish.id}
                    width={288}
                    height={210}
                    className="mx-auto mb-2"
                />
                <p className="mx-4 mt-4 w-[285px] text-purple-200 text-base font-segoe">
                    ... {displayedWish[params.locale as LocaleType].wish}
                </p>
            </div>
            <div className="mx-4 flex justify-between mt-1">
                <Image
                    src="/images/valen/ilovemyteamLogo.svg"
                    alt="ilovemyteam logo"
                    width={47}
                    height={9.4}
                />
                <SharePopover
                    hiddenTextForMemberModal
                    className="text-purple-400 w-6 h-6"
                    trigerShowShareText={false}
                />
            </div>
        </ValentineModal>
    );
};

export default WishPage;
