import Image from "next/image";

import { SharePopover } from "../../shared/SharePopover";

interface WishCardProps {
    text: string;
    imageId: string;
}

export const WishCard = ({ text, imageId }: WishCardProps) => {
    return (
        <>
            <div
                className="absolute mx-auto top-[17px] tab:top-[4.5%] left-[52%] -translate-x-[52%]
            min-w-[191px] w-[65%]"
            >
                <Image
                    src={`/images/christmas/${imageId}.jpg`}
                    alt={imageId}
                    width={447}
                    height={328}
                    className=" object-cover min-w-[191px] mb-2"
                />
                <p className="w-[110%] ml-[-5%] text-purple-200 tab:text-2xl tab:leading-6 pc:[font-size:_clamp(28px,4vw,32px)] desk:[font-size:_clamp(32px,4vw,40px)] desk:leading-10 font-intro text-center mx-auto">
                    {text}
                </p>
            </div>
            <div className=" absolute bottom-[10px] tab:bottom-[4.5%] left-1/2 -translate-x-1/2">
                <SharePopover
                    className="text-greyLight"
                    trigerShowShareText={false}
                />
            </div>
        </>
    );
};
