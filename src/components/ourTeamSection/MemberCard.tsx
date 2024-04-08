"use client";

import Image from "next/image";
import { SocialLinkSmallMemberCard } from "./SocialLinkSmallMemberCard";
//import { NoImageHeart } from "../shared/NoImageHeart";
import { MemberDataItemType } from "./data/membersData";
import { useLocale } from "next-intl";
import { LocaleType } from "@/types/LocaleType";

interface MemberCardProps {
    data: MemberDataItemType;
}
export const MemberCard = ({ data }: MemberCardProps) => {
    const { id, imageURL, position, socialLinks } = data.data;
    const locale = useLocale();
    console.log(imageURL);

    return (
        <div className="w-[288px} h-[240px] border-[1px] border-purple-stroke tab:max-w-full ">
            <li key={id} className="list-none">
                <div className="">
                    <Image
                        src="" //imageURL
                        width={288}
                        height={158}
                        alt={data[locale as LocaleType]?.name}
                    />
                    <div className="mt-[8px] ml-[8px] mb-[12px]">
                        <h4 className="font-caviar text-baseb mb-[4px]">
                            {data[locale as LocaleType]?.name}
                        </h4>
                        <div className="flex font-geist text-xs justify-between items-center">
                            <p className="py-[1.5px]">
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
            </li>
        </div>
    );
};

//<SocialLink url={url} image={image} alt={alt} />
