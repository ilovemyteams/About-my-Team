import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { LocaleType } from "@/types/LocaleType";
import { SharePopover } from "../shared/SharePopover";
import { NoImageHeart } from "../shared/NoImageHeart";
import { MemberDataItemType } from "@/src/mockedData/membersData";

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
        <div className="relative w-[288px] h-auto mx-auto ">
            <div className="p-[8px] pt-0 border border-purple-stroke">
                <div className="flex text-sm justify-center items-center w-[95px] h-5 ml-auto -mr-2 text-purple-50 border border-r-0 border-t-0 border-purple-stroke">
                    {`from ${pricePerHour} $/h`}
                </div>

                <div className="h-[60px] flex items-end gap-[8px] -mt-1 mb-[16px]">
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
                            <div className="w-[8px] h-[8px] border-red border-[2px] mr-2"></div>
                            <span className="font-caviar text-sm font-bold text-white">
                                {getTranslation("about")}
                            </span>
                        </div>
                        <p className="max-h-[85px] text-sm ml-4">
                            {data[locale as LocaleType]?.about}
                        </p>
                    </li>
                    <li className="mb-[16px]">
                        <div className="flex items-center mb-[8px]">
                            <div className="w-[8px] h-[8px] border-red border-[2px] mr-2"></div>
                            <span className="font-caviar text-sm font-bold text-white">
                                {getTranslation("services")}
                            </span>
                        </div>

                        <p className="text-sm ml-4">
                            {data[locale as LocaleType]?.services}
                        </p>
                    </li>
                    <li className="mb-[16px]">
                        <div className="flex items-center mb-[8px]">
                            <div className="w-[8px] h-[8px] border-red border-[2px] mr-2"></div>
                            <span className="font-caviar text-sm font-bold text-white">
                                {getTranslation("tools")}
                            </span>
                        </div>
                        <ul className="h-[80px] overflow-hidden flex flex-wrap text-sm ml-3">
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
                            <div className="w-[8px] h-[8px] border-red border-[2px] mr-2"></div>

                            <span className="font-caviar text-sm font-bold text-white">
                                {getTranslation("projectsExperience")}
                            </span>
                        </div>
                        <p className="text-sm ml-4">{projectsExperience}</p>
                    </li>
                </ul>
                <SharePopover
                    className="absolute bottom-[44px] right-0"
                    trigerShowShareText={true}
                />
            </div>
            <ul className="flex justify-between ">
                {memberSocialLinks.map(({ url, image, alt }, idx) => (
                    <li
                        key={idx}
                        className="flex w-full h-[34px] justify-center items-center border-[1px] border-purple-stroke"
                    >
                        <div className="w-[24px] h-[24px]">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer flex justify-center items-center w-[24px] h-[24px] pc:p-3
            icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            icon-hover-rounded-purple:active "
                            >
                                <Image
                                    src={image}
                                    alt={alt}
                                    width="24"
                                    height="24"
                                />
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
