import { useLocale } from "next-intl";
import { MouseEvent } from "react";

import { Link, useRouter } from "@/src/i18n/routing";
import { MemberDataItemType } from "@/src/mockedData/membersData";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";
import { LocaleType } from "@/types/LocaleType";

import { IconLinkedin } from "./Icons/IconLinkedin";
import { IconProfile } from "./Icons/IconProfile";
import { ImageFromCloud } from "./ImageFromCloud";
import { SocialLink } from "./SocialLink";

export const MemberCard = ({ data }: { data: MemberDataItemType }) => {
    const { imageURL, position, socialLinks, id } = data.data;
    const locale = useLocale();
    const iconLinkedin = <IconLinkedin className="w-6 h-6" />;
    const { setPreviousURL } = usePreviousURL();
    const router = useRouter();

    const savingFilteredListURL = (e: MouseEvent) => {
        e.preventDefault();
        setPreviousURL(`back`);
        router.push(`/member/${id}`);
    };

    return (
        <div
            className="flex flex-col justify-between pt-2 pc:pt-3 pl-[7px] tab:pl-2 pc:pl-3 tab:border-purple-strokeLight dark:tab:border-purple-stroke 
            tab:aspect-[240/270] pc:aspect-[270/292] 
            tab:border-t tab:border-l tab:[&:nth-child(3n)]:border-r tab:[&:nth-last-child(-n+3)]:border-b
            pc:[&:nth-child(3)]:border-b pc:border-r pc:[&:nth-child(3)]:border-r-transparent pc:[&:nth-child(6)]:border-r-transparent
            deskxl:border-r deskxl:[&:nth-child(4)]:border-r-transparent deskxl:[&:nth-child(8)]:border-r-transparent deskxl:[&:nth-child(3)]:border-r-purple-strokeLight dark:deskxl:[&:nth-child(3)]:border-r-purple-stroke deskxl:[&:nth-child(6)]:border-r-purple-strokeLight dark:deskxl:[&:nth-child(6)]:border-r-purple-stroke deskxl:[&:nth-child(4)]:border-b"
        >
            <Link
                href={`/member/${id}`}
                onClick={savingFilteredListURL}
                className="group"
            >
                <div className="relative min-w-[128px] aspect-[128/150] mr-[7px] overflow-hidden tab:min-w-[224px] tab:aspect-[224/187] pc:aspect-[246/196] tab:mr-2 pc:mr-3 mb-2 pc:mb-3 dark:bg-CTAGradient bg-CTAGradientLight z-[-2] ">
                    {imageURL ? (
                        <ImageFromCloud
                            storage="members"
                            src={imageURL}
                            width={600}
                            height={400}
                            className="group-hover:scale-110 duration-300 ease-out transition-transform cursor-pointer object-cover min-w-[128px]  w-full 
                                aspect-[128/150] tab:aspect-[224/187] pc:aspect-[246/196] "
                            alt={data[locale as LocaleType]?.name}
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex items-end justify-center h-full w-full bg-memberMenuGradientLight dark:bg-memberMenuGradientDark">
                            <IconProfile className="w-[80%] tab:w-[59%] h-auto text-purple-strokeLight dark:text-purple-stroke" />
                        </div>
                    )}
                </div>
            </Link>
            <div className="min-h-[100px] tab:min-h-[59px] pc:min-h-[72px] flex flex-col justify-between content-between">
                <h4 className="font-caviar text-baseb text-purple-200 dark:text-white-200 pr-2">
                    {data[locale as LocaleType]?.name}
                </h4>
                <div className="flex font-geist text-xs justify-between items-center relative">
                    <p className="text-purple-130 dark:text-purple-50 tab:mr-12 min-h-12 flex items-center tab:w-full">
                        {position.toUpperCase()}
                    </p>
                    <div>
                        <SocialLink
                            url={socialLinks.linkedin}
                            image={iconLinkedin}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
