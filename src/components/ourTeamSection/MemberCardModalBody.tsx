import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { LocaleType } from "@/types/LocaleType";
//import { SocialLinkSmallMemberCard } from "./SocialLinkSmallMemberCard";
import { SharePopover } from "../shared/SharePopover";
import { MemberDataItemType } from "../shared/mockedData/membersData";
import { NoImageHeart } from "../shared/NoImageHeart";

interface MemberCardModalBodyProp {
    data: MemberDataItemType;
}

export const MemberCardModalBody = ({ data }: MemberCardModalBodyProp) => {
    const {
        imageURL,
        position,
        pricePerHour,
        tools,
        projectsExperience,
        socialLinks,
    } = data.data;

    const getTranslation = useTranslations("MemberCardModal");
    const locale = useLocale();

    const memberSocialLinks = [
        {
            url: socialLinks.telegram,
            image: "/images/telegramIcon.svg",
            alt: "Telegram",
        },
        {
            url: socialLinks.linkedin,
            image: "/images/linkedin.svg",
            alt: "Linkedin",
        },
    ];

    return (
        <div className="relative w-[288px] h-auto mx-auto">
            <div className="absolute top-0 right-0 text-sm py-[2px] px-[4px] text-purple-50 border-[1px] border-r-0 border-purple-stroke">{`from ${pricePerHour} $/h`}</div>
            <div className="relative p-[8px] border-[1px] border-purple-stroke">
                <div className="h-[60px] flex items-end gap-[8px] mt-[8px] mb-[16px]">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                        {imageURL ? (
                            <Image
                                src={imageURL}
                                width={60}
                                height={60}
                                objectFit="cover"
                                alt={data[locale as LocaleType]?.name}
                            />
                        ) : (
                            <NoImageHeart className="w-[43%] tab:w-[50%] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]" />
                        )}
                    </div>
                    <div className="">
                        <p className="font-caviar font-bold text-sm text-white mb-[4px]">
                            {data[locale as LocaleType]?.name}
                        </p>
                        <p className="text-xs text-purple-50">
                            {position.toUpperCase()}
                        </p>
                    </div>
                </div>
                <ul>
                    <li className="mb-[16px]">
                        <div className="flex items-center mb-[8px]">
                            <div className="w-[8px] h-[8px] border-red border-[2px] mr-[5px]"></div>
                            <span className="font-caviar text-sm font-bold text-white">
                                {getTranslation("about")}
                            </span>
                        </div>
                        <p className="max-h-[85px] text-sm ">
                            {data[locale as LocaleType]?.about}
                        </p>
                    </li>
                    <li className="mb-[16px]">
                        <div className="flex items-center mb-[8px]">
                            <div className="w-[8px] h-[8px] border-red border-[2px] mr-[5px]"></div>
                            <span className="font-caviar text-sm font-bold text-white">
                                {getTranslation("services")}
                            </span>
                        </div>

                        <p className="w-full text-sm ">
                            {data[locale as LocaleType]?.services}
                        </p>
                    </li>
                    <li className="mb-[16px]">
                        <div className="flex items-center mb-[8px]">
                            <div className="w-[8px] h-[8px] border-red border-[2px] mr-[5px]"></div>
                            <span className="font-caviar text-sm font-bold text-white">
                                {getTranslation("tools")}
                            </span>
                        </div>
                        <ul className="h-[80px] overflow-hidden flex flex-wrap text-sm ">
                            {tools.map((tool, idx) => (
                                <li
                                    key={idx}
                                    className="flex-auto justify-center items-center mx-[4px] my-[8px] border-[1px] border-grey px-[8px] py-[4.5px] text-sm "
                                >
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mb-[8px]">
                        <div className="flex items-center mb-[8px]">
                            <div className="w-[8px] h-[8px] border-red border-[2px] mr-[5px]"></div>

                            <span className="font-caviar text-sm font-bold text-white">
                                {getTranslation("projectsExperience")}
                            </span>
                        </div>
                        <p className="text-sm ">{projectsExperience}</p>
                    </li>
                </ul>
                <SharePopover
                    className="absolute bottom-[10px] right-0"
                    trigerShowShareText={true}
                />
            </div>
            <ul className="flex justify-between ">
                {memberSocialLinks.map(({ url, image, alt }, idx) => (
                    <li
                        key={idx}
                        className="flex w-full h-[32px] justify-center border-[1px] border-purple-stroke"
                    >
                        <div className="w-[24px] h-[24px]">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer flex justify-center items-center w-[24px] h-[24px] pc:p-3
            icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            icon-hover-rounded-purple:active"
                            >
                                <Image
                                    src={image}
                                    alt={alt}
                                    width="0"
                                    height="0"
                                    className="w-[24px] h-[24px] object-cover"
                                />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
