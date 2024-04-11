"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { SocialLinkSmallMemberCard } from "./SocialLinkSmallMemberCard";
import { NoImageHeart } from "../shared/NoImageHeart";
import { MemberDataItemType } from "./data/membersData";
import { LocaleType } from "@/types/LocaleType";

interface MemberCardProps {
    data: MemberDataItemType;
}
export const MemberCard = ({ data }: MemberCardProps) => {
    const { imageURL, position, socialLinks } = data.data;
    const locale = useLocale();

    return (
        <div className="pt-2 pl-[6px] flex flex-col justify-between">
            <div className="relative min-w-[128px] aspect-[128/150] pr-[6px]">
                {imageURL ? (
                    <Image
                        src={imageURL}
                        width={246}
                        height={196}
                        className="hover:scale-105 cursor-pointer object-cover min-w-[128px] aspect-[128/150] w-full "
                        alt={data[locale as LocaleType]?.name}
                    />
                ) : (
                    <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]" />
                )}
            </div>

            <div className="min-h-[106px] flex flex-col justify-between">
                <h4 className="font-caviar text-baseb text-white pr-2">
                    {data[locale as LocaleType]?.name}
                </h4>
                <div className="flex font-geist text-xs justify-between items-center">
                    <p className="text-purple-50 w-min">
                        {position.toUpperCase()}
                    </p>
                    <SocialLinkSmallMemberCard
                        url={socialLinks.linkedin}
                        image={"linkedin.svg"}
                        alt={"Linkedin"}
                    />
                </div>
            </div>
        </div>
    );
};
