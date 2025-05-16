import Link from "next/link";
import { useLocale } from "next-intl";

import { MemberDataItemType } from "@/src/mockedData/membersData";
import { usePreviousURL } from "@/src/utils/PreviousURLContext";
import { LocaleType } from "@/types/LocaleType";

import { IconLinkedin } from "../../shared/Icons/IconLinkedin";
import { IconProfile } from "../../shared/Icons/IconProfile";
import { ImageFromCloud } from "../../shared/ImageFromCloud";
import { SocialLink } from "../../shared/SocialLink";

export const MemberCardMain = ({ data }: { data: MemberDataItemType }) => {
    const { imageURL, position, socialLinks, id } = data.data;
    const locale = useLocale();
    const iconLinkedin = (
        <IconLinkedin className="pc:w-[30px] pc:h-[30px] desk:w-9 desk:h-9" />
    );
    const { setPreviousURL } = usePreviousURL();

    const savingFilteredListURL = () => {
        const url = window.location.href;
        if (url.includes("#")) {
            const requiredPartURL = url.split("#");
            return setPreviousURL(`${requiredPartURL[0]}#team`);
        }
        setPreviousURL(`${window.location.href}#team`);
    };

    return (
        <div
            className="flex flex-col justify-between p-4 desk:p-5 border-purple-strokeLight tab:border-purple-stroke 
            pc:aspect-[336/368] border"
        >
            <Link
                href={`/${locale}/member/${id}`}
                onClick={savingFilteredListURL}
                className="group mb-4 desk:mb-5"
            >
                <div className="relative overflow-hidden pc:aspect-[304/245] dark:bg-CTAGradient bg-CTAGradientLight z-[-2] ">
                    {imageURL ? (
                        <ImageFromCloud
                            storage="members"
                            src={imageURL}
                            width={246}
                            height={196}
                            className="group-hover:scale-110 duration-300 ease-out transition-transform cursor-pointer object-cover w-full 
                                pc:aspect-[304/245] "
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
            <div className="relative pc:min-h-[75px] desk:min-h-[91px] flex flex-col justify-between content-between">
                <h4 className="font-caviar text-xlb desk:text-2xlb text-purple-200 dark:text-white-200 pr-2">
                    {data[locale as LocaleType]?.name}
                </h4>
                <p className="text-purple-130 dark:text-purple-50 font-geist text-base flex items-center pr-[48px]">
                    {position.toUpperCase()}
                </p>
                <div className="absolute bottom-[-16px] right-[-16px] desk:bottom-[-20px] desk:right-[-20px]  flex items-center justify-center ">
                    <SocialLink
                        url={socialLinks.linkedin}
                        image={iconLinkedin}
                        className="pc:w-[60px] pc:h-[60px] desk:w-[73px] desk:h-[73px]"
                    />
                </div>
            </div>
        </div>
    );
};
