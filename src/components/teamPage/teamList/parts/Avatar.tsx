import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
    imageURL?: string;
    name: string;
    status: "free" | "part" | "busy";
}

export const Avatar = ({ imageURL, name, status }: AvatarProps) => {
    const t = useTranslations("MemberPage");
    return (
        <div className="relative w-fit">
            <div className="size-[80px]  tab:size-[92px] rounded-full bg-purple-strokeLight dark:bg-purple-stroke overflow-hidden">
                {imageURL && (
                    <Image src={imageURL} alt={name} width={100} height={100} />
                )}
            </div>
            <div
                className={twMerge(
                    "size-[18px] rounded-full border-[3px] border-purple-200 absolute -right-[3%] bottom-[10%]",
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
