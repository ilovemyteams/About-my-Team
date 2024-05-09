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

    return (
        <div className="hidden tab:flex relative min-w-[288px] h-auto mx-4 tab:mx-6 pc:mx-8 border border-purple-strokeLight dark:border-purple-stroke">
            {pricePerHour && (
                <div className="absolute right-2 flex text-sm justify-center items-center w-[95px] h-5 ml-auto -mr-2 text-purple-130 dark:text-purple-50 border border-r-0 border-t-0 border-purple-strokeLight dark:border-purple-stroke">
                    {`from ${pricePerHour} $/h`}
                </div>
            )}
            <div className="flex flex-col justify-between border-r border-purple-strokeLight dark:border-purple-stroke">
                <div>
                    <div className="w-[206px] h-[170px] relative mx-4 mt-11">
                        {imageURL ? (
                            <Image
                                src={imageURL}
                                width={206}
                                height={170}
                                className="w-[206px] h-[170px]  object-cover"
                                alt={data[locale as LocaleType]?.name}
                                loading="lazy"
                            />
                        ) : (
                            <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientLight dark:bg-memberMenuGradientDark">
                                <IconProfile className="w-[80%] tab:w-[59%] h-auto text-purple-strokeLight dark:text-purple-stroke" />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-between content-between min-h-[60px] ml-5 mt-[25px]">
                        <p className="font-caviar font-bold text-base text-purple-200 dark:text-white-200 mb-1 min-h-[40px]">
                            {data[locale as LocaleType]?.name}
                        </p>
                        <p className="text-xs text-purple-130 dark:text-purple-50">
                            {position.toUpperCase()}
                        </p>
                    </div>
                </div>
                <MemberSocialLinks socialLinks={socialLinks} />
                <SharePopover
                    className="absolute bottom-0 right-0"
                    trigerShowShareText={true}
                    hiddenTextForMemberModal={true}
                />
            </div>
            <div className="mx-4">
                <ul className="mt-11">
                    <li className="mb-4 ">
                        <MemberLiSquare text={getTranslation("about")} />
                        <p className="h-auto text-base ml-2">
                            {data[locale as LocaleType]?.about}
                        </p>
                    </li>
                    <li className="mb-4">
                        <MemberLiSquare text={getTranslation("services")} />
                        <p className="text-base ml-2 h-auto">
                            {data[locale as LocaleType]?.services}
                        </p>
                    </li>
                    <li className="mb-4">
                        <MemberLiSquare
                            text={getTranslation("projectsExperience")}
                        />
                        <MemberProjectExperience
                            projectsExperience={projectsExperience}
                        />
                    </li>
                    <li className="mb-4">
                        <MemberLiSquare text={getTranslation("tools")} />
                        <MemberTools tools={tools} />
                    </li>
                </ul>
            </div>
        </div>
    );
};
