import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

import { WishModal } from "@/src/components/christmas/WishModal/WishModal";
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

    return (
        <WishModal>
            <div
                className="absolute mx-auto top-[17px] tab:top-[4.5%] left-[52%] -translate-x-[52%]
        min-w-[191px] w-[65%]"
            >
                <Image
                    src={`/images/christmas/${displayedWish.id}.jpg`}
                    alt={displayedWish.id}
                    width={447}
                    height={328}
                    className=" object-cover min-w-[191px] mb-2"
                />
                <p className="w-[185px] tab:w-[258px] pc:w-[338px] desk:w-[439px] text-purple-200 tab:text-2xl tab:leading-6 pc:text-4xl desk:text-5xl desk:leading-10 font-intro text-center mx-auto">
                    {displayedWish[params.locale as LocaleType]}
                </p>
            </div>
            <div className=" absolute bottom-[10px] tab:bottom-[4.5%] left-1/2 -translate-x-1/2">
                <SharePopover
                    className="text-greyLight"
                    trigerShowShareText={false}
                />
            </div>
        </WishModal>
    );
};

export default WishPage;
