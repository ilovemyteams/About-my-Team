"use client";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { LocaleType } from "@/types/LocaleType";
import { SharePopover } from "../../shared/SharePopover";
import { MemberDataItemType } from "@/src/mockedData/membersData";
import { MemberSocialLinks } from "./MemberSocialLinks";
import { MemberProjectExperience } from "./MemberProjectExperience";
import { MemberTools } from "./MemberTools";
import { MemberLiSquare } from "./MemberLiSquare";
import { IconProfile } from "../../shared/Icons/IconProfile";
import { useTheme } from "next-themes";

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
    const { theme } = useTheme();
    // const themesBlurDataURL = {
    //     light: "/images/plugMemberModal.webp",
    //     dark: "/images/plugMemberModalDark.webp",
    // };

    const getTranslation = useTranslations("MemberCardModal");
    const locale = useLocale();
    const blurDataURLMob =
        theme === "dark"
            ? "/images/plugMemberModalDark.webp"
            : "/images/plugMemberModal.webp";

    return (
        <div className="tab:hidden relative min-w-[288px] h-auto mx-4 tab:mx-6">
            <div className="p-[8px] pt-0 border border-purple-strokeLight dark:border-purple-stroke border-b-0 ">
                {pricePerHour && (
                    <div className="absolute right-2 flex text-sm justify-center items-center w-[95px] h-5 ml-auto -mr-2 text-purple-130 dark:text-purple-50 border border-r-0 border-t-0 border-purple-strokeLight dark:border-purple-stroke">
                        {`from ${pricePerHour} $/h`}
                    </div>
                )}

                <div className="h-[60px] flex items-end gap-[8px] my-4 ml-2">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden dark:bg-CTAGradient bg-CTAGradientLight">
                        {imageURL ? (
                            <Image
                                src={imageURL}
                                width={60}
                                height={60}
                                objectFit="cover"
                                alt={data[locale as LocaleType]?.name}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={blurDataURLMob}
                            />
                        ) : (
                            <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientLight dark:bg-memberMenuGradientDark">
                                <IconProfile className="w-[80%] tab:w-[59%] h-auto text-purple-strokeLight dark:text-purple-stroke" />
                            </div>
                        )}
                    </div>
                    <div className="">
                        <p className="font-caviar font-bold text-sm text-purple-200 dark:text-white-200 mb-1">
                            {data[locale as LocaleType]?.name}
                        </p>
                        <p className="text-xs text-purple-130 dark:text-purple-50">
                            {position.toUpperCase()}
                        </p>
                    </div>
                </div>
                <ul>
                    <li className="mb-4 ">
                        <MemberLiSquare text={getTranslation("about")} />
                        <p className="h-auto text-sm mx-4 ">
                            {data[locale as LocaleType]?.about}
                        </p>
                    </li>
                    <li className="mb-4">
                        <MemberLiSquare text={getTranslation("services")} />
                        <p className="text-sm mx-4 h-auto">
                            {data[locale as LocaleType]?.services}
                        </p>
                    </li>
                    <li className="mb-4">
                        <MemberLiSquare text={getTranslation("tools")} />
                        <MemberTools tools={tools} />
                    </li>
                    <li className="mb-2">
                        <MemberLiSquare
                            text={getTranslation("projectsExperience")}
                        />
                        <MemberProjectExperience
                            projectsExperience={projectsExperience}
                        />
                    </li>
                </ul>
                <SharePopover
                    className="absolute bottom-[44px] right-0"
                    trigerShowShareText={true}
                />
            </div>
            <MemberSocialLinks socialLinks={socialLinks} />
        </div>
    );
};
