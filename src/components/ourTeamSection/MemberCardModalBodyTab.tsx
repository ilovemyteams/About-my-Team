import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { LocaleType } from "@/types/LocaleType";
import { SharePopover } from "../shared/SharePopover";
import { NoImageHeart } from "../shared/NoImageHeart";
import { MemberDataItemType } from "@/src/mockedData/membersData";

interface MemberCardModalBodyProp {
    data: MemberDataItemType;
}

export const MemberCardModalBodyTab = ({ data }: MemberCardModalBodyProp) => {
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
        <div className="hidden tab:flex relative min-w-[288px] h-auto mx-4 tab:mx-6  border border-purple-stroke">
            {pricePerHour && (
                <div className="absolute right-2 flex text-sm justify-center items-center w-[95px] h-5 ml-auto -mr-2 text-purple-50 border border-r-0 border-t-0 border-purple-stroke">
                    {`from ${pricePerHour} $/h`}
                </div>
            )}
            <div className="flex flex-col justify-between border-r border-purple-stroke">
                <div>
                    <div className="w-[206px] h-[170px] relative mx-4 mt-11">
                        {imageURL ? (
                            <Image
                                src={imageURL}
                                width={206}
                                height={170}
                                className="w-[206px] h-[170px]  object-cover"
                                alt={data[locale as LocaleType]?.name}
                            />
                        ) : (
                            <NoImageHeart className="w-[43%] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]" />
                        )}
                    </div>
                    <div className="flex flex-col justify-between h-[60px] ml-5 mt-[25px]">
                        <p className="font-caviar font-bold text-sm text-white mb-1">
                            {data[locale as LocaleType]?.name}
                        </p>
                        <p className="text-xs text-purple-50">
                            {position.toUpperCase()}
                        </p>
                    </div>
                </div>
                <ul className="flex justify-between ">
                    {memberSocialLinks.map(({ url, image, alt }, idx) => (
                        <li
                            key={idx}
                            className="flex w-full h-[34px] justify-center items-center border-t border-purple-stroke [&:nth-child(1)]:border-r"
                        >
                            <div className="w-6 h-6">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cursor-pointer flex justify-center items-center w-[24px] h-[24px] pc:p-3
            icon-hover-rounded-purple icon-hover-rounded-purple:hover icon-hover-rounded-purple:focus-visible icon-hover-rounded-purple:focus-within
            icon-hover-rounded-purple:active relative"
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

                <SharePopover
                    className="absolute bottom-0 right-0"
                    trigerShowShareText={true}
                />
            </div>
            <div className="mx-4">
                <ul className="mt-11">
                    <li className="mb-4 ">
                        <div className="flex items-center mb-[6px]">
                            <div className="w-2 h-2 border-red border-[2px] mr-2"></div>
                            <span className="font-caviar text-base font-bold text-white ">
                                {getTranslation("about")}
                            </span>
                        </div>
                        <p className="h-auto text-base ml-2">
                            {data[locale as LocaleType]?.about}
                        </p>
                    </li>
                    <li className="mb-4">
                        <div className="flex items-center mb-[6px]">
                            <div className="w-2 h-2 border-red border-[2px] mr-2"></div>
                            <span className="font-caviar text-base font-bold text-white">
                                {getTranslation("services")}
                            </span>
                        </div>

                        <p className="text-base ml-2 h-auto">
                            {data[locale as LocaleType]?.services}
                        </p>
                    </li>
                    <li className="mb-4">
                        <div className="flex items-center mb-[6px]">
                            <div className="w-2 h-2 border-red border-[2px] mr-2"></div>

                            <span className="font-caviar text-base font-bold text-white">
                                {getTranslation("projectsExperience")}
                            </span>
                        </div>
                        <ul>
                            {projectsExperience
                                .slice(0, 3)
                                .map((project, index) => (
                                    <li
                                        key={index}
                                        className="px-0 truncate w-[442px] dark:pc:hover:text-red pc:hover:text-redLight dark:pc:focus:text-red pc:focus:text-redLight pc:transition pc:ease-out pc:duration-300 dark:active:text-red active:text-redLight"
                                    >
                                        <a
                                            target="_blank"
                                            href={project}
                                            className="text-base ml-2"
                                        >
                                            {project}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </li>
                    <li className="mb-4">
                        <div className="flex items-center mb-[6px]">
                            <div className="w-2 h-2 border-red border-[2px] mr-2"></div>
                            <span className="font-caviar text-base font-bold text-white">
                                {getTranslation("tools")}
                            </span>
                        </div>
                        <ul className="overflow-hidden flex flex-wrap max-h-[80px] ml-[6px] mb-10">
                            {tools.map((tool, idx) => (
                                <li
                                    key={idx}
                                    className=" m-1 border border-grey px-2 py-[4.5px] text-base "
                                >
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

{
    /* <Image
                src="/images/bgModalMember/SubtractTopRight.png"
                alt="background"
                width={320}
                height={319}
                className="absolute top-0 right-0 z-[-1]"
            />
            <Image
                src="/images/bgModalMember/SubtractCenterRight.png"
                alt="background"
                width={311}
                height={163}
                className="absolute bottom-[28px] left-0 z-[-1]"
            />
            <Image
                src="/images/bgModalMember/SubtractBottomLeft.png"
                alt="background"
                width={209}
                height={192}
                className="absolute bottom-0 left-0 z-[-1]"
            /> */
}
