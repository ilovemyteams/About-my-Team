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
        <div
            className=" min-w-[288px] aspect-[288/240]
          border-[1px] border-purple-stroke 
          tab:w-[250px] tab:h-[270px] pc:w-[270px] pc:h-[292px]
           "
        >
            <div
                className="min-w-[286px] aspect-[288/240]
             relative  tab:m-[8px] pc:m-[12px] tab:w-[234px] tab:h-[187px] pc:w-[246px] pc:h-[196px] overflow-hidden"
            >
                {imageURL ? (
                    <Image
                        src={imageURL}
                        width={286}
                        height={158}
                        className="hover:scale-110 cursor-pointer object-cover w-full"
                        alt={data[locale as LocaleType]?.name}
                    />
                ) : (
                    <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-0 right-0 " />
                )}
            </div>

            <div className="mt-3 ml-3">
                <h4 className="font-caviar text-baseb text-white">
                    {data[locale as LocaleType]?.name}
                </h4>
                <div className="flex font-geist text-xs justify-between items-center">
                    <p className="text-purple-50">{position.toUpperCase()}</p>
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
