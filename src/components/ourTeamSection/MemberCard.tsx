"use client";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import { NoImageHeart } from "../shared/NoImageHeart";
import { MemberDataItemType } from "../../mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";
import { SocialLinkSmallMemberCard } from "./SocialLinkSmallMemberCard";

export interface MemberCardProps {
    data: MemberDataItemType;
}
export const MemberCard = ({ data }: MemberCardProps) => {
    const { imageURL, position, socialLinks, id } = data.data;
    const locale = useLocale();

    return (
        <div
            className="flex flex-col justify-between pt-2 pc:pt-3 pl-[6px] tab:pl-2 pc:pl-3 tab:border-purple-stroke 
            tab:odd:border-r pc:border-r pc:[&:nth-child(3)]:border-r-0 pc:[&:nth-child(6)]:border-r-0
            tab:[&:nth-child(1)]:border-b tab:[&:nth-child(2)]:border-b pc:[&:nth-child(3)]:border-b
            tab:aspect-[250/270] "
        >
            <div className="relative min-w-[128px] aspect-[128/150] mr-[6px] overflow-hidden tab:min-w-[234px] tab:aspect-[234/186] pc:aspect-[246/196] tab:mr-2 pc:mr-3 mb-2 pc:mb-3 ">
                {imageURL ? (
                    <Link href={`/member/${id}`}>
                        <Image
                            src={imageURL}
                            width={246}
                            height={196}
                            className="hover:scale-105 duration-300 ease-out transition-transform cursor-pointer object-cover min-w-[128px] aspect-[128/150] w-full tab:aspect-[234/186] pc:aspect-[246/196]"
                            alt={data[locale as LocaleType]?.name}
                        />
                    </Link>
                ) : (
                    <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]" />
                )}
            </div>

            <div className="min-h-[88px] tab:min-h-[59px] pc:min-h-[72px] flex flex-col justify-between">
                <h4 className="font-caviar text-baseb text-white-200 pr-2">
                    {data[locale as LocaleType]?.name}
                </h4>
                <div className="flex font-geist text-xs justify-between items-center relative">
                    <p className="text-purple-50 mr-12 min-h-12 flex items-center tab:w-full">
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
