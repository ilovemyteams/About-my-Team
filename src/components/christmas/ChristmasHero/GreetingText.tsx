import { useTranslations } from "next-intl";

import { IconFireworkBig } from "../../shared/Icons/christmas/IconFireworkBig";
import { WinLandingBtn } from "./WinLandingBtn";

export const GreetingText = () => {
    const getTranslation = useTranslations("Christmas");
    const title = getTranslation.rich("heroTitle", {
        purple: chunk => <span className="text-purple-100">{chunk}</span>,
    });

    return (
        <div
            className="text-center flex text-purple-200 dark:text-white-200 px-3 
         tab:px-0 pc:mx-0 pc:pr-[50px] pc:pt-[150px]"
        >
            <div className="flex flex-col items-end mx-auto max-w-[320px] tab:max-w-[555px] pc:max-w-[444px] desk:max-w-[518px]">
                <h2 className=" relative font-intro text-3xl28 mb-4 tab:text-6xln tab:mb-6  desk:text-[56px] desk:leading-[56px] whitespace-pre-wrap">
                    {title}
                </h2>
                <div className="relative w-full">
                    <IconFireworkBig
                        className="w-[145px] h-auto absolute z-[-1] left-0 top-0 translate-x-[-40%] translate-y-[-30%] 
                    tab:w-[280px] tab:top-[-5%] tab:translate-x-[-50%] tab:translate-y-[-40%]"
                    />
                    <IconFireworkBig
                        className="w-[80px] h-auto absolute z-[-1] right-0 top-0 scale-x-[-1] translate-x-[50%] 
                    translate-y-[-10%] tab:w-[140px] tab:translate-y-[-20%] tab:translate-x-[80%]"
                    />
                </div>
                <p className="text-sm20 mb-3 tab:text-xl28 tab:mb-4 desk:text-2xl34 desk:mb-6 whitespace-pre-wrap">
                    {getTranslation("heroText")}
                </p>
                <WinLandingBtn />
            </div>
        </div>
    );
};
