"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { wishesData } from "@/src/mockedData/wishesData";
import { Link } from "@/src/navigation";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";
import { wishRandomizer } from "@/src/utils/wishRandomizer";

interface BalloonButtonProps {
    id: string;
    className: string;
    heartPNG: string;
}

export const Balloon = ({ className, id, heartPNG }: BalloonButtonProps) => {
    const { setPreviousValentineURL } = usePreviousURL();
    const [randomWishId, setRandomWishId] = useState<string | null>(null);
    useEffect(() => {
        setRandomWishId(wishRandomizer(wishesData));
    }, []);

    const handleClick = () => {
        setPreviousValentineURL(`/events#balloons`);
    };

    return (
        <Link
            href={`/events/wish/${randomWishId}`}
            id={id}
            aria-label={id}
            onClick={handleClick}
            className={`absolute cursor-pointer active:scale-[110%] tab:hover:scale-[130%] ${className} transition ease-out duration-300`}
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
