"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ComponentType, useEffect, useState } from "react";

import { wishesData } from "@/src/mockedData/wishesData";
import { wishRandomizer } from "@/src/utils/wishRandomizer";
import { IconProps } from "@/types/iconProps.interface";

interface ChristmasToyButtonProps {
    id: string;
    className: string;
    icon: ComponentType<IconProps>;
}

export const ChristmasToyButton = ({
    className,
    id,
    icon: Icon,
}: ChristmasToyButtonProps) => {
    const [randomWishId, setRandomWishId] = useState<string | null>(null);
    useEffect(() => {
        setRandomWishId(wishRandomizer(wishesData));
    }, []);

    const locale = useLocale();
    return (
        <Link
            href={`/${locale}/events/wish/${randomWishId}`}
            id={id}
            aria-label={id}
            className={`absolute cursor-pointer active:scale-[110%] tab:hover:scale-[130%] ${className}`}
        >
            <Icon className="w-full h-auto" />
        </Link>
    );
};
