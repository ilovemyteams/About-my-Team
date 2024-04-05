"use client";

import Image from "next/image";
import { SocialLink } from "../header/SocialLinks/SocialLink";
//import { NoImageHeart } from "../shared/NoImageHeart";
import { MemberDataItemType } from "./data/membersData";
import { useLocale } from "next-intl";
import { LocaleType } from "@/types/LocaleType";

interface MemberCardProps {
    data: MemberDataItemType;
}
export const MemberCard = ({ data }: MemberCardProps) => {
    const { id, imageURL, position } = data.data;
    const locale = useLocale();
    console.log(imageURL);

    return (
        <li key={id} className="">
            <div>
                <Image
                    src={imageURL}
                    width={40}
                    height={40}
                    alt={data[locale as LocaleType]?.name}
                />
                <div>
                    <h4>{data[locale as LocaleType]?.name}</h4>
                    <div>
                        <p>{position}</p>
                        <SocialLink url="" />
                    </div>
                </div>
            </div>
        </li>
    );
};

//<SocialLink url={url} image={image} alt={alt} />
