"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { NoImageHeart } from "../shared/NoImageHeart";
import { MemberDataItemType } from "../../mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";
import { SocialLinkSmallMemberCard } from "./SocialLinkSmallMemberCard";
import Link from "next/link";

export interface MemberCardProps {
    data: MemberDataItemType;
}
export const MemberCard = ({ data }: MemberCardProps) => {
    const { imageURL, position, socialLinks, id } = data.data;
    const locale = useLocale();

    return (
        <div
            className="pt-2 pl-[6px] flex flex-col 
            tab:odd:border-r-[1px] tab:border-purple-stroke 
            tab:[&:nth-child(1)]:border-b-[1px] tab:[&:nth-child(2)]:border-b-[1px]
            tab:pl-2 relative"
        >
            <div className="relative min-w-[128px] aspect-[128/150] mr-[6px] overflow-hidden tab:min-w-[234px] tab:aspect-[234/186] tab:mr-2 mb-2 ">
                {imageURL ? (
                    <Link href={`/member/${id}`}>
                        <Image
                            src={imageURL}
                            width={246}
                            height={196}
                            className="hover:scale-105 cursor-pointer object-cover min-w-[128px] aspect-[128/150] w-full tab:aspect-[234/186]"
                            alt={data[locale as LocaleType]?.name}
                        />
                    </Link>
                ) : (
                    <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]" />
                )}
            </div>

            <div className="flex flex-col justify-between min-h-[144px] tab:min-h-[84px] ">
                <h4 className="font-caviar text-baseb text-white pr-2 min-h-[60px] tab:min-h-[40px] mb-[14px] tab:mb-1">
                    {data[locale as LocaleType]?.name}
                </h4>
                <p className="text-purple-50 font-geist text-xs mr-12 mb-[10px] tab:w-[76%] tab:mr-0">
                    {position.toUpperCase()}
                </p>
            </div>

            <SocialLinkSmallMemberCard
                url={socialLinks.linkedin}
                image={"linkedin.svg"}
                alt={"Linkedin"}
            />
        </div>
    );
};
