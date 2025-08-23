"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { IconProfile } from "@/src/components/shared/Icons/IconProfile";

interface AvatarProps {
    imageURL?: string;
    name: string;
    status: "free" | "part" | "busy";
}

export const Avatar = ({ imageURL, name, status }: AvatarProps) => {
    const [error, setError] = useState(false);
    const t = useTranslations("MemberPage");
    return (
        <div className="relative w-fit">
            <div className="size-[80px] isolate tab:size-[92px] rounded-full bg-purple-strokeLight dark:bg-purple-stroke overflow-hidden">
                <div className="flex items-end justify-center bg-memberMenuGradientLight dark:bg-memberMenuGradientDark absolute inset-0 w-full z-[-1] rounded-full overflow-hidden">
                    <IconProfile className="w-[80%] tab:w-[59%] h-auto text-purple-strokeLight dark:text-purple-stroke" />
                </div>
                {imageURL && (
                    <Image
                        src={imageURL}
                        alt={name}
                        width={100}
                        height={100}
                        onError={() => setError(true)}
                        className={
                            error ? "hidden" : "object-cover w-full h-full"
                        }
                    />
                )}
            </div>
            <div
                className={twMerge(
                    "size-[18px] rounded-full border-[3px] border-white-200 dark:border-purple-200 absolute -right-[3%] bottom-[10%]",
                    status === "free"
                        ? "bg-[#34C759]"
                        : status === "part"
                          ? "bg-[#FFCC00]"
                          : "bg-[#FF3B30]"
                )}
                aria-label={t("status")}
            ></div>
        </div>
    );
};
