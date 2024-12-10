import { BuyMeCoffeeLink } from "../shared/BuyMeCoffeeLink";
import { SharePopover } from "../shared/SharePopover";
import { Copyright } from "./Copyright";
import { MenuFooter } from "./MenuFooter";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { TitleFooter } from "./TitleFooter";

export const Footer = () => {
    return (
        <footer className="pc:ml-[80px] deskxl:ml-[120px] pb-5 tab:pb-[40px]">
            <div className="container max-w-[540px] tab:max-w-full desk:max-w-[1456px]">
                <div className="border-y-[1px] border-solid dark:border-purple-stroke border-purple-strokeLight desk:mx-auto">
                    <div className="flex items-end justify-between mb-9 tab:mb-[98px] pc:mb-[121px] desk:mb-[156px] mt-5 tab:mt-[40px] pc:mt-[46px]">
                        <TitleFooter />
                        <SharePopover
                            className="relative bottom-[-10px] pc:bottom-[-4px]"
                            trigerShowShareText={true}
                        />
                    </div>
                    <div className="flex tab:items-end tab:h-[48px] mb-9 pc:mb-[28px] justify-between">
                        <MenuFooter />
                        <div className="flex items-start tab:items-end pt-[14px] tab:pt-[0px] pc:flex-row ">
                            <BuyMeCoffeeLink />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-[20px] tab:flex-row-reverse tab:justify-between tab:mt-[16px] pc:mt-[16px] pc:pb-0 pc:flex-row-reverse pc:justify-between">
                    <PrivacyPolicy />
                    <Copyright />
                </div>
            </div>
        </footer>
    );
};
