import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import { MemberDataItemType } from "../../mockedData/membersData";
import { LocaleType } from "@/types/LocaleType";
import { SocialLink } from "../shared/SocialLink";
import { IconLinkedin } from "../shared/Icons/IconLinkedin";
import { IconProfile } from "../shared/Icons/IconProfile";
import { IconHeart } from "../shared/Icons/IconHeart";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";

export interface MemberCardProps {
    data: MemberDataItemType;
}
export const MemberCard = ({ data }: MemberCardProps) => {
    const { imageURL, position, socialLinks, id } = data.data;
    const locale = useLocale();
    const iconLinkedin = <IconLinkedin className="w-6 h-6" />;
    const { setPreviousURL } = usePreviousURL();

    const savingFilteredListURL = () => {
        const url = window.location.href;
        const END_OF_URL = -5;
        url.slice(END_OF_URL) !== `#team`
            ? setPreviousURL(`${window.location.href}#team`)
            : setPreviousURL(window.location.href);
    };

    return (
        <div
            className="flex flex-col justify-between pt-2 pc:pt-3 pl-[6px] tab:pl-2 pc:pl-3 tab:border-purple-strokeLight dark:tab:border-purple-stroke 
            tab:aspect-[250/270] pc:aspect-[270/292] 
            tab:odd:border-r tab:[&:nth-child(1)]:border-b tab:[&:nth-child(2)]:border-b 
            pc:[&:nth-child(3)]:border-b pc:border-r pc:[&:nth-child(3)]:border-r-transparent pc:[&:nth-child(6)]:border-r-transparent
            deskxl:border-r deskxl:[&:nth-child(4)]:border-r-transparent deskxl:[&:nth-child(8)]:border-r-transparent deskxl:[&:nth-child(3)]:border-r-purple-strokeLight dark:deskxl:[&:nth-child(3)]:border-r-purple-stroke deskxl:[&:nth-child(6)]:border-r-purple-strokeLight dark:deskxl:[&:nth-child(6)]:border-r-purple-stroke deskxl:[&:nth-child(4)]:border-b"
        >
            <Link
                href={`/${locale}/member/${id}`}
                onClick={savingFilteredListURL}
            >
                <div className="relative min-w-[128px] aspect-[128/150] mr-[6px] overflow-hidden tab:min-w-[234px] tab:aspect-[234/186] pc:aspect-[246/196] tab:mr-2 pc:mr-3 mb-2 pc:mb-3 dark:bg-CTAGradient bg-CTAGradientLight z-[-2]">
                    <div className="absolute top-0 right-0 w-[65%] tab:w-[45%] h-auto z-[-1]">
                        <IconHeart className="w-full h-full " />
                    </div>
                    {imageURL ? (
                        <Image
                            src={imageURL}
                            width={246}
                            height={196}
                            className="hover:scale-105 duration-300 ease-out transition-transform cursor-pointer object-cover min-w-[128px]  w-full 
                                aspect-[128/150] tab:aspect-[234/186] pc:aspect-[246/196] "
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
