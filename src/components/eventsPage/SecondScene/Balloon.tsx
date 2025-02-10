"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";

import { Link } from "@/src/navigation";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

interface BalloonButtonProps {
    id: string;
    className: string;
    heartPNG: string;
    randomWishId: string;
}

export const Balloon = ({
    className,
    id,
    heartPNG,
    randomWishId,
}: BalloonButtonProps) => {
    const { setPreviousValentineURL } = usePreviousURL();

    const handleClick = () => {
        setPreviousValentineURL(`/events#balloons`);
        sendGTMEvent({
            event: "balloon_click",
        });
    };

    return (
        <Link
            href={`/events/wish/${randomWishId}`}
            id={id}
            aria-label={id}
            onClick={handleClick}
            className={`absolute cursor-pointer active:scale-[110%] tab:hover:scale-[130%] tab:hover:z-[2] ${className} transition ease-out duration-300`}
        >
            <Image
                src={heartPNG}
                alt="heart-shaped balloon"
                width={306}
                height={299}
                className={`w-full h-auto`}
            />
        </Link>
    );
};
